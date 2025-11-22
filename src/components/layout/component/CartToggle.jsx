import { useContextElement } from "@/context/Context";
import { menuList } from "@/data/menu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import CourseCart from "./CourseCart";
import EventCart from "./EventCart";
import ShopCart from "./ShopCart";

const CartToggle = ({ allClasses, parentClassess }) => {
  // ---------- КОРРЕКТНЫЕ ИМПОРТЫ ИЗ КОНТЕКСТА ----------
  const { 
    cartItemsProducts, 
    cartItemsCourses, 
    cartItemsEvents 
  } = useContextElement();

  const [activeCart, setActiveCart] = useState(false);
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split("/")[1] === pathname?.split("/")[1]) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.map((elm3) => {
            if (elm3.href?.split("/")[1] === pathname?.split("/")[1]) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, [pathname]);

  // ---------- SAFE LENGTHS (исключает любую ошибку) ----------
  const productsCount = cartItemsProducts?.length || 0;
  const coursesCount = cartItemsCourses?.length || 0;
  const eventsCount = cartItemsEvents?.length || 0;

  return (
    <div className={parentClassess || ""}>
      <button
        style={{ position: "relative" }}
        onClick={() => setActiveCart((pre) => !pre)}
        className={allClasses || ""}
        data-el-toggle=".js-cart-toggle"
      >
        <i className="text-20 icon icon-basket"></i>

        <div className="cartProductCount">
          {submenu === "Shop" && (productsCount > 9 ? "9+" : productsCount)}
          {menuItem === "Events" && (eventsCount > 9 ? "9+" : eventsCount)}
          {!(submenu === "Shop" || menuItem === "Events") &&
            (coursesCount > 9 ? "9+" : coursesCount)}
        </div>
      </button>

      <div
        className={`toggle-element js-cart-toggle ${
          activeCart ? "-is-el-visible" : ""
        }`}
      >
        {submenu === "Shop" && <ShopCart />}
        {menuItem === "Events" && <EventCart />}
        {!(submenu === "Shop" || menuItem === "Events") && <CourseCart />}
      </div>
    </div>
  );
};

export default CartToggle;
