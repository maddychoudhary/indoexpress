import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { myContext } from "../Global/ContextApi";
const Navbar = () => {
  const { qty } = useContext(myContext);
  return (
    <React.Fragment>
      <section className="nav_section">
        <div className="nav_container">
          <div className="left_nav">
            <Link to="/">
              <h3>indo express</h3>
            </Link>
          </div>
          <div className="right_nav">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="empty_cart">{qty}</span>
            </Link>
            <p className="tooltip">click and show your cart</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Navbar;
