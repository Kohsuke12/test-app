// 変更箇所

import React from "react";
import logo from '../../logo.png';
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.AppHeader}>
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.logo} alt="logo" />
        </div>
      </header>
  );
};