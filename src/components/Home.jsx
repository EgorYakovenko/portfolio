import "../scss/home.scss";

export default function Home() {
  return (
    <>
      <article className="location">
        <ul className="location__data">
          <div className="location__top">
            <li>longitude ~ 28.6542</li>
            <li>latitude ~ 77.2373</li>
            <li>Chrome v119.0.0.0 ~ Browser</li>
            <li>Window 10 ~ OS</li>
          </div>
          <div className="location__bottom">
            <li>Local Time ~ 16:05</li>
            <li>Time Spend ~ 00:05</li>
            <li>122.161.53.938 ~ IP</li>
            <li>Delhi, India ~ Location</li>
          </div>
        </ul>
      </article>
    </>
  );
}
