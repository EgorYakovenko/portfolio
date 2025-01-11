import { Field, Formik, Form } from "formik";

import "../scss/contact.scss";

export default function Contact() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <section className="contacts">
        <h2 className="contacts__propose">LET´S MAKE SOMETHING AMAZING!</h2>
        <img src="../../public/foto.png" alt="" width={120} />
        <p className="contacts__name">Egor Yakovenko</p>
        <p className="contacts__email">Egor.Yakovenko@ukr.net</p>

        <Formik
          initialValues={{
            name: "",
            mail: "",
            message: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="contacts__form-container">
            <Field className="contacts__input" type="text" name="name"></Field>
            <Field className="contacts__input" type="email" name="mail"></Field>
            <Field
              className="contacts__area"
              type="text"
              name="message"
            ></Field>
            <button className="contacts__button" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </section>
    </>
  );
}
