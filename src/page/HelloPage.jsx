import "../scss/helloPage.scss";

export default function HelloPage() {
  return (
    <div class="hello-page">
      <h1 class="hello-page__title ">HI!</h1>
      <div class="hello-page__groupe">
        <h2 class="hello-page__secondTitle">Welcome to my personal website!</h2>
        <p class="hello-page__text">
          Here, I share my experience and achievements as a frontend developer.
          You’ll find projects and tasks I’m working on, as well as insights
          into my professional skills and interests in web development. <br /> I
          hope this page gives you a clear sense of my approach to building
          modern and functional interfaces.
        </p>
        <a class="hello-page__enter" href="">
          Enter
        </a>
      </div>
    </div>
  );
}
