import { Field, Formik, Form } from "formik";

import "../scss/contact.scss";

export default function Contact() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <section className="contacts">
        <div className="contacts__doit">
          <h2 className="contacts__propose">LET´S MAKE SOMETHING AMAZING!</h2>
          <div className="contacts__details">
            <img
              className="contacts__foto"
              src="../../public/photo2.jpg"
              alt=""
            />
            <div>
              <p className="contacts__name">Egor Yakovenko</p>
              <p className="contacts__email">Egor.Yakovenko@ukr.net</p>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{
            name: "",
            mail: "",
            message: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="contacts__form-container">
            {/* <div className="contacts__input-container"> */}
            <Field
              as="input"
              className="contacts__input"
              type="text"
              name="name"
              placeholder="name"
            ></Field>
            <Field
              className="contacts__input"
              type="email"
              name="mail"
              placeholder="Email"
            ></Field>
            <Field
              className="contacts__area"
              as="textarea"
              rows="15"
              type="text"
              name="message"
              placeholder="message"
            ></Field>
            {/* </div> */}

            <button className="contacts__button" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </section>
    </>
  );
}
