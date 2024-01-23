/* eslint-disable react/prop-types */
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
