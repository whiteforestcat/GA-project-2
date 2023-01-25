import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className={styles.navbar}>
            Home
        </NavLink>
        <NavLink to="/animals" className={styles.navbar}>
          Animals
        </NavLink>
        <NavLink to="/flowers" className={styles.navbar}>
          Flowers
        </NavLink>
        <NavLink to="/furniture" className={styles.navbar}>
          Furniture
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
