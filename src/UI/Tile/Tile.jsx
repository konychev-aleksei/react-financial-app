import React, { memo } from "react";
import style from "./style.module.scss";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import classNames from "classnames";

const TileElement = ({ label, value, children }) => (
  <div className={style.tile}>
    <div className={classNames(style.type, style.total)}>
      {children}
      &nbsp;{label}
    </div>
    <div className={style.price}>{value}</div>
  </div>
);

export const Tile = ({ getAmount, data }) => {
  const total = data.reduce((count, item) => count + item.amount, 0);
  const income = data.reduce((count, item) => {
    const income = item.amount > 0 ? item.amount : 0;
    return count + income;
  }, 0);
  const expenses = total - income;

  return (
    <div className={style.wrapper}>
      <TileElement label={"Total"} value={getAmount(total)}>
        <MonetizationOnIcon className={style.icon} />
      </TileElement>

      <TileElement label={"Income"} value={getAmount(total)}>
        <AttachMoneyIcon className={style.icon} />
      </TileElement>

      <TileElement label={"Expenses"} value={getAmount(expenses)}>
        <MoneyOffIcon className={style.icon} />
      </TileElement>
    </div>
  );
};
