// import LeftBar from "./LeftBar";
import Navigation from "./NavigationButton";
// import RightBar from "./RightBar";

import "../scss/containerHomePage.scss";
import ContentBox from "./ContentBox";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        {/* <LeftBar /> */}
        {/* <ContentBox /> */}
        <div className="content-container">{children}</div>
      </div>
      {/* <Navigation /> */}
    </>
  );
}
