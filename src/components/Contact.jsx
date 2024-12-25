import "../scss/contact.scss";

export default function Contact() {
  return (
    <>
      <section className="contacts">
        <ul className="contact-list">
          <li className="contact-list__item">
            <svg
              className="contact-list__contact-icon"
              // class="advantages-icon"
              // aria-label="стратегия"
              width="32"
              height="32"
            >
              <use href="../../public/contact/contact_set.svg#icon-phone"></use>
            </svg>
            <p className=" contact-list__contact">+38011-111-11-11 </p>
          </li>
          <li className="contact-list__item">
            <svg
              className="contact-list__contact-icon"
              // className="card-container__project-icon"
              // class="advantages-icon"
              // aria-label="стратегия"
              width="32"
              height="32"
            >
              <use href="../../public/contact/contact_set.svg#icon-email"></use>
            </svg>
            <p className=" contact-list__contact">qwerty@qwe.rty </p>
          </li>
          <li className="contact-list__item">
            <svg
              className="contact-list__contact-icon"
              // className="card-container__project-icon"
              // class="advantages-icon"
              // aria-label="стратегия"
              width="32"
              height="32"
            >
              <use href="../../public/contact/contact_set.svg#icon-telegram"></use>
            </svg>
            <p className=" contact-list__contact">telegram </p>
          </li>
          <li className="contact-list__item">
            <svg
              className="contact-list__contact-icon"
              // className="card-container__project-icon"
              // class="advantages-icon"
              aria-label="whatsapp"
              width="32"
              height="32"
            >
              <use href="../../public/contact/contact_set.svg#icon-whatsapp"></use>
            </svg>
            <p className=" contact-list__contact">whatsapp </p>
          </li>
          <li className="contact-list__item">
            <svg
              className="contact-list__contact-icon"
              // className="card-container__project-icon"
              // class="advantages-icon"
              // aria-label="стратегия"
              width="32"
              height="32"
            >
              <use href="../../public/contact/contact_set.svg#icon-linkedin"></use>
            </svg>
            <p className=" contact-list__contact">linkedin </p>
          </li>

          <li className="contact-list__item">
            <svg
              className="contact-list__contact-icon"
              // className="card-container__project-icon"
              // class="advantages-icon"
              // aria-label="стратегия"
              width="32"
              height="32"
            >
              <use href="../../public/contact/contact_set.svg#icon-github"></use>
            </svg>
            <p className=" contact-list__contact">github </p>
          </li>

          <li className="contact-list__item">
            <svg
              className="contact-list__contact-icon"
              // className="card-container__project-icon"
              // class="advantages-icon"
              // aria-label="стратегия"
              width="32"
              height="32"
            >
              <use href="../../public/contact/contact_set.svg#icon-location"></use>
            </svg>
            <p className=" contact-list__contact">city </p>
          </li>
        </ul>
      </section>
    </>
  );
}
