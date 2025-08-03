import {link} from "react-router-dom";
import React from "react";
import container from "./container";
import styles from './NavBar.module.css';
import logo from '../../assets/costs_logo.png';
function NavBar() {
  return (
    <nav>
      <ul>
    <li><Link to="/home">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
}