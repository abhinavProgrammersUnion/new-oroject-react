import React, { useContext } from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import SportsCarousel from "../SportsCarousel";
import MyContext from "../../hooks/useContext";

const SportsNews = ({ dark }) => {

  const news = useContext(MyContext)?.newsData?.data

  const sportsNews = news?.filter((data, index) => data?.category == "Sports")

  return (
    <div className="row">
      <div className="col-12">
        <div className="sports">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <h2 className="widget-title">Sports News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">


              {sportsNews?.slice(0, 1).map((item) =>
                <div className="single_post post_type3 mb30">

                  <div className="post_img">
                    <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                    >
                      <img src={item?.image_path} alt={item?.image} />
                    </Link>{" "}
                  </div>

                  <div className="single_post_text">
                    <div className="meta3">
                      <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                      >{item.category && item.category.toUpperCase()}</Link>
                      <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                      >{item.publish_date}</Link>
                    </div>
                    <h4>
                      <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                      >
                        {item.title}
                      </Link>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      {item.subtitle}
                    </p>
                    <div className="space-20" />
                    <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                      className="readmore">
                      Read More
                    </Link>
                  </div>
                </div>
              )}



            </div>
            <div className="col-md-6">
              <div className="sports_carousel nav_style1">
                <SportsCarousel sportsNews={sportsNews} dark={dark ? dark : false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsNews;

SportsNews.propTypes = {
  dark: ProtoTypes.bool,
};
