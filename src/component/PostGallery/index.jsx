import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import WidgetTab from "../WidgetTab";
import "./style.scss";
import ThumbsSwiper from "../thumbsSwiper";

const PostGallery = ({ className, news }) => {


  return (
    <div className={`post_gallary_area mb40 ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-xl-8">
                <ThumbsSwiper news={news} />
              </div>
              <div className="col-xl-4">
                <WidgetTab dark={true} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PostGallery;

PostGallery.propTypes = {
  className: PropTypes.string,
};
