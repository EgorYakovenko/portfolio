import LeftBar from "./LeftBar";
import Navigation from "./NavigationButton";
import RightBar from "./RightBar";

import "../scss/containerHomePage.scss";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <LeftBar />
        <div className="content-container">{children}</div>

        <RightBar />
      </div>
      <Navigation />
    </>
  );
}
