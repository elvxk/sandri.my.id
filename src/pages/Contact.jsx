import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaDribbble,
  FaFacebook,
} from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen container mx-auto px-6 lg:px-[20vh] py-20"
    >
      <ToastContainer />
      <div className="flex flex-col items-center">
        <h1 className="font-blinker text-ccyan text-4xl font-bold">
          Contact Me
        </h1>
        <p className="font-blinker text-cdark dark:text-cwhite text-center justify-center items-center my-2 text-lg">
          send me a message via the email form below
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex w-full flex-col font-blinker text-cdark dark:text-cwhite bg-cdark/25 p-4 dark:bg-cwhite/10 max-w-screen-sm mx-auto"
        >
          <label>Name</label>
          <input
            required
            type="text"
            name="user_name"
            className="p-2 mb-4"
            placeholder="Input your name..."
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="user_email"
            className="p-2 mb-4"
            placeholder="Input your email..."
          />
          <label>Message</label>
          <textarea
            required
            name="message"
            placeholder="Input your message..."
            className="p-2 mb-4"
          />
          <div className="mx-auto">
            <input
              type="submit"
              value="Send"
              className="bg-cpink dark:bg-ccyan text-cwhite p-2"
            />
          </div>
        </form>
        <h1 className="font-blinker font-bold text-2xl text-ccyan mt-14 lg:mt-32">
          Social
        </h1>
        <p className="font-blinker text-cdark dark:text-cwhite text-center justify-center items-center my-2 mb-6 text-lg">
          find me on the following social media
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center text-2xl text-cdark dark:text-cwhite">
          <a
            href="https://instagram.com/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/r_sandriii"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://dribbble.com/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
          >
            <FaDribbble />
          </a>
          <a
            href="https://github.com/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
