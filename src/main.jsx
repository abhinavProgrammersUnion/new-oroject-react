import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Helmet } from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/master.scss";
import "font-awesome/css/font-awesome.min.css";
import "react-modal-video/scss/modal-video.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <base href="" />
    </Helmet>

    <App />

  </React.StrictMode>
);
