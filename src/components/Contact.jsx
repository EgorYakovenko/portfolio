import "../scss/contact.scss";

export default function Contact() {
  return (
    <>
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
          <p>+38011-111-11-11 </p>
        </li>
        <li className="contact-list__item">
          <svg
            // className="card-container__project-icon"
            // class="advantages-icon"
            // aria-label="стратегия"
            width="32"
            height="32"
          >
            <use href="../../public/contact/contact_set.svg#icon-email"></use>
          </svg>
          <p>qwerty@qwe.rty </p>
        </li>
        <li className="contact-list__item">
          <svg
            // className="card-container__project-icon"
            // class="advantages-icon"
            // aria-label="стратегия"
            width="32"
            height="32"
          >
            <use href="../../public/contact/contact_set.svg#icon-telegram"></use>
          </svg>
          <p>telegram </p>
        </li>
        <li className="contact-list__item">
          <svg
            // className="card-container__project-icon"
            // class="advantages-icon"
            aria-label="whatsapp"
            width="32"
            height="32"
          >
            <use href="../../public/contact/contact_set.svg#icon-whatsapp"></use>
          </svg>
          <p>whatsapp </p>
        </li>
        <li className="contact-list__item">
          <svg
            // className="card-container__project-icon"
            // class="advantages-icon"
            // aria-label="стратегия"
            width="32"
            height="32"
          >
            <use href="../../public/contact/contact_set.svg#icon-linkedin"></use>
          </svg>
          <p>link </p>
        </li>

        <li className="contact-list__item">
          <svg
            // className="card-container__project-icon"
            // class="advantages-icon"
            // aria-label="стратегия"
            width="32"
            height="32"
          >
            <use href="../../public/contact/contact_set.svg#icon-github"></use>
          </svg>
          <p>github </p>
        </li>

        <li className="contact-list__item">
          <svg
            // className="card-container__project-icon"
            // class="advantages-icon"
            // aria-label="стратегия"
            width="32"
            height="32"
          >
            <use href="../../public/contact/contact_set.svg#icon-location"></use>
          </svg>
          <p>city </p>
        </li>
      </ul>
    </>
  );
}
