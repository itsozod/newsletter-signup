/* eslint-disable react/prop-types */
// import { useState } from "react";
import styles from "./SubscribeForm.module.css";

export const SubscribeForm = ({
  email,
  error,
  setEmail,
  handleSubmit,
}) => {
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");


  return (
    <>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label>
            Email adress <span style={{ color: "red" }}>{error}</span>
          </label>
          <input
            type="email"
            placeholder="email@company.com"
            className={error ? styles.error : styles.email_input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className={styles.submit_btn}>
            Subsribe to monthly newsletter
          </button>
        </form>
      </div>
    </>
  );
};
