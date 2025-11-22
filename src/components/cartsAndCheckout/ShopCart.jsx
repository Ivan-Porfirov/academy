import { useContextElement } from "@/context/Context";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShopCart() {
  const {
    cartItemsProducts,
    removeFromCartProducts,
    addToCartProducts,
  } = useContextElement();

  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // Инициализация количества
  useEffect(() => {
    const initial = {};
    cartItemsProducts.forEach((product) => {
      initial[product.id] = quantities[product.id] || 1;
    });
    setQuantities(initial);
  }, [cartItemsProducts]);

  // Пересчёт итоговой суммы
  useEffect(() => {
    let sum = 0;
    cartItemsProducts.forEach((product) => {
      const qty = quantities[product.id] || 1;
      sum += product.price * qty;
    });
    setTotalPrice(sum);
  }, [quantities, cartItemsProducts]);

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
        <div className="container text-center">
          <h1 className="page-header__title">Shop Cart</h1>
          <p className="page-header__text">Your selected products</p>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-end">
            <div className="col-12">
              <div className="px-30 pr-60 md:px-0">
                {cartItemsProducts.map((product) => (
                  <div
                    key={product.id}
                    className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light"
                  >
                    {/* PRODUCT IMAGE + NAME */}
                    <div className="col-md-4">
                      <div className="d-flex items-center">
                        <div
                          className="size-100 bg-image rounded-8"
                          style={{ backgroundImage: `url(${product.image})` }}
                        ></div>
                        <div className="fw-500 text-dark-1 ml-30">
                          <Link className="linkCustom" to={`/shop/${product.id}`}>
                            {product.name}
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="col-md-2 md:mt-15">
                      <p>${product.price.toFixed(2)}</p>
                    </div>

                    {/* QUANTITY */}
                    <div className="col-md-2">
                      <div className="input-counter md:mt-20">
                        <input
                          className="input-counter__counter"
                          type="number"
                          value={quantities[product.id] || 1}
                          readOnly
                        />

                        <div className="input-counter__controls">
                          <button onClick={() => decrease(product.id)}>
                            <FontAwesomeIcon icon={faMinus} />
                          </button>

                          <button onClick={() => increase(product.id)}>
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
                          (quantities[product.id] || 1) * product.price
                        ).toFixed(2)}
                      </p>
                    </div>

                    {/* REMOVE */}
                    <div className="col-md-1">
                      <div
                        className="d-flex justify-end cursor-pointer"
                        onClick={() => removeFromCartProducts(product.id)}
                      >
                        <FontAwesomeIcon icon={faX} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="shopCart-footer px-16 mt-30">
                {cartItemsProducts.length === 0 && (
                  <div className="row justify-center pt-60 lg:pt-40">
                    <div className="col-auto">
                      <Link
                        to="/shop-list"
                        className="button -md -outline-purple-1 text-purple-1"
                      >
                        Buy Products
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* TOTAL SECTION */}
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
                to="/shop-checkout"
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
