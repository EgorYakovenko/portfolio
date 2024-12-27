import "../scss/test.scss";

export default function Test() {
  return (
    <>
      <div>
        <p>hello</p>
        <div>
          <svg className="card" width="350" height="150">
            <use href="../../public/card.svg#card"></use>
          </svg>
        </div>
      </div>
    </>
  );
}
