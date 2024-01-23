import styles from "./NewsletterContainer.module.css";

export const NewsletterContainer = () => {
  return (
    <div className={styles.newsletter_container}>
      <div className={styles.letter_card}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updated on</p>
      </div>
      <picture>
        <img
          src="/illustration-sign-up-desktop.svg"
          className={styles.default_pic}
          alt=""
        />
      </picture>
    </div>
  );
};
