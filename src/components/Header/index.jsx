// 変更箇所

import React from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.png';
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.AppHeader}>
      <div className={classes.headerContent}>
        <Link to="/" className={classes.logoContainer}>
          <img src={logo} className={classes.logo} alt="logo" />
        </Link>
        <nav className={classes.nav}>
          <Link to="/" className={classes.navLink}>ホーム</Link>
          <Link to="/contact" className={classes.navLink}>お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
};