import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import Carousel from "./components/carousel/Carousel";

import {
  myInterceptor1,
  requestStartedInterceptor,
  responseReceivedInterceptor,
} from "./utils/MyInterceptor1";

// import { Routes, Route } from "react-router-dom";
// import Home from "./components/Routing/Home";
// import AboutUs from "./components/Routing/AboutUs";
// import Careers from "./components/Routing/Careers";
// import ContactUs from "./components/Routing/ContactUs";
// import NotFound from "./components/Routing/NotFound";

export default function App(props) {
  myInterceptor1();
  // requestStartedInterceptor();
  // responseReceivedInterceptor();

  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_MY_NAME);

  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {/* <Categories/> */}
      {/* <Carousel /> */}
      <Main name={props.name} />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes> */}
      {/* if we don't want to do this Routing in App component we can do it in Main component */}
      <Footer />
    </div>
  );
}
