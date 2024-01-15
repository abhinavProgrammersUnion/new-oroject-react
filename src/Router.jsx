import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Business from "./pages/home/business";
import LayoutTheme1 from "./component/Layout/LayoutTheme1";
import Entertainment from "./pages/home/entertainment";
import Feature from "./pages/home/Feature";
import Trending from "./pages/home/Trending";
import Sports from "./pages/home/sports";
// import About from "./pages/home/about";
// import Archive from "./pages/home/archive";
// import Contact from "./pages/home/contact";
import Error from "./pages/home/404";
import DetailPage from "./pages/DetailPage/DetailPage";
// import Post1 from "./pages/home/post1";
// import Post2 from "./pages/home/post2";
// import Post3 from "./pages/home/post3";
// import VideoPost1 from "./pages/home/video_post1";
// import VideoPost2 from "./pages/home/video_post2";
// import VideoPost3 from "./pages/home/video_post3";
// import AudioPost1 from "./pages/home/audio_post1";
// import AudioPost2 from "./pages/home/audio_post2";
// import AudioPost3 from "./pages/home/audio_post3";
// import LeftPost2 from "./pages/home/left_post2";
// import LayoutTheme2 from "./component/Layout/LayoutTheme2";
// import HomeTwo from "./pages/homeTwo";
// import HomeTwoBusiness from "./pages/homeTwo/business";
// import HomeTwoEntertainment from "./pages/homeTwo/entertainment";
// import HomeTwoFeature from "./pages/homeTwo/Feature";
// import HomeTwoTrending from "./pages/homeTwo/trending";
// import HomeTwoSports from "./pages/homeTwo/sports";
// import HomeTwoAbout from "./pages/homeTwo/about";
// import HomeTwoArchive from "./pages/homeTwo/archive";
// import HomeTwoContact from "./pages/homeTwo/contact";
// import HomeTwoPost1 from "./pages/homeTwo/post1";
// import HomeTwoPost2 from "./pages/homeTwo/post2";
// import HomeTwoPost3 from "./pages/homeTwo/post3";
// import HomeTwoVideoPost1 from "./pages/homeTwo/video_post1";
// import HomeTwoVideoPost2 from "./pages/homeTwo/video_post2";
// import HomeTwoVideoPost3 from "./pages/homeTwo/video_post3";
// import HomeTwoAudioPost1 from "./pages/homeTwo/audio_post1";
// import HomeTwoAudioPost2 from "./pages/homeTwo/audio_post2";
// import HomeTwoAudioPost3 from "./pages/homeTwo/audio_post3";
// import HomeTwoLeftPost2 from "./pages/homeTwo/left_post2";
// import LayoutTheme3 from "./component/Layout/LayoutTheme3";
// import HomeThree from "./pages/homeThree";
// import HomeThreeBusiness from "./pages/homeThree/business";
// import HomeThreeEntertainment from "./pages/homeThree/entertainment";
// import HomeThreeFeature from "./pages/homeThree/Feature";
// import HomeThreeTrending from "./pages/homeThree/trending";
// import HomeThreeSports from "./pages/homeThree/sports";
// import HomeThreeAbout from "./pages/homeThree/about";
// import HomeThreeArchive from "./pages/homeThree/archive";
// import HomeThreeContact from "./pages/homeThree/contact";
// import HomeThreeError from "./pages/homeThree/404";
// import HomeThreePost1 from "./pages/homeThree/post1";
// import HomeThreePost2 from "./pages/homeThree/post2";
// import HomeThreePost3 from "./pages/homeThree/post3";
// import HomeThreeVideoPost1 from "./pages/homeThree/video_post1";
// import HomeThreeVideoPost2 from "./pages/homeThree/video_post2";
// import HomeThreeVideoPost3 from "./pages/homeThree/video_post3";
// import HomeThreeAudioPost1 from "./pages/homeThree/audio_post1";
// import HomeThreeAudioPost2 from "./pages/homeThree/audio_post2";
// import HomeThreeAudioPost3 from "./pages/homeThree/audio_post3";
// import HomeThreeLeftPost2 from "./pages/homeThree/left_post2";
// import LayoutThemeDark from "./component/Layout/LayoutThemeDark";
// import HomeDark from "./pages/homeDark";
// import HomeDarkBusiness from "./pages/homeDark/business";
// import HomeDarkEntertainment from "./pages/homeDark/entertainment";
// import HomeDarkFeature from "./pages/homeDark/Feature";
// import HomeDarkTrending from "./pages/homeDark/trending";
// import HomeDarkSports from "./pages/homeDark/sports";
// import HomeDarkAbout from "./pages/homeDark/about";
// import HomeDarkArchive from "./pages/homeDark/archive";
// import HomeDarkContact from "./pages/homeDark/contact";
// import HomeDarkError from "./pages/homeDark/404";
// import HomeDarkPost1 from "./pages/homeDark/post1";
// import HomeDarkPost2 from "./pages/homeDark/post2";
// import HomeDarkPost3 from "./pages/homeDark/post3";
// import HomeDarkVideoPost1 from "./pages/homeDark/video_post1";
// import HomeDarkVideoPost2 from "./pages/homeDark/video_post2";
// import HomeDarkVideoPost3 from "./pages/homeDark/video_post3";
// import HomeDarkAudioPost1 from "./pages/homeDark/audio_post1";
// import HomeDarkAudioPost2 from "./pages/homeDark/audio_post2";
// import HomeDarkAudioPost3 from "./pages/homeDark/audio_post3";
// import HomeDarkLeftPost2 from "./pages/homeDark/left_post2";

const router = createBrowserRouter([
  // https://api.openweathermap.org/data/2.5/weather?q=London,,uk&appid=9f3556aaba1bceba5b8addfb3805ce59
  {
    path: "/",
    Component: LayoutTheme1,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Business />,
      },
      {
        path: "/404",
        element: <Error />,
      },
      {
        path: "/:category/:details",
        element: <DetailPage />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
