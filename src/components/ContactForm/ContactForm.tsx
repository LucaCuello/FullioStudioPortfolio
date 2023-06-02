import "./ContactForm.css";

export const ContactForm = () => {
  return (
    <form className="form-container" action="">
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
        <textarea className="contact-textarea" id="message"></textarea>
      </label>
      <button type="submit" className="contact-submit btn">
        Submit
      </button>
    </form>
  );
};
