import React from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import { mostViewSort } from "../../utils/commonFunctions";
import Slider from "../Slider";



const SportsCarousel = ({ dark, sportsNews }) => {



  return (
    <div className="widget tab_widgets">
      <div className="post_type2_carousel multipleRowCarousel nav_style1">
        {/*CAROUSEL START*/}
        <Slider
          navigation={{
            nextEl: ".swiper-button-next13",
            prevEl: ".swiper-button-prev13",
          }}
          slidesPerView={1}
          grid={{
            rows: 6,
          }}
        >
          {sportsNews?.map((item, i) => (
            <div key={i} className="single_post2_carousel">
              <div className="single_post widgets_small">
                <div className="post_img">
                  <div className="img_wrap">
                    <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                    >
                      <img src={item.image_path} alt={item.image} />
                    </Link>
                  </div>
                  {/* <span className="tranding">
                    <FontAwesome name="bolt" />
                  </span> */}
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                    > {item.category && item.category.toUpperCase()}</Link>
                    <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                    >{item.publish_date}</Link>
                  </div>
                  <h4>
                    <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                    >{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="space-15" />
              {dark ? (
                <div className="border_white" />
              ) : (
                <div className="border_black" />
              )}
              <div className="space-15" />
            </div>
          ))}
        </Slider>
        <div className="navBtns">
          <div className="navBtn prevtBtn swiper-button-prev13">
            <FontAwesome name="angle-left" />
          </div>
          <div className="navBtn nextBtn swiper-button-next13">
            <FontAwesome name="angle-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCarousel;

SportsCarousel.propTypes = {
  dark: ProtoTypes.bool,
};
