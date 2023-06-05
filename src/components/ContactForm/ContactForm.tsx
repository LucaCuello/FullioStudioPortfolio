import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./ContactForm.css";

export const ContactForm = () => {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        currentForm,
        import.meta.env.VITE_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form-container" ref={form} onSubmit={sendEmail}>
      <label className="contact-label text contact-text contact-text-large name-group-title">
        {/* <span className="contact-type text contact-text">(Required)</span> */}
        Name
      </label>
      <div className="name-group">
        <label htmlFor="name" className="contact-label text contact-text">
          First name
          <input type="text" name="name" id="name" className="contact-input" />
        </label>
        <label htmlFor="last-name" className="contact-label text contact-text">
          Last name
          <input type="text" name="last-name" id="last-name" className="contact-input" />
        </label>
      </div>
      <label htmlFor="email" className="contact-label text contact-text contact-text-large">
        {/* <span className="contact-type text contact-text">(Required)</span> */}
        Email Address
        <input type="email" name="email" id="email" className="contact-input" />
      </label>
      <label htmlFor="subject" className="contact-label text contact-text contact-text-large">
        {/* <span className="contact-type text contact-text">(Required)</span> */}
        Subject
        <input type="text" name="subject" id="subject" className="contact-input" />
      </label>
      <label htmlFor="message" className="contact-label text contact-text contact-text-large">
        {/* <span className="contact-type text contact-text">(Required)</span> */}
        Message
        <textarea className="contact-textarea" id="message" name="message"></textarea>
      </label>
      <button type="submit" className="contact-submit btn">
        Submit
      </button>
    </form>
  );
};
