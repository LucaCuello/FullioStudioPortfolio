import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiError } from "react-icons/bi";
import "./ContactForm.css";
import { userSchema } from "./Validation/UserValidation";

const notifySuccess = () =>
  toast.success("Message sent!", {
    position: "bottom-right",
    duration: 3000,
    style: { fontFamily: "Adobe Garamond Pro Regular", letterSpacing: "3px" },
  });

const notifyError = () =>
  toast.error("Something went wrong. Try again later.", {
    position: "bottom-right",
    duration: 3000,
    style: { fontFamily: "Adobe Garamond Pro Regular", letterSpacing: "3px" },
  });

export const ContactForm = () => {
  const [error, setError] = useState(false);

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
          console.log(result.text), notifySuccess();
        },
        (error) => {
          console.log(error.text), notifyError();
        }
      );
  };

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    const currentForm = form.current as HTMLFormElement | null;
    if (currentForm === null) return;

    e.preventDefault();

    const target = e.target as typeof e.target & {
      elements: {
        name: { value: string };
        lastName: { value: string };
        email: { value: string };
        subject: { value: string };
        message: { value: string };
      };
    };

    const formData = {
      name: target.elements.name.value,
      lastName: target.elements.lastName.value,
      email: target.elements.email.value,
      subject: target.elements.subject.value,
      message: target.elements.message.value,
    };

    const isValid = await userSchema.isValid(formData);
    if (isValid) {
      sendEmail(e), currentForm.reset(), setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form className="form-container" ref={form} onSubmit={sendForm}>
      <label className="contact-label text contact-text contact-text-large name-group-title">Name</label>
      <div className="name-group">
        <label htmlFor="name" className="contact-label text contact-text">
          First name
          <input type="text" name="name" id="name" className="contact-input" />
        </label>
        <label htmlFor="last-name" className="contact-label text contact-text">
          Last name
          <input type="text" name="lastName" id="last-name" className="contact-input" />
        </label>
      </div>
      <label htmlFor="email" className="contact-label text contact-text contact-text-large">
        Email Address
        <input type="email" name="email" id="email" className="contact-input" />
      </label>
      <label htmlFor="subject" className="contact-label text contact-text contact-text-large">
        Subject
        <input type="text" name="subject" id="subject" className="contact-input" />
      </label>
      <label htmlFor="message" className="contact-label text contact-text contact-text-large">
        Message
        <textarea className="contact-textarea" id="message" name="message"></textarea>
      </label>
      <button type="submit" className="contact-submit btn">
        Submit
      </button>
      <AnimatePresence>
        {error ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text error-text"
          >
            <BiError />
            Please, fill all the fields in order to send the message!
          </motion.span>
        ) : null}
      </AnimatePresence>
      <Toaster />
    </form>
  );
};
