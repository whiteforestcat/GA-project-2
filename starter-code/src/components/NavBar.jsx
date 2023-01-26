import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <li>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/animals"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Animals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/flowers"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Flowers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourites"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >Favourites</NavLink>
        </li>
      </nav>
    </header>
  );
};

export default NavBar;
