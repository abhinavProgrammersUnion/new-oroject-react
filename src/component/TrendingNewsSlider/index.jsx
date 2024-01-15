import React, { useContext } from "react";
import FontAwesome from "../uiStyle/FontAwesome";
import { Link } from "react-router-dom";
import Slider from "../Slider";
import MyContext from "../../hooks/useContext";


const TrendingNewsSlider = () => {

  const news = useContext(MyContext)?.newsData?.data

  return (
    <div className="carousel_post2_type3 nav_style1">
      <Slider
        className="trancarousel"
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next17",
          prevEl: ".swiper-button-prev17",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
      >
        {news?.map((item, i) => (
          <div key={i} className="single_post post_type3">
            <div className="post_img">
              <div className="img_wrap">
                <img src={item?.image_path} alt={item?.image} />
              </div>
            </div>
            <div className="single_post_text">
              <div className="meta3">
                <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                >{item.category}</Link>
                <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                >{item.publish_date}</Link>
              </div>
              <h4>
                <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                >{item.title}</Link>
              </h4>
              <div className="space-10" />
              <p className="post-p">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="navBtns">
        <div className="navBtn prevtBtn swiper-button-prev17">
          <FontAwesome name="angle-left" />
        </div>
        <div className="navBtn nextBtn swiper-button-next17">
          <FontAwesome name="angle-right" />
        </div>
      </div>
    </div>
  );
};

export default TrendingNewsSlider;
