import React, { useCallback, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import FontAwesome from '../../component/uiStyle/FontAwesome';
import MyContext from '../../hooks/useContext';
// import FontAwesome from "../../../component/uiStyle/FontAwesome";

export default function DetailPage() {

    const pathName = useLocation().pathname.split('/')[1]

    console.log(pathName);

    const news = useContext(MyContext)?.newsData?.data

    // console.log("?????????///", news);

    const fiterDataByCategory = news?.filter((data, index) => data?.category == pathName)

    // console.log("pathName???????", fiterDataByCategory);

    return (
        <>
            <div className="archives post post1">
                {/* <BreadCrumb
                    className="shadow5 padding-top-30"
                    title="Archive / post 1"
                /> */}
                <span className="space-30" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-6 align-self-center">
                                    <div className="page_category">
                                        <h4>{pathName.toUpperCase()}</h4>
                                    </div>
                                </div>
                                <div className="col-6 text-right">
                                    <div className="page_comments">
                                        <ul className="inline">
                                            <li>
                                                <FontAwesome name="comment" />
                                                563
                                            </li>
                                            <li>
                                                <FontAwesome name="fire" />
                                                563
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="space-30" />

                            {


                                fiterDataByCategory?.map((data, index) =>

                                    <div>

                                        <div className="single_post_heading">
                                            <h1>
                                                {data.title}
                                            </h1>
                                            <div className="space-10" />
                                            <p>
                                                {data.subtitle}
                                            </p>
                                        </div>
                                        <div className="space-40" />
                                        <img src={data?.image_path} alt="thumb" />
                                        <div className="space-20" />
                                        <div className="row">
                                            <div className="col-lg-6 align-self-center">
                                                <div className="author">
                                                    <div className="author_img">
                                                        <div className="author_img_wrap">
                                                            <img src="https://cdn.gencraft.com/prod/user/e95e4316-3bc1-460c-9e65-92886bed633e/9f89baaf-d11c-4166-b6bd-e1dbae047e47/image/image1_0.jpg?Expires=1705144908&Signature=e80Uzz5hs~Q19PhE01AiHfK4QxaeDojDYBDeTJFAd2z2MUmxVdqXu-Rg-N-dXwnozXntIE--FdUskjMnGAbm2Zvcd5L3nXE9awM-CHN7HVy1bx9LhWpHh8F-LTl5XZxtkxR5TH9jKOpc-VUncolw9uyecOm4UKwTuD6-jvSRLXJijvabhL1P-MIbHh6sAhCsu-ieA2ODTpBp2J9xB3h3P53HCQbn-UoewnfgECr26Cboa7s2ubGLFBEZnE6lJ~q0T9GEM2Kxdn8FOp9Ndz46aEkBxq1H94qEHM4bZF87YDmvEhtKuDQbd9AR-Og3AvRXoR7J7u8SOvm2ivwghKuUdA__&Key-Pair-Id=K3RDDB1TZ8BHT8" alt="author2" />
                                                        </div>
                                                    </div>
                                                    <Link to="/">{data?.author}</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">March 26, 2020</Link>
                                                        </li>
                                                        <li>Updated 1:58 p.m. ET</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 align-self-center">
                                                <div className="author_social inline text-right">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                <FontAwesome name="instagram" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">

                                                                <FontAwesome name="facebook-f" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                <FontAwesome name="youtube" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                <FontAwesome name="instagram" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-20" />

                                        <div dangerouslySetInnerHTML={{ __html: data.newsdetails }} />

                                        <div className="space-40" />

                                        <div className="tags">
                                            <ul className="inline">
                                                <li className="tag_list">
                                                    {/* AAAA */}
                                                    <FontAwesome name="tag" /> tags
                                                </li>
                                                <li>
                                                    <Link to="/">Health</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">World</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Corona</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-40" />
                                        <div className="border_black" />
                                        <div className="space-40" />
                                        {/* <PostOnePagination /> */}


                                    </div>


                                )

                            }





                        </div>
                        <div className="col-md-6 col-lg-4">
                            {/* <WidgetTab /> */}
                            {/* <FollowUs title="Follow Us" /> */}
                            {/* <WidgetTrendingNews /> */}
                            <div className="banner2 mb30">
                                <Link to="/">
                                    <img src="https://free-domain.in/Sreeja/newspaper/uploads/blossom.jpeg" alt="thumb" />
                                </Link>
                            </div>
                            {/* <MostShareWidget title="Most Share" /> */}
                            {/* <NewsLetter /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-60" />
            {/* <OurBlogSection /> */}
            <div className="space-60" />
            {/* <BlogComment /> */}
            <div className="space-100" />
            {/* <BannerSection /> */}
        </>
    )
}
