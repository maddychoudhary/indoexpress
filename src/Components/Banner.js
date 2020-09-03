import React, { useContext, useEffect } from "react";
import offer_1 from "../images/offers_1.jpg";
import offer_2 from "../images/offers_2.jpg";
import { myContext } from "../Global/ContextApi.js";
const Banner = () => {
  const { data_1 } = useContext(myContext);
  useEffect(() => {
    let slider = document.querySelector(".sliders").children;
    let a = setInterval(anim, 5000);
    let sliderIndex = 0;
    function anim() {
      if (sliderIndex == slider.length - 1) {
        sliderIndex = 0;
      } else {
        sliderIndex++;
      }
      for (let a = 0; a < slider.length; a++) {
        slider[a].classList.remove("active");
      }
      slider[sliderIndex].classList.add("active");
    }
  }, []);
  return (
    <React.Fragment>
      <section className="banner_section">
        <div className="banner_container">
          <div className="left_offer">
            <img src={offer_1} alt="offer_1" />
          </div>
          <div className="sliders">
            {data_1.map((item) => {
              return (
                <div className={item.class} key={item.id}>
                  <div className="slide_img">
                    <img src={item.image} alt="ground images" />
                  </div>
                  <div className="slide_text">
                    <h3>{item.desc}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="right_offer">
            <img src={offer_2} alt="offer_1" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Banner;
