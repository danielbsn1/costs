import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import React from "react";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
      </div>
      <p>Costs &copy; 2023</p>
    </footer>
  );
}  