import { NavLink } from "react-router-dom";
import "../scss/navigationButton.scss";

export default function NavigationButton() {
  return (
    <nav class="navigation">
      <NavLink className="navigation__nav" to="/">
        Home
      </NavLink>
      <NavLink className="navigation__nav" to="/project">
        Project
      </NavLink>
      <NavLink className="navigation__nav" to="/about">
        About
      </NavLink>
      <NavLink className="navigation__nav" to="/contact">
        Contact
      </NavLink>
      <NavLink className="navigation__nav" to="/fedback">
        Fedback
      </NavLink>
    </nav>
  );
}
