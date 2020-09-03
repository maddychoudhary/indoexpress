import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { myContext } from "../Global/ContextApi";
import StripeCheckout from "react-stripe-checkout";
const Cart = () => {
  const { shoppingCart, qty, totalPrice, dispatch } = useContext(myContext);
  const handleToken = () => {};
  return (
    <React.Fragment>
      <section className="cart_section">
        <div className="cart_container">
          {shoppingCart.length > 0
            ? shoppingCart.map((cart) => {
                return (
                  <div className="cart_data" key={cart.id}>
                    <div className="cart_image">
                      <img src={cart.image} alt="cart image" />
                    </div>
                    <div className="cart_pro_details">
                      <h3>{cart.pro_details}</h3>
                    </div>
                    <div className="cart_price">
                      <h3>${cart.price}.00</h3>
                    </div>
                    <div
                      className="cart_increment"
                      onClick={() =>
                        dispatch({ type: "INC", id: cart.id, cart })
                      }
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="cart_quantity">
                      <h3>{cart.qty}</h3>
                    </div>
                    <div
                      className="cart_decrement"
                      onClick={() =>
                        dispatch({ type: "DEC", id: cart.id, cart })
                      }
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <div className="cart_total_price">
                      <h3>${cart.price * cart.qty}.00</h3>
                    </div>
                    <div
                      className="cart_delete"
                      onClick={() =>
                        dispatch({ type: "DELETE", id: cart.id, cart: cart })
                      }
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                  </div>
                );
              })
            : "your cart is currently empty"}
        </div>

        {shoppingCart.length > 0 ? (
          <div className="payment_container">
            <div className="payment_head">
              <h3>cart summary</h3>
            </div>
            <div className="payment_items">
              <h3>total items</h3>
              <h3>{qty}</h3>
            </div>
            <div className="payment_total">
              <h3>total price</h3>
              <h3>${totalPrice}.00</h3>
            </div>
            <div className="payment_stripe">
              <StripeCheckout
                stripeKey="pk_test_51HDqoKKOzzY7eajdAWPKz30Lvri68ZwFwZcgzT9AySel6TuylHkS6dmLI48nwKi5xyPXBDzppFx18zRYQztsf5jb00w5xrTFEE"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
                name="All Products"
              ></StripeCheckout>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </React.Fragment>
  );
};
export default Cart;
