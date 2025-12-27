import React from "react";
import styles from "./index.module.css";
import emailjs from "emailjs-com";
const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_r3zarui",
      "template_9by6o6s",
      e.target,
      "i2BXGjjMpZgU45TJr"
    )
    .then(
      () => {
        alert("Mesaj uğurla göndərildi ✅");
        e.target.reset();
      },
      (error) => {
        alert("Xəta baş verdi ❌");
        console.log(error.text);
      }
    );
  };
  return (
    <div className={styles.background}>
      <div className={styles.controlSide}>
        <div className={styles.leftSide}>
          <h2>Change the Way You Do Business, For the Better</h2>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.topRight}>
            <p>
              Let’s enhance your business potential with seamless workflows,
              efficient processes and tools, a stronger brand presence, and all-
              around more operational clarity. And when we do, we’ll elevate
              your impact.
            </p>
            <h2>Are you ready?</h2>
          </div>
         <form className={styles.inputs} onSubmit={sendEmail}>
            <input name="name" placeholder="Your name*" required />
            <input name="email" type="email" placeholder="Your email*" required />
            <input name="source" placeholder="How did you hear about me?" />
            <input name="location" placeholder="Your location*" required />
            <textarea name="message" placeholder="Your message"></textarea>

            <button type="submit">
              SUBMIT <span>></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
