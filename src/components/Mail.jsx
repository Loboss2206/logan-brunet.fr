import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import CustomTitle from "./CustomTitle";
import { emailServiceId, emailTemplateId, emailUserId } from "../emailjs-id";
import ReCAPTCHA from "react-google-recaptcha";
import { FadeLoader } from "react-spinners";
import Alert from "./Alert";

const Mail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const recaptcha = useRef();
  const siteKey = import.meta.env.VITE_SITE_KEY;

  useEffect(() => {
    if (alertMessage) {
      setTimeout(() => setAlertMessage(""), 3000);
    }
  }, [alertMessage]);

  useEffect(() => {
    setName("");
    setEmail("");
    setMessage("");
  }, [isSending]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleClick = async (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Logan",
      from_name: name,
      from_email: email,
      message: message,
    };

    const captchaValue = recaptcha.current.getValue();

    if (name === "") {
      setAlertMessage("You didn't enter a name!");
      setAlertType("error");
      return;
    }

    if (email === "") {
      setAlertMessage("You didn't enter an email!");
      setAlertType("error");
      return;
    }

    if (message === "") {
      setAlertMessage("You didn't enter a message!");
      setAlertType("error");
      return;
    }

    if (!emailRegex.test(email)) {
      setAlertMessage("Please enter a valid email!");
      setAlertType("error");
      return;
    }

    if (!captchaValue) {
      setAlertMessage("Please verify the reCAPTCHA!");
      setAlertType("error");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        templateParams,
        emailUserId
      );
      setAlertMessage("Email sent!");
      setAlertType("success");
    } catch (error) {
      console.error(error);
      setAlertMessage("Error sending email");
      setAlertType("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      name="Mail"
      className="flex items-center w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"
    >
      <Alert
        message={alertMessage}
        type={alertType}
        onClose={() => setAlertMessage("")}
      />{" "}
      <div className={`fixed h-screen ${isSending ? "" : "hidden"}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <FadeLoader color="white" height={35} margin={20} />
        </div>
      </div>
      <div
        className={`flex flex-col w-full 2xl:w-2/3 flex-grow p-4 mt-4 ${
          isSending ? "hidden" : ""
        }`}
      >
        <CustomTitle
          title="nano new_mail"
          margin="8"
          animationActivated={false}
          onAnimationEnd={() => {}}
        />
        <form className="flex flex-col gap-1" onSubmit={handleClick}>
          <label
            htmlFor="name"
            className="text-black dark:text-white text-2xl font-bold mt-4"
          >
            Your Name
          </label>
          <input
            type="text"
            placeholder="Ex: John"
            id="name"
            name="name"
            className="text-white p-4 rounded-lg bg-gray-800 focus:outline-none shadow-md shadow-gray-900"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label
            htmlFor="email"
            className="text-black dark:text-white text-2xl font-bold mt-4"
          >
            Your Email
          </label>
          <input
            type="text"
            placeholder="Ex: johndoe@gmail.com"
            id="email"
            name="email"
            className="text-white p-4 rounded-lg bg-gray-800 focus:outline-none shadow-md shadow-gray-900"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label
            htmlFor="message"
            className="text-black dark:text-white text-2xl font-bold mt-4"
          >
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Ex: Hello Logan, I'm writing to..."
            name="message"
            className="text-white p-4 rounded-lg bg-gray-800 focus:outline-none shadow-md shadow-gray-900 h-48"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <div className="flex justify-center items-center w-full flex-col mt-4">
            <ReCAPTCHA ref={recaptcha} sitekey={siteKey} />
          </div>
          <button
            type="submit"
            className="w-48 bg-green-700 text-white text-xl font-bold p-2 mt-4 rounded-md self-center"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
