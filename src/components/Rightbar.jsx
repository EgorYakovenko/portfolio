import "../scss/rightBar.scss";

export default function RightBar() {
  return (
    <>
      <svg className="rightBar" height={300}>
        <image className="img" href="../../public/subtract.svg" x="0" y="0" />

        <text
          x="30"
          y="18"
          // font-size="18"
          fill="white"
          // text-anchor="middle"
        >
          Activ project
        </text>
        <text x="50" y="200" fill="white">
          описание проекта
        </text>
      </svg>
    </>
  );
}
