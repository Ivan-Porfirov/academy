import { useContextElement } from "@/context/Context";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CourseCart() {
  const {
    cartItemsCourses,
    removeFromCartCourses,
    addToCartCourses,
  } = useContextElement();

  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // Инициализация количества
  useEffect(() => {
    const initial = {};
    cartItemsCourses.forEach((course) => {
      initial[course.id] = quantities[course.id] || 1;
    });
    setQuantities(initial);
  }, [cartItemsCourses]);

  // Пересчёт суммы
  useEffect(() => {
    let sum = 0;
    cartItemsCourses.forEach((course) => {
      const qty = quantities[course.id] || 1;
      sum += course.discountedPrice * qty;
    });
    setTotalPrice(sum);
  }, [quantities, cartItemsCourses]);

  const increase = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <h1 className="page-header__title">Course Cart</h1>
                <p className="page-header__text">
                  We’re on a mission to deliver engaging, curated courses at a
                  reasonable price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-end">
            <div className="col-12">
              <div className="px-30 pr-60 md:px-0">
                {cartItemsCourses.map((course) => (
                  <div
                    key={course.id}
                    className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light"
                  >
                    {/* IMG + TITLE */}
                    <div className="col-md-4">
                      <div className="d-flex items-center">
                        <div
                          className="size-100 bg-image rounded-8"
                          style={{ backgroundImage: `url(${course.imageSrc})` }}
                        ></div>

                        <div className="fw-500 text-dark-1 ml-30">
                          <Link
                            className="linkCustom"
                            to={`/courses/${course.id}`}
                          >
                            {course.title}
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="col-md-2 md:mt-15">
                      <p>{course.paid ? `$${course.discountedPrice}` : "Free"}</p>
                    </div>

                    {/* QUANTITY */}
                    <div className="col-md-2">
                      <div className="input-counter">
                        <input
                          className="input-counter__counter"
                          type="number"
                          value={quantities[course.id] || 1}
                          readOnly
                        />

                        <div className="input-counter__controls">
                          <button
                            className="input-counter__up"
                            onClick={() => decrease(course.id)}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>

                          <button
                            className="input-counter__down"
                            onClick={() => increase(course.id)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* SUBTOTAL */}
                    <div className="col-md-1">
                      <p>
                        $
                        {(
                          (quantities[course.id] || 1) *
                          course.discountedPrice
                        ).toFixed(2)}
                      </p>
                    </div>

                    {/* REMOVE */}
                    <div className="col-md-1">
                      <div
                        className="d-flex justify-end cursor-pointer"
                        onClick={() => removeFromCartCourses(course.id)}
                      >
                        <FontAwesomeIcon icon={faX} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="shopCart-footer px-16 mt-30">
                {cartItemsCourses.length > 0 ? (
                  <div className="row justify-between y-gap-30">
                    <div className="col-xl-5"></div>
                  </div>
                ) : (
                  <div className="row justify-center pt-60">
                    <Link
                      to="/courses-list-1"
                      className="button -md -outline-purple-1 text-purple-1"
                    >
                      Buy Course
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* TOTAL */}
            <div className="col-xl-4 col-lg-5 layout-pt-lg">
              <div className="py-30 bg-light-4 rounded-8 border-light">
                <h5 className="px-30 text-20 fw-500">Cart Totals</h5>

                <div className="d-flex justify-between px-30 mt-25">
                  <div className="py-15 fw-500">Subtotal</div>
                  <div className="py-15 fw-500">${totalPrice.toFixed(2)}</div>
                </div>

                <div className="d-flex justify-between px-30 border-top-dark">
                  <div className="pt-15 fw-500">Total</div>
                  <div className="pt-15 fw-500">${totalPrice.toFixed(2)}</div>
                </div>
              </div>

              <Link
                to="/course-checkout"
                className="button -md -purple-1 text-white col-12 mt-30"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
