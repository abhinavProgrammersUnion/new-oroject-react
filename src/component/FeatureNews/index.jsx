import React, { useContext } from "react";
import ProtoTypes from "prop-types";
import Heading from "../uiStyle/Heading";
import { Link } from "react-router-dom";
import Slider from "../Slider";
import FontAwesome from "../uiStyle/FontAwesome";
import MyContext from "../../hooks/useContext";


const FeatureNews = ({ className }) => {

  const news = useContext(MyContext)?.newsData?.data

  console.log('????????????????////', news);

  return (
    <div className={`feature_carousel_area mb40 ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Heading title="Latest News" />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {/*CAROUSEL START*/}
            <div className="feature_carousel nav_style1">
              <Slider
                navigation={{
                  nextEl: ".swiper-button-next3",
                  prevEl: ".swiper-button-prev3",
                }}
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}
              >
                {news?.map((item, i) => (
                  <div key={i} className="single_post post_type6 post_type7">
                    <div className="post_img gradient1">
                      <Link to="/">
                        <img src={item?.image_path} alt="thumb" />
                      </Link>
                    </div>
                    <div className="single_post_text">
                      <div className="meta5">
                        <Link to="/">{item?.category && item?.category.toUpperCase()}</Link>
                        <Link to="/">{item?.publish_date}</Link>
                      </div>
                      <h4>
                        <Link
                          to={`/${item.category}/${item.title.split(' ').join('-')}`}

                        >{item?.title}</Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="navBtns">
                <div className="navBtn prevtBtn swiper-button-prev3">
                  <FontAwesome name="angle-left" />
                </div>
                <div className="navBtn nextBtn swiper-button-next3">
                  <FontAwesome name="angle-right" />
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

export default FeatureNews;

FeatureNews.propTypes = {
  className: ProtoTypes.string,
};
