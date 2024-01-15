import React, { useContext, useState } from "react";
import Slider from "../Slider";
import FontAwesome from "../uiStyle/FontAwesome";
import { Link } from "react-router-dom";

function ThumbsSwiper({ news }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="slider_demo2">
        <Slider
          loop={true}
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-thumbs",
            prevEl: ".swiper-button-prev-thumbs",
          }}
        >
          {news?.slice(0, 9).map((item, i) => (
            <div key={i} className="single_post post_type6 xs-mb30">
              <div className="post_img gradient1">
                <img width='100%'
                  src={item.image_path}
                  alt="thumb" />
              </div>
              <div className="single_post_text">
                <div className="meta meta_separator1">
                  <Link to="#">{item.category && item.category.toUpperCase()}</Link>
                  <Link to="#">{item.publish_date}</Link>
                </div>
                <h4>
                  <Link className="play_btn"
                    to={`/${item.category}/${item.title.split(' ').join('-')}`}
                  >
                    {item.title}
                  </Link>
                </h4>
                <div className="space-10" />
                <p className="post-p">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider >
      </div >








      <div className="slider_demo1">
        <div
          //   onClick={onClick}
          className={` slider_arrow arrow_left slick-arrow swiper-button-prev-thumbs`}
        >
          <FontAwesome name="angle-left" />
        </div>
        <Slider
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          breakpoints={{
            1024: {
              slidesPerView: 8,
            },
            768: {
              slidesPerView: 5,
            },
            320: {
              slidesPerView: 3,
            },
          }}
        >
          {news?.slice(0, 9).map((item, i) => (
            <div key={i} className="single_gallary_item">
              <img src={item?.image_path} alt={item?.image} />
            </div>
          ))}
        </Slider>

        <div
          //onClick={onClick}
          className={`slider_arrow arrow_right slick-arrow swiper-button-next-thumbs`}
        >
          <FontAwesome name="angle-right" />
        </div>
      </div>
    </>
  );
}

export default ThumbsSwiper;
