import "../scss/noise.scss";

export default function Noise() {
  return (
    <>
      <div className="noise-container">
        <svg>
          <use
            className="noise"
            href="../../public/project_prev/vintagesvg.svg"
          ></use>
        </svg>
      </div>
    </>
  );
}

{
  /* <img className="noise" src="../../public/project_prev/vintage.png" alt="" />; */
}
