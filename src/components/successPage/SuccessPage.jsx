/* eslint-disable react/prop-types */
import style from "./SuccessPage.module.css";

export const SuccessPage = ({ email, dismissMessage }) => {
  return (
    <div className={style.success_container}>
      <div className={style.success_card}>
        <img src="/icon-success.svg" alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to {email}. Please open it and
          click the button inside to confirm your subscribtion.
        </p>
        <button onClick={dismissMessage} className={style.submit_btn}>
          Dismiss message
        </button>
      </div>
    </div>
  );
};
