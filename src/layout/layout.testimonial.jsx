import binarUserTestiMale from "../assets/images/binar.user.testi.male.png";
import binarUserTestiFemale from "../assets/images/binar.user.testi.female.png";
import binarStar from "../assets/images/binar.star.png";
import { React } from "react";
import { useSwiper } from "swiper/react";
import "swiper/css";


const Testimonial = () => {
  return (
    <section className="carousel">
      <div className="section-carousel-title">
        <h2>Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div className="section-box container">
        <div className="section-carousel">
          <div className="section-carousel-box">
            <div className="section-carousel-component">
              <img src={binarUserTestiMale} alt="human-pic" />
              <div className="section-content-text">
                <div>
                  <img src={binarStar} />
                  <img src={binarStar} />
                  <img src={binarStar} />
                  <img src={binarStar} />
                  <img src={binarStar} />
                </div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className="text-carousel">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-carousel">
          <div className="section-carousel-box">
            <div className="section-carousel-component">
              <img src={binarUserTestiMale} alt="human-pic" />
              <div className="section-content-text">
                <div>
                  <img src={binarStar} />
                  <img src={binarStar} />
                  <img src={binarStar} />
                  <img src={binarStar} />
                  <img src={binarStar} />
                </div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className="text-carousel">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-carousel">
          <div className="section-carousel-box">
            <div className="section-carousel-component">
              <img src={binarUserTestiFemale} alt="human-pic" />
              <div className="section-content-text">
                <div>
                  <img src={binarStar} />
                  <img src={binarStar} />
                  <img src={binarStar} />
                  <img src={binarStar} />
                  <img src={binarStar} />
                </div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className="text-carousel">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-nav">
        <span className="icon-left">
          <i className="fa fa-chevron-left"></i>
        </span>
        <span className="icon-right">
          <i className="fa fa-chevron-right"></i>
        </span>
      </div>
    </section>
  );
};

export default Testimonial;
