import "../scss/home.scss";

// import DecryptedText from "./DecryptedText";
// import DecryptedText from "./DecryptedText";
// import DecryptedText from "DecryptedText";

export default function Home() {
  return (
    <>
      <div className="home">
        {/* <DecryptedText text="Hi, I am" /> */}
        <p className="home__hello">Hi, I am</p>
        <h1 className="home__name">Egor Yakovenko</h1>
        <p className="home__prof">Frontend developer</p>
      </div>
    </>
  );
}
