import React, { useEffect } from "react";
// import './App.css';
import { initAll } from "@scottish-government/design-system/src/all";
import Header from './components/Header';
import Footer from "./components/Footer";
import BodyWrapper from "./components/Body";

function App() {

  useEffect(() => {
    initAll();
  });

  return (
    <body>
      <div className="ds_page">
        <div className="ds_page__top">
          {/* <!--Notifications
          Site header
          Site navigation
            --> */}
          <Header />
        </div>

        <div className="ds_page__middle">
          {/* <!--
          Main content
            --> */}
          <BodyWrapper />
        </div>

        <div className="ds_page__bottom">
          {/* <!--
          Footer
          Scripts
            --> */}
          <Footer />
        </div>
      </div>
    </body>
  );
}

export default App;
