import React from "react";
import style from "./style.module.scss";
import { Button } from "@material-ui/core";

export const MobilePanel = ({ data, getAmount, logOut, currentUser }) => {
  const balance = data.reduce((count, item) => count + item.amount, 0);

  return (
    <div className={style.wrapper}>
      <p className={style.title}>Welcome back,</p>
      <p className={style.username}>{currentUser}</p>

      <div className={style.balance}>
        <p>Your balance</p>
        <p className={style.count}>{getAmount(balance)}</p>
      </div>
      
      <Button onClick={logOut} className={style.button}>
        Log out
      </Button>
    </div>
  );
};
