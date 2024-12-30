import "../scss/contact.scss";

export default function Contact() {
  return (
    <>
      <section className="contacts">
        <ul className="contacts__list">
          <li className="contacts__item">
            <svg
              className="contacts__icon"
              aria-label="phone"
              width="32"
              height="32"
            >
              <use href="../../public/contact/set_contacts.svg#icon-device-mobile"></use>
            </svg>
            <p className="contacts__contact">+38 (068)-104-07-12 </p>
          </li>
          <li className="contacts__item">
            <svg
              className="contacts__icon"
              aria-label="email"
              width="32"
              height="32"
            >
              <use href="../../public/contact/set_contacts.svg#icon-mail"></use>
            </svg>
            <p className="contacts__contact">Egor.Yakovenko@ukr.net </p>
          </li>
          <li className="contacts__item">
            <svg
              className="contacts__icon"
              aria-label="telegram"
              width="32"
              height="32"
            >
              <use href="../../public/contact/set_contacts.svg#icon-brand-telegram"></use>
            </svg>
            {/* <p className="contacts__contact">https://t.me/Ehor1987 </p> */}
            <a
              className="contacts__contact"
              href="https://t.me/Ehor1987"
              target="_blank"
            >
              Telegram
            </a>
          </li>
          {/* <li className="contacts__item">
            <svg
              className="contacts__icon"
              aria-label="whatsapp"
              width="32"
              height="32"
            >
              <use href="../../public/contact/set_contacts.svg#icon-brand-whatsapp"></use>
            </svg>
            <p className="contacts__contact">whatsapp </p>
          </li> */}
          <li className="contacts__item">
            <svg
              className="contacts__icon"
              aria-label="linkedin"
              width="32"
              height="32"
            >
              <use href="../../public/contact/set_contacts.svg#icon-brand-linkedin"></use>
            </svg>
            {/* <p className="contacts__contact">linkedin </p> */}
            <a
              className="contacts__contact"
              href="https://www.linkedin.com/in/egor-yakovenko/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>

          <li className="contacts__item">
            <svg
              className="contacts__icon"
              aria-label="github"
              width="32"
              height="32"
            >
              <use href="../../public/contact/set_contacts.svg#icon-brand-github"></use>
            </svg>
            {/* <p className="contacts__contact">github </p> */}
            <a
              className="contacts__contact"
              href="https://github.com/EgorYakovenko"
              target="_blank"
            >
              GitHub
            </a>
          </li>

          <li className="contacts__item">
            <svg
              className="contacts__icon"
              aria-label="location"
              width="32"
              height="32"
            >
              <use href="../../public/contact/set_contacts.svg#icon-map-pin"></use>
            </svg>
            <p className="contacts__contact">Germany </p>
            {/* <p className="contacts__contact">City: Hameln </p> */}
          </li>
        </ul>
      </section>
    </>
  );
}
