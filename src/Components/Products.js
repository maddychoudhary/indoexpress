import React, { useContext } from "react";
import { myContext } from "../Global/ContextApi";
const Products = () => {
  const { data_2, dispatch } = useContext(myContext);
  return (
    <React.Fragment>
      <section className="products_items">
        <div className="products_container">
          {data_2.map((items) => {
            return (
              <div className="products_data" key={items.id}>
                <div className="products_image">
                  <img src={items.image} alt="products items" />
                </div>
                <div className="products_status">
                  <p>{items.status}</p>
                </div>
                <div className="products_details">
                  <div className="products_detail">
                    <h3>{items.pro_details}</h3>
                  </div>
                  <div className="products_price">
                    <h3>price:${items.price}.00</h3>
                  </div>
                </div>
                <div
                  className="products_icon"
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      id: items.id,
                      items: items,
                    });
                  }}
                >
                  {items.icon} add to cart
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};
export default Products;
