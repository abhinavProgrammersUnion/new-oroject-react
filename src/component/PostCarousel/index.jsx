import React from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Slider from "../Slider";





const PostCarousel = ({ className, news }) => {



  return (
    <div className={className ? className : ""}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="carousel_posts1 owl-carousel nav_style2 mb40 mt30">
              {/*CAROUSEL START*/}
              <div className="px-4 position-relative">
                <Slider
                  navigation={{
                    nextEl: ".swiper-button-next11",
                    prevEl: ".swiper-button-prev11",
                  }}
                  className="trancarousel"
                  slidesPerView={3}
                  spaceBetween={20}
                  loop={true}
                  breakpoints={{
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {news?.map((item, i) => (
                    <div
                      key={i}
                      className="single_post widgets_small post_type5"
                    >
                      <div className="post_img">
                        <div className="img_wrap">
                          <Link>
                            <img src={item?.image_path} alt={item?.image} />
                          </Link>
                        </div>
                      </div>
                      <div className="single_post_text">
                        <h4>
                          <Link
                            // to={}
                            to={`/${item.category}/${item.title.split(' ').join('-')}`}

                          >{item?.title.split(" ").slice(0, 9).join(" ")}...</Link>
                        </h4>
                        <p>{item?.subtitle.split(" ").slice(0, 5).join(" ")}...</p>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="owl-nav">
                  <div className="owl-prev swiper-button-prev11">
                    <FontAwesome name="angle-left" />
                  </div>
                  <div className="owl-next swiper-button-next11">
                    <FontAwesome name="angle-right" />
                  </div>
                </div>
              </div>
            </div>
            {/*CAROUSEL END*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCarousel;

PostCarousel.propTypes = {
  className: ProtoTypes.string,
};
