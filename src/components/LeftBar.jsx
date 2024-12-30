import "../scss/leftBar.scss";

export default function LeftBar() {
  return (
    <>
      <aside className="leftBar">
        {/* <img src="../../public/foto.png" alt="" width="160" /> */}
        <ul>
          <li>
            <p className="leftBar__nameList">NAME</p>
            <p className="leftBar__valueList">EGOR YAKOVENKO</p>
          </li>
          <li>
            <p className="leftBar__nameList">OCCUPATION</p>
            <p className="leftBar__valueList">FULLSTACK DEVELOPER</p>
          </li>
          <li>
            <p className="leftBar__nameList">AVAILABILITY</p>
            <svg>
              <image
                className="img"
                href="../../public/subtract.svg"
                x="0"
                y="0"
              />
              <text
                className="leftBar__availability"
                x="5"
                y="19"
                // font-size="18"
                // fill="white"
                // text-anchor="middle"
              >
                OPEN FOR HIRE
              </text>
            </svg>
          </li>
          <li>
            <p>Motto:</p>
            <p>Saepe omnis neque numquam recusandae laudantium.</p>
          </li>
        </ul>
      </aside>
    </>
  );
}
