import styles from "./NewsletterContainer.module.css";
import { SubscribeForm } from "../subscribeForm/SubscribeForm";
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
  return (
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
        <SubscribeForm />
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
