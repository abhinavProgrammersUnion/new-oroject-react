import React, { useContext, useEffect, useState } from "react";
import ProtoTypes from "prop-types";
import FontAwesome from "../uiStyle/FontAwesome";
import tempIcon from "../../assets/img/icon/temp.png";
import { Link, NavLink } from "react-router-dom";
import SidebarMenu from "../SidebarMenu";
import axios from "axios";
import MyContext from "../../hooks/useContext";

const menus = [
  {
    id: 1,
    linkText: "World",
    link: "/",
  },
  {
    id: 2,
    link: "/Business",
    linkText: "Business",
  },
  {
    id: 3,
    link: "/entertainment",
    linkText: "Entertainment",
  },
  {
    id: 4,
    link: "/features",
    linkText: "Features",
  },
  {
    id: 5,
    link: "/sports",
    linkText: "Sports",
  },
  {
    id: 6,
    link: "/trending",
    linkText: "Trending",
  },
  {
    id: 7,
    linkText: "World",
    link: "/world",
  },
  // {
  //   id: 8,
  //   linkText: "Contact",
  //   link: "/contact",
  // },
];

const MainMenu = ({ className, dark }) => {

  const [sideShow, setSideShow] = useState(false);

  const arr = dark ? menusDark : menus;

  const [temperatur, setTemperatur] = useState()

  const city = "New York"

  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=315f2285e8a24faa8b973133241001&q=${city}`)
      .then(response => setTemperatur(response?.data));
  }, [])

  const news = useContext(MyContext)?.newsData?.data

  const categoryArray = []

  news?.map((data) => {
    categoryArray.push(data?.category)
  })

  const uniqueArray = [...new Set(categoryArray)];


  return (
    <>
      <div className={`main-menu ${className ? className : ""}`} id="header">
        <Link to="#top" className="up_btn up_btn1">
          <FontAwesome name="chevron-double-up" />
        </Link>

        <div className="main-nav clearfix is-ts-sticky">
          <div className="container">
            <div className="row justify-content-between">



              <nav className="navbar navbar-expand-lg col-lg-10 align-self-center">
                <div className="site-nav-inner">
                  <button
                    className="navbar-toggler"
                    onClick={() => setSideShow(true)}
                  >
                    <FontAwesome name="bars" />
                  </button>
                  <div
                    id="navbarSupportedContent"
                    className="collapse navbar-collapse navbar-responsive-collapse"
                  >
                    <ul style={{}} className="nav navbar-nav" id="scroll">



                      {arr.length > 0
                        ? uniqueArray?.map((item, i) => (
                          <li
                            key={i}
                          // className={`
                          //                     ${item.child ? "dropdown" : ""}
                          //                     nav-item`}
                          >
                            {item.child ? (
                              <NavLink
                                // onClick={(e) => e.preventDefault()}
                                to='/njbj'
                                // to="/item"
                                className="menu-dropdown"
                                data-toggle="dropdown"
                              >
                                {/* {item.linkText} */}
                                <FontAwesome name={item.icon} />
                                xnv
                              </NavLink>
                            ) : (
                              <NavLink
                                to={item}
                                className="menu-dropdown"
                                data-toggle="dropdown"
                              >
                                {item}
                                {/* {item.linkText}{" "} */}
                              </NavLink>
                            )}


                          </li>
                        ))
                        : null}





                    </ul>
                  </div>
                  <SidebarMenu
                    sideShow={sideShow}
                    setSideShow={setSideShow}
                    menus={arr}
                  />
                </div>
              </nav>




















              <div style={{ backgroundColor: '' }} className="col-lg-1.5 align-self-center">
                <div className="menu_right">
                  <div className="temp d-none d-lg-block">
                    <div className="temp_wap">
                      <div className="temp_icon">
                        <img src={tempIcon} alt="temp icon" />
                      </div>
                      <h3 className="temp_count">{temperatur?.current?.temp_c}</h3>
                      <p>{temperatur?.location.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default MainMenu;

MainMenu.propTypes = {
  className: ProtoTypes.string,
  dark: ProtoTypes.bool,
};
