import styles from "./SubscribeForm.module.css";

export const SubscribeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Email adress</label>
        <input
          type="email"
          placeholder="email@company.com"
          className={styles.email_input}
        />
        <button type="submit" className={styles.submit_btn}>
          Subsribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};
