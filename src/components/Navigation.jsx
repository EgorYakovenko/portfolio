import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Project</NavLink>
      <NavLink to="/">About me</NavLink>
      <NavLink to="/">Contact</NavLink>
      <NavLink to="/">Fedback</NavLink>
    </nav>
  );
}
