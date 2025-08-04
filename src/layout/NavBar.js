import {link} from "react-router-dom";
import React from "react";
import container from "./container";
import styles from './NavBar.module.css';
import logo from '../../assets/costs_logo.png';
import { jsx } from "react/jsx-runtime";
function NavBar() {
  // Note: The 'Link' component should be imported from 'react-router-dom'
  return (
    <nav className={styles.navbar}>
       <container>
      <Link to="/" className={styles.logo}>
      <img src={logo} alt="Costs" />
      <ul className={styles.list}>
    <li className={styles.item}><Link to="/home">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;