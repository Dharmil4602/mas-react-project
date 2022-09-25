import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/img1.jpg" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              My Analytics School helped me improving my skills and knowledge intuitive and easy to understand. I would recommend it to anyone who wants to learn more about Google Analytics.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/img2.jpg" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              My Analytics School helped me improving my skills and knowledge intuitive and easy to understand. I would recommend it to anyone who wants to learn more about Google Analytics.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/img3.jpg" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              My Analytics School helped me improving my skills and knowledge intuitive and easy to understand. I would recommend it to anyone who wants to learn more about Google Analytics.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}