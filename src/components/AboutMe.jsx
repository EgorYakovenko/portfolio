import "../scss/aboutMe.scss";

export default function AbouteMe() {
  return (
    <>
      <section className="about">
        <ul className="about__list">
          <li className="about__item">
            <h3 className="about__title">A Little About Myself</h3>

            <p className="about__text">
              My name is Yegor, I am 37 years old. I graduated from the Odessa
              State Academy of Civil Engineering and Architecture with a
              specialist degree. Over my career, I have accumulated 14 years of
              experience in construction, a significant part of which I spent in
              managerial positions.
              <br /> This journey has taught me to manage projects, people, and
              resources effectively, as well as to find solutions even in the
              most challenging situations. In both work and life, I am known for
              my calmness and composure: I keep a clear mind and avoid panic in
              critical situations. Additionally, I am diligent and eager to
              learn new things, which helps me acquire new skills and
              approaches. One of my hobbies is model building. This activity
              allows me to relax while also developing attention to detail and
              patience—qualities I apply in my professional work. I am now
              looking to apply my abilities in a new field and am ready for new
              challenges.
            </p>
          </li>
          <li className="about__item">
            <h3 className="about__title">Education in IT</h3>
            <p className="about__text">
              In 2024, I completed a 10-month Full-Stack development course at
              the GoIT school. This period became a time of intensive learning
              and professional growth for me. I strived to make the most of my
              free time by delving into complex topics, resolving unclear
              points, and continuously honing my skills.
              <br /> The training included participation in team projects, where
              I consistently took the initiative. I advocated for implementing
              additional features that went beyond the technical requirements,
              such as adding interactive feedback forms, local user data storage
              through LocalStorage, and enhancing the responsiveness of
              interfaces for mobile devices.
              <br /> Daily team calls became an essential part of my experience,
              where we collaboratively solved ongoing issues and discussed
              progress. This experience not only strengthened my technical
              skills but also taught me how to work effectively in a team, find
              compromises, and propose creative solutions.
            </p>
          </li>
          <li className="about__item">
            <h3 className="about__title">Technologies</h3>
            {/* рассписать технологии подробно */}
            <p className="about__text">HTML, CSS, JS, React, Node</p>
          </li>
          <li className="about__item">
            <h3 className="about__title">
              Why I Decided to Become a Programmer
            </h3>
            <p className="about__text">
              I have always loved creating something new, which is why I chose a
              profession related to design and creation — civil engineering.
              This job taught me to think systematically, solve complex
              problems, and bring projects to completion.
              <br /> However, over time, I realized that I wanted to grow in a
              field where I could create not only physical structures but also
              digital products. This area attracted me with the opportunity to
              develop innovative solutions that are not limited to the physical
              world. Programming became a new challenge and an opportunity to
              apply my design experience to building in the virtual realm.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
