import React, { useContext } from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import MyContext from "../../hooks/useContext";

const EntertainmentNews = ({ entertainments }) => {




  const news = useContext(MyContext)?.newsData?.data



  const scienceFilteredData = news?.filter((data, index) => data.category == "science")



  return (
    <>
      {scienceFilteredData?.map((item, i) => (
        <div key={i} className="col-lg-6">
          <div className="single_post post_type3 mb30">
            <div className="post_img">
              <div className="img_wrap">
                <Link to="/">
                  <img src={item?.image_path} alt={item?.image} />
                </Link>
              </div>
            </div>
            <div className="single_post_text">
              <div className="meta3">
                <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                >{item?.category && item.category.toUpperCase()}</Link>
                <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                >{item?.publish_date}</Link>
              </div>
              <h4>
                <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                >{item.title}</Link>
              </h4>
              <div className="space-10" />
              <p className="post-p">{item.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EntertainmentNews;

EntertainmentNews.propTypes = {
  entertainments: ProtoTypes.array,
};
