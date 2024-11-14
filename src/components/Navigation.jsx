import { NavLink } from "react-router-dom";
import "../scss/navigation.scss";

export default function Navigation() {
  return (
    <nav class="navigation">
      <NavLink className="navigation__nav" to="/">
        <svg width={200} height={60}>
          <image className="img" href="../../public/subtract.svg" x="0" y="0" />

          <text
            x="80"
            y="18"
            // font-size="18"
            fill="white"
            // text-anchor="middle"
          >
            Home
          </text>
        </svg>
      </NavLink>
      <NavLink className="navigation__nav" to="/">
        <svg width={200} height={40}>
          <image className="img" href="../../public/subtract.svg" x="0" y="0" />

          <text
            x="80"
            y="18"
            // font-size="18"
            fill="white"
            // text-anchor="middle"
          >
            Project
          </text>
        </svg>
      </NavLink>
      <NavLink className="navigation__nav" to="/">
        <svg width={200} height={40}>
          <image className="img" href="../../public/subtract.svg" x="0" y="0" />

          <text
            x="80"
            y="18"
            // font-size="18"
            fill="white"
            // text-anchor="middle"
          >
            About me
          </text>
        </svg>
      </NavLink>
      <NavLink className="navigation__nav" to="/">
        <svg width={200} height={40}>
          <image className="img" href="../../public/subtract.svg" x="0" y="0" />

          <text
            x="80"
            y="18"
            // font-size="18"
            fill="white"
            // text-anchor="middle"
          >
            Contact
          </text>
        </svg>
      </NavLink>
      <NavLink className="navigation__nav" to="/">
        <svg width={200} height={40}>
          <image className="img" href="../../public/subtract.svg" x="0" y="0" />

          <text
            x="80"
            y="18"
            // font-size="18"
            fill="white"
            // text-anchor="middle"
          >
            Fedback
          </text>
        </svg>
      </NavLink>
    </nav>
  );
}
