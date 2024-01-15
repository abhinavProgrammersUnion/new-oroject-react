import React, { useContext } from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import MyContext from "../../hooks/useContext";

const BusinessNews = ({ businessNews, headerHide, category }) => {

  const news = useContext(MyContext)?.newsData?.data

  const filteredBusinessData = news?.filter((data, index) => data?.category == category)



  return (
    <div className="row">
      <div className="col-12">
        <div className="businerss_news">
          {headerHide ? (
            ""
          ) : (
            <div className="row">
              <div className="col-6 align-self-center">
                <h2 className="widget-title">Business News</h2>
              </div>
              <div className="col-6 text-right align-self-center">
                <Link to=""
                  className="see_all mb20">
                  See All
                </Link>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-12">
              {filteredBusinessData?.map((item, i) => (
                <div
                  key={i}
                  className="single_post post_type3 post_type12 mb30"
                >
                  <div className="post_img">
                    <div className="img_wrap">
                      <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                      >
                        <img src={item?.image_path} alt={item?.image} />
                      </Link>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <div className="meta3">
                      <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                      > {item?.category && item?.category.toUpperCase()}</Link>
                      <Link to="#">{item?.publish_date}</Link>
                    </div>
                    <h4>
                      <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                      >
                        {item?.title}
                      </Link>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      {item?.subtitle}
                    </p>
                    <div className="space-20" />
                    <Link to={`/${item.category}/${item.title.split(' ').join('-')}`}
                      className="readmore">
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessNews;
BusinessNews.propTypes = {
  businessNews: ProtoTypes.array,
  headerHide: ProtoTypes.bool,
};
