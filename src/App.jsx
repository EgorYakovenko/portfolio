import "./App.css";
import HelloPage from "./page/HelloPage";
import Home from "./components/LeftBar";
import HomePage from "./page/HomePage";
import Navigation from "./components/NavigationButton";
import Layout from "./components/layout";
import HeroImg from "./components/HeroImg";
import { Route, Routes } from "react-router-dom";
import Project from "./components/Project";
import AbouteMe from "./components/AboutMe";

function App() {
  return (
    <>
      {/* <HelloPage /> */}

      {/* <HomePage /> */}
      {/* <Navigation /> */}

      <Layout>
        <Routes>
          <Route path="/" element={<HeroImg />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<AbouteMe />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
