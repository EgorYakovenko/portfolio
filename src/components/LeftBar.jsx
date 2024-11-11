import "../scss/leftBar.scss";

export default function LeftBar() {
  return (
    <>
      <aside>
        <img src="../../public/foto.png" alt="" width="160" />
        <ul>
          <li>
            <p>name</p>
            <p>Egor Yakovenko</p>
          </li>
          <li>
            <p>occupation</p>
            <p>Fullstack developer</p>
          </li>
          <li>
            <p>availability</p>
            <svg>
              {/* <!-- Добавляем изображение --> */}
              <image href="../../public/Subtract.png" x="0" y="0" />

              {/* <!-- Добавляем текст поверх изображения --> */}
              <text
                x="80"
                y="18"
                // font-size="18"
                fill="white"
                // text-anchor="middle"
              >
                open for hire
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
