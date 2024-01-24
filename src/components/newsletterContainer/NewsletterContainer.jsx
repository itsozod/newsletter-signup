import styles from "./NewsletterContainer.module.css";
import { SubscribeForm } from "../subscribeForm/SubscribeForm";
import { useState } from "react";
import { SuccessPage } from "../successPage/SuccessPage";
const updatesArray = [
  {
    id: 1,
    icon: "/icon-list.svg",
    text: "Product discovery and building what matters",
  },
  {
    id: 2,
    icon: "/icon-list.svg",
    text: "Measuring to ensure updates are a success",
  },
  {
    id: 3,
    icon: "/icon-list.svg",
    text: "Add much more!",
  },
];

export const NewsletterContainer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (em) => {
    return String(em)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setError("Fill the input");
    } else if (!validateEmail(email)) {
      setError("Valid email required");
    } else {
      setError("");
      // setEmail("");
      setSuccess(true);
      setTimeout(() => {
        alert(`You signed up successfully ${email}`);
      }, 500);
    }
  };

  const dismissMessage = () => {
    setSuccess(false);
    setEmail("");
  };
  return (
    <>
      {success ? (
        <SuccessPage email={email} dismissMessage={dismissMessage} />
      ) : (
        <div className={styles.newsletter_container}>
          <div className={styles.letter_card}>
            <div className={styles.info}>
              <h1>Stay updated!</h1>
              <p className={styles.product_info}>
                Join 60,000+ product managers receiving monthly updated on
              </p>
            </div>
            <div className={styles.updates}>
              {updatesArray.map((updateCard) => (
                <div className={styles.update_card} key={updateCard.id}>
                  <img src={updateCard.icon} alt="" />
                  <p className={styles.updateText}>{updateCard.text}</p>
                </div>
              ))}
            </div>
            <SubscribeForm
              handleSubmit={handleSubmit}
              email={email}
              error={error}
              setEmail={setEmail}
            />
          </div>
          <picture>
            <source
              srcSet="/illustration-sign-up-mobile.svg"
              media="(max-width: 768px)"
            ></source>
            <img
              src="/illustration-sign-up-desktop.svg"
              className={styles.default_pic}
              alt=""
            />
          </picture>
        </div>
      )}
    </>
  );
};
