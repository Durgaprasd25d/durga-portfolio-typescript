import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import emailjs from "emailjs-com";

import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./contact.module.scss";
import lottieData from "../../assets/email.json";

const contactOpen = "<Contact />";

const Contact = () => {
  const [contactData, setContactData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef<HTMLFormElement | null>(null);

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleOnsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_nxoadbw", // Your service ID
          "template_wgg56dw", // Your template ID
          form.current,
          "r3EfCIyjD7KdrJ9R7" // Your public key from EmailJS dashboard
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      setContactData({
        from_name: "",
        user_email: "",
        message: "",
      });
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.contact}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
        className={styles.wrapper}
      >
        <div className={styles.form}>
          <h3 className={styles.contactOpen}>{contactOpen}</h3>
          <form ref={form} onSubmit={handleOnsubmit}>
            <label htmlFor="from_name">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Name"
              required
              value={contactData.from_name}
              onChange={handleOnchange}
            />
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Email"
              required
              value={contactData.user_email}
              onChange={handleOnchange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              cols={30}
              rows={5}
              placeholder="Your Message"
              required
              value={contactData.message}
              onChange={handleOnchange}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={styles.lottie}>
          <Lottie
            options={defaultOptions}
            height="100%"
            width="100%"
            isStopped={false}
            isPaused={false}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
