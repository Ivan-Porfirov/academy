import { useContextElement } from "@/context/Context";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EventCart() {
  const {
    cartItemsEvents,
    removeFromCartEvents,
    addToCartEvents,
  } = useContextElement();

  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // Инициализация количества
  useEffect(() => {
    const initial = {};
    cartItemsEvents.forEach((event) => {
      initial[event.id] = quantities[event.id] || 1;
    });
    setQuantities(initial);
  }, [cartItemsEvents]);

  // Пересчёт цены
  useEffect(() => {
    let sum = 0;
    cartItemsEvents.forEach((event) => {
      const qty = quantities[event.id] || 1;
      sum += event.price * qty;
    });
    setTotalPrice(sum);
  }, [quantities, cartItemsEvents]);

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
          <div className="page-header__content text-center">
            <h1 className="page-header__title">Event Cart</h1>
            <p className="page-header__text">
              Engaging, curated events at a reasonable price.
            </p>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-end">
            <div className="col-12">
              <div className="px-30 pr-60 md:px-0">
                {cartItemsEvents.map((event) => (
                  <div
                    key={event.id}
                    className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light"
                  >
                    {/* IMAGE + TITLE */}
                    <div className="col-md-4">
                      <div className="d-flex items-center">
                        <div
                          className="size-100 bg-image rounded-8"
                          style={{
                            backgroundImage: `url(${event.imgSrc})`,
                          }}
                        ></div>

                        <div className="fw-500 text-dark-1 ml-30">
                          <Link className="linkCustom" to={`/events/${event.id}`}>
                            {event.desc}
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="col-md-2 md:mt-15">
                      <p>${event.price.toFixed(2)}</p>
                    </div>

                    {/* QUANTITY */}
                    <div className="col-md-2">
                      <div className="input-counter md:mt-20">
                        <input
                          className="input-counter__counter"
                          type="number"
                          value={quantities[event.id] || 1}
                          readOnly
                        />

                        <div className="input-counter__controls">
                          <button
                            className="input-counter__up"
                            onClick={() => decrease(event.id)}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>

                          <button
                            className="input-counter__down"
                            onClick={() => increase(event.id)}
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
                          (quantities[event.id] || 1) * event.price
                        ).toFixed(2)}
                      </p>
                    </div>

                    {/* REMOVE */}
                    <div className="col-md-1">
                      <div
                        className="d-flex justify-end cursor-pointer"
                        onClick={() => removeFromCartEvents(event.id)}
                      >
                        <FontAwesomeIcon icon={faX} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="shopCart-footer px-16 mt-30">
                {cartItemsEvents.length > 0 ? (
                  <div className="row justify-between y-gap-30">
                    <div className="col-xl-5"></div>
                  </div>
                ) : (
                  <div className="row justify-center pt-60">
                    <Link
                      to="/event-list-1"
                      className="button -md -outline-purple-1 text-purple-1"
                    >
                      Buy Events
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
                to="/event-checkout"
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
