// import "./App.css";
import "./scss/userLocationInfo.scss";
import "./scss/layout.scss";

// import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
// import UserLocationInfo from "./components/UserLocationInfo";
import Home from "./components/Home";
import Project from "./components/Project";
import AbouteMe from "./components/AboutMe";
import Contact from "./components/Contact";
import NavigationButton from "./components/NavigationButton";

function App() {
  return (
    <>
      <div className="container">
        <ul className="location ">
          <div className="location__left-top header">
            <li className="location__data">longitude ~ 28.6542</li>
            <li className="location__data">latitude ~ 77.2373</li>
          </div>

          <div className="location__right-top header">
            <li className="location__data">Chrome v119.0.0.0 ~ Browser</li>
            <li className="location__data">Window 10 ~ OS</li>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<AbouteMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <NavigationButton />
          <div className="location__left-bottom footer">
            <li className="location__data">Local Time ~ 16:05</li>
            <li className="location__data">Time Spend ~ 00:05</li>
          </div>
          <div className="location__right-bottom footer">
            <li className="location__data">122.161.53.938 ~ IP</li>
            <li className="location__data">Delhi, India ~ Location</li>
          </div>
        </ul>
      </div>
      {/* <Layout></Layout> */}
    </>
  );
}

export default App;

//  {
//    /* <Routes> */
//  }
//  {
//    /* <Route path="/" element={<HeroImg />} /> */
//  }
//  {
//    /* <Route path="/project" element={<Project />} /> */
//  }
//  {
//    /* <Route path="/about" element={<AbouteMe />} /> */
//  }
//  {
//    /* <Route path="/contact" element={<Contact />} /> */
//  }
//  {
//    /* </Routes> */
//  }
