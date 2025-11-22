import { createContext, useContext, useEffect, useState } from "react";

import { courses } from "@/data/courses";
import { events } from "@/data/events";
import { productData as products } from "@/data/products";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // --- ЕДИНЫЕ НАЗВАНИЯ (стабильная версия) ---
  const [cartCourses, setCartCourses] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartEvents, setCartEvents] = useState([]);

  // --- Поддержка старых имен, чтобы ничего не ломалось ---
  const cartItemsCourses = cartCourses;
  const cartItemsProducts = cartProducts;
  const cartItemsEvents = cartEvents;

  // --- LOAD FROM LOCAL STORAGE ---
  useEffect(() => {
    setCartCourses(JSON.parse(localStorage.getItem("cartCourses")) || []);
    setCartProducts(JSON.parse(localStorage.getItem("cartProducts")) || []);
    setCartEvents(JSON.parse(localStorage.getItem("cartEvents")) || []);
  }, []);

  // --- SAVE TO LOCAL STORAGE ---
  useEffect(() => {
    localStorage.setItem("cartCourses", JSON.stringify(cartCourses));
  }, [cartCourses]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem("cartEvents", JSON.stringify(cartEvents));
  }, [cartEvents]);

  // -----------------------------
  // ADD COURSE
  // -----------------------------
  const addToCartCourses = (courseId) => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return;

    // добавляем дефолтное количество
    const item = { ...course, quantity: 1 };

    if (!cartCourses.some((c) => c.id === courseId)) {
      setCartCourses([...cartCourses, item]);
    }
  };

  const removeFromCartCourses = (courseId) => {
    setCartCourses(cartCourses.filter((c) => c.id !== courseId));
  };

  const isAddedToCartCourses = (courseId) =>
    cartCourses.some((c) => c.id === courseId);

  // -----------------------------
  // ADD PRODUCT
  // -----------------------------
  const addToCartProducts = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const item = { ...product, quantity: 1 };

    if (!cartProducts.some((p) => p.id === productId)) {
      setCartProducts([...cartProducts, item]);
    }
  };

  const removeFromCartProducts = (productId) => {
    setCartProducts(cartProducts.filter((p) => p.id !== productId));
  };

  const isAddedToCartProducts = (productId) =>
    cartProducts.some((p) => p.id === productId);

  // -----------------------------
  // ADD EVENT
  // -----------------------------
  const addToCartEvents = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    if (!event) return;

    const item = { ...event, quantity: 1 };

    if (!cartEvents.some((e) => e.id === eventId)) {
      setCartEvents([...cartEvents, item]);
    }
  };

  const removeFromCartEvents = (eventId) => {
    setCartEvents(cartEvents.filter((e) => e.id !== eventId));
  };

  const isAddedToCartEvents = (eventId) =>
    cartEvents.some((e) => e.id === eventId);

  return (
    <AppContext.Provider
      value={{
        // --- Новая стабильная версия ---
        cartCourses,
        cartProducts,
        cartEvents,

        setCartCourses,
        setCartProducts,
        setCartEvents,

        // --- Поддержка старой версии ---
        cartItemsCourses,
        cartItemsProducts,
        cartItemsEvents,

        // actions
        addToCartCourses,
        addToCartProducts,
        addToCartEvents,

        removeFromCartCourses,
        removeFromCartProducts,
        removeFromCartEvents,

        isAddedToCartCourses,
        isAddedToCartProducts,
        isAddedToCartEvents,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContextElement = () => useContext(AppContext);
