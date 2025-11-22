import { createContext, useContext, useEffect, useState } from "react";

// ---- ИМЕНОВАННЫЕ ЭКСПОРТЫ ----
import { courses } from "@/data/courses";
import { events } from "@/data/events";
import products from "@/data/products"; // этот файл имеет export default

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // -----------------------------
  // CART STATES
  // -----------------------------
  const [cartItemsCourses, setCartItemsCourses] = useState([]);
  const [cartItemsProducts, setCartItemsProducts] = useState([]);
  const [cartItemsEvents, setCartItemsEvents] = useState([]);

  // -----------------------------
  // LOAD FROM LOCAL STORAGE
  // -----------------------------
  useEffect(() => {
    setCartItemsCourses(JSON.parse(localStorage.getItem("cartCourses")) || []);
    setCartItemsProducts(JSON.parse(localStorage.getItem("cartProducts")) || []);
    setCartItemsEvents(JSON.parse(localStorage.getItem("cartEvents")) || []);
  }, []);

  // -----------------------------
  // SAVE TO LOCAL STORAGE
  // -----------------------------
  useEffect(() => {
    localStorage.setItem("cartCourses", JSON.stringify(cartItemsCourses));
  }, [cartItemsCourses]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItemsProducts));
  }, [cartItemsProducts]);

  useEffect(() => {
    localStorage.setItem("cartEvents", JSON.stringify(cartItemsEvents));
  }, [cartItemsEvents]);

  // -----------------------------
  // ADD COURSE
  // -----------------------------
  const addToCartCourses = (courseId) => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return;
    if (!cartItemsCourses.some((c) => c.id === courseId)) {
      setCartItemsCourses([...cartItemsCourses, course]);
    }
  };

  // REMOVE COURSE
  const removeFromCartCourses = (courseId) => {
    setCartItemsCourses(cartItemsCourses.filter((c) => c.id !== courseId));
  };

  const isAddedToCartCourses = (courseId) =>
    cartItemsCourses.some((c) => c.id === courseId);

  // -----------------------------
  // ADD PRODUCT
  // -----------------------------
  const addToCartProducts = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    if (!cartItemsProducts.some((p) => p.id === productId)) {
      setCartItemsProducts([...cartItemsProducts, product]);
    }
  };

  const removeFromCartProducts = (productId) => {
    setCartItemsProducts(cartItemsProducts.filter((p) => p.id !== productId));
  };

  const isAddedToCartProducts = (productId) =>
    cartItemsProducts.some((p) => p.id === productId);

  // -----------------------------
  // ADD EVENT
  // -----------------------------
  const addToCartEvents = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    if (!event) return;

    if (!cartItemsEvents.some((e) => e.id === eventId)) {
      setCartItemsEvents([...cartItemsEvents, event]);
    }
  };

  const removeFromCartEvents = (eventId) => {
    setCartItemsEvents(cartItemsEvents.filter((e) => e.id !== eventId));
  };

  const isAddedToCartEvents = (eventId) =>
    cartItemsEvents.some((e) => e.id === eventId);

  return (
    <AppContext.Provider
      value={{
        cartItemsCourses,
        cartItemsProducts,
        cartItemsEvents,

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

// -----------------------------
// HOOKS
// -----------------------------
export const useContextElement = () => useContext(AppContext);

export const useCartContext = () => {
  const ctx = useContext(AppContext);

  return {
    cartItemsCourses: ctx.cartItemsCourses,
    cartItemsProducts: ctx.cartItemsProducts,
    cartItemsEvents: ctx.cartItemsEvents,

    addToCartCourses: ctx.addToCartCourses,
    addToCartProducts: ctx.addToCartProducts,
    addToCartEvents: ctx.addToCartEvents,

    removeFromCartCourses: ctx.removeFromCartCourses,
    removeFromCartProducts: ctx.removeFromCartProducts,
    removeFromCartEvents: ctx.removeFromCartEvents,

    isAddedToCartCourses: ctx.isAddedToCartCourses,
    isAddedToCartProducts: ctx.isAddedToCartProducts,
    isAddedToCartEvents: ctx.isAddedToCartEvents,
  };
};
