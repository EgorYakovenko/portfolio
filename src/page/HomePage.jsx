import HeroImg from "../components/HeroImg";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import "../scss/containerHomePage.scss";

export default function () {
  return (
    <>
      <p>HOME PAGE</p>
      <div className="container">
        <LeftBar />
        <HeroImg />
        <RightBar />
      </div>
    </>
  );
}
