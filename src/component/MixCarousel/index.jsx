import React, { useContext, useState } from "react";
import ProtoTypes from "prop-types";
import FontAwesome from "../uiStyle/FontAwesome";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

import Slider from "../Slider";
import MyContext from "../../hooks/useContext";



const MixCarousel = ({ className, dark }) => {
  const [vModal, setvModal] = useState(false);
  const [videoId] = useState("0r6C3z3TEKw");

  const news = useContext(MyContext)?.newsData?.data

  return (
    <div className={`mix_area ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`mix_carousel ${dark ? "primay_bg" : ""}`}>
              {/*CAROUSEL START*/}
              <div className="single_mix_carousel nav_style3">
                <Slider
                  slidesPerView={2}
                  spaceBetween={30}
                  loop={true}
                  navigation={{
                    nextEl: ".swiper-button-next6",
                    prevEl: ".swiper-button-prev6",
                  }}
                  breakpoints={{
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    300: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                  }}
                >
                  {news?.map((item, i) => (
                    <div key={i} className="single_post post_type6 post_type9">
                      <div className="post_img gradient1">
                        <div className="img_wrap">
                          <Link className="play_btn" to="/">
                            <img src={item?.image_path} alt={item?.image} />
                          </Link>
                        </div>
                      </div>
                      <div className="single_post_text">
                        <div className="meta">
                          <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                          >{item.category && item.category.toUpperCase()}</Link>
                          <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                          >{item.publish_date}</Link>
                        </div>
                        <h4>
                          <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                          >{item.subtitle}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="owl-nav">
                  <div className="owl-prev swiper-button-prev6">
                    <FontAwesome name="angle-left" />
                  </div>
                  <div className="owl-next swiper-button-next6">
                    <FontAwesome name="angle-right" />
                  </div>
                </div>
              </div>
            </div>
            {/*CAROUSEL END*/}
          </div>
        </div>
      </div>
      <div className="space-30" />
      <ModalVideo
        channel="youtube"
        isOpen={vModal}
        videoId={videoId}
        onClose={() => setvModal(false)}
      />
    </div>
  );
};

export default MixCarousel;

MixCarousel.propTypes = {
  className: ProtoTypes.string,
  dark: ProtoTypes.bool,
};
