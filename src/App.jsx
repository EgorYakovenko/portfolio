import "./App.css";
// import HelloPage from "./page/HelloPage";
// import Home from "./components/LeftBar";
// import HomePage from "./page/HomePage";
// import Navigation from "./components/NavigationButton";
import Layout from "./components/layout";
// import HeroImg from "./components/HeroImg";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Project from "./components/Project";
// import AbouteMe from "./components/AboutMe";
// import Contact from "./components/Contact";
// import Test from "./components/test";

function App() {
  return (
    <>
      {/* <Test /> */}
      {/* <HelloPage /> */}

      {/* <HomePage /> */}
      {/* <Navigation /> */}
      <Home />
      <Layout>
        <Routes>
          {/* <Route path="/" element={<HeroImg />} /> */}
          {/* <Route path="/project" element={<Project />} /> */}
          {/* <Route path="/about" element={<AbouteMe />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
