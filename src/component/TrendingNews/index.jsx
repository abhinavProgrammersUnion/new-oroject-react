import React, { useContext } from "react";
import ProtoTypes from "prop-types";
import Heading from "../uiStyle/Heading";
import TrendingNewsSlider from "../TrendingNewsSlider";
import { Link } from "react-router-dom";
import MyContext from "../../hooks/useContext";


const TrendingNews = ({ dark }) => {

  const news = useContext(MyContext)?.newsData?.data


  return (
    <>
      <Heading title="Trending News" />

      <TrendingNewsSlider />



      {dark ? (
        <div className="border_white" />
      ) : (
        <div className="border_black" />
      )}
      <div className="space-30" />
      <div className="row">
        <div className="col-lg-6">

          {news?.slice(0, 3).map((item, i) => (
            <div key={i + "key"}>
              <div key={i} className="single_post widgets_small">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src={item.image_path} alt={item.image} />
                  </div>
                  {/* <span className="tranding">
                    <FontAwesome name="bolt" />
                  </span> */}
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                    >{item.category}</Link>
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

        </div>
        <div className="col-lg-6">
          {news?.slice(0, 3)?.map((item, i) => (
            <div key={i + "key"}>
              <div key={i} className="single_post widgets_small">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src={item?.image_path} alt={item?.publish_date} />
                  </div>
                  {/* <span className="tranding">
                    <FontAwesome name="bolt" />
                  </span> */}
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                    >{item.category}</Link>
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
        </div>
      </div>
    </>
  );
};

export default TrendingNews;

TrendingNews.propTypes = {
  dark: ProtoTypes.bool,
};
