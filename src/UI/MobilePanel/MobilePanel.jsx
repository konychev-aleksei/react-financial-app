import React from "react";
import style from "./style.module.scss";
import { Button } from "@material-ui/core";

export const MobilePanel = ({ data, getAmount, logOut, currentUser }) => {
  const balance = data.reduce((count, item) => count + item.amount, 0);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Welcome back,</div>
      <div className={style.username}>{currentUser}</div>

      <div className={style.balance}>
        <div>Your balance</div>
        <div className={style.count}>{getAmount(balance)}</div>
      </div>
      
      <Button onClick={logOut} className={style.button}>
        Log out
      </Button>
    </div>
  );
};
