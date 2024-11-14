import HeroImg from "../components/HeroImg";
import LeftBar from "../components/LeftBar";
import Navigation from "../components/Navigation";
import RightBar from "../components/RightBar";
import "../scss/containerHomePage.scss";

export default function () {
  return (
    <>
      <div className="container">
        <LeftBar />
        <HeroImg />
        <RightBar />
      </div>
      <Navigation />
    </>
  );
}
