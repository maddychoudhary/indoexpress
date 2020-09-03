import React, { useState, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { cartReducer } from "./CartReducer.js";

import slider_1 from "../images/slider_1.jpg";
import slider_2 from "../images/slider_2.jpg";
import slider_3 from "../images/slider_3.jpg";
import slider_4 from "../images/slider_4.jpg";
import slider_5 from "../images/slider_5.jpg";
import slider_6 from "../images/slider_6.jpg";
import slider_7 from "../images/slider_7.jpg";
import slider_8 from "../images/slider_8.jpg";

import products_1 from "../images/products_1.jpg";
import products_2 from "../images/products_2.jpg";
import products_3 from "../images/products_3.jpg";
import products_4 from "../images/products_4.jpg";
import products_5 from "../images/products_5.jpg";
import products_6 from "../images/products_6.jpg";
import products_7 from "../images/products_7.jpg";
import products_8 from "../images/products_8.png";
import products_9 from "../images/products_9.jpg";
import products_10 from "../images/products_10.jpg";
import products_11 from "../images/products_11.jpg";
import products_12 from "../images/products_12.png";
import products_13 from "../images/products_13.jpg";
import products_14 from "../images/products_14.jpg";
import products_15 from "../images/products_15.jpg";

export const myContext = React.createContext();
const ContextApi = (props) => {
  const [slider] = useState([
    {
      id: 1,
      class: "slide active",
      image: slider_1,
      desc:
        "“Chase the vision, not the money; the money will end up following you.”",
    },
    {
      id: 2,
      class: "slide",
      image: slider_2,
      desc: "“Always deliver more than expected.”",
    },
    {
      id: 3,
      class: "slide",
      image: slider_3,
      desc:
        "“We see our customers as invited guests to a party, and we are the hosts.”",
    },
    {
      id: 4,
      class: "slide",
      image: slider_4,
      desc:
        "“The sooner we drop the ‘e’ out of ‘e-commerce’ and just call it commerce, the better.”",
    },
    {
      id: 5,
      class: "slide",
      image: slider_5,
      desc: "“Communication is at the heart of e-commerce and community.”",
    },
    {
      id: 6,
      class: "slide",
      image: slider_6,
      desc:
        "“If you’re competitor-focused, you have to wait until there is a competitor doing something.",
    },
    {
      id: 7,
      class: "slide",
      image: slider_7,
      desc:
        "“Customer service shouldn’t just be a department, it should be the entire company”",
    },
    {
      id: 8,
      class: "slide",
      image: slider_8,
      desc: "“Innovation distinguishes between a leader and a follower”",
    },
  ]);
  const [products] = useState([
    {
      id: 1,
      image: products_1,
      pro_details: "iphone 11pro",
      price: 1000,
      status: "hot",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 2,
      image: products_2,
      pro_details: "g shock",
      price: 120,
      status: "new",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 13,
      image: products_13,
      pro_details: "girls bras",
      price: 7,
      status: "new",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 3,
      image: products_3,
      pro_details: "fastrack bag",
      price: 40,
      status: "hot",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 4,
      image: products_4,
      pro_details: "canon camera",
      price: 170,
      status: "new",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 5,
      image: products_5,
      pro_details: "sony LED",
      price: 150,
      status: "new",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 6,
      image: products_6,
      pro_details: "linen shirt",
      price: 25,
      status: "hot",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 7,
      image: products_7,
      pro_details: "levis jeans",
      price: 30,
      status: "new",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 8,
      image: products_8,
      pro_details: "mcquay",
      price: 440,
      status: "hot",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 9,
      image: products_9,
      pro_details: "hair dryer",
      price: 50,
      status: "hot",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 10,
      image: products_10,
      pro_details: "induction gas",
      price: 35,
      status: "new",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 11,
      image: products_11,
      pro_details: "helmet",
      price: 20,
      status: "new",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 12,
      image: products_12,
      pro_details: "beer shampoo",
      price: 10,
      status: "hot",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 14,
      image: products_14,
      pro_details: "girls panties",
      price: 10,
      status: "hot",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      id: 15,
      image: products_15,
      pro_details: "children protective",
      price: 25,
      status: "new",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
  ]);
  const [cart, dispatch] = useReducer(cartReducer, {
    shoppingCart: [],
    qty: 0,
    totalPrice: 0,
  });
  return (
    <React.Fragment>
      <myContext.Provider
        value={{
          data_1: [...slider],
          data_2: [...products],
          ...cart,
          dispatch,
        }}
      >
        {props.children}
      </myContext.Provider>
    </React.Fragment>
  );
};
export default ContextApi;
