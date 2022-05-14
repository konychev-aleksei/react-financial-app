import React, { useState } from "react";
import style from "./style.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import moment from "moment";
import * as api from "../../api";

export const Card = ({ types, setData, currentUser }) => {
  const [category, setCategory] = useState(8);
  const [amount, setAmount] = useState(0);

  const isDisabled = () => !amount.length || isNaN(amount);

  const handleAddRecord = async (e) => {
    e.preventDefault();
    try {
      const data = await api.addRecord(currentUser, {
        amount: +amount,
        category,
        date: moment(Date.now()).format("YYYY/MM/DD HH:mm:ss"),
      });

      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelect = (e) => setCategory(e.target.value);

  const handleClick = (e) => setAmount(e.target.value);

  const typesList = Object.keys(types);

  return (
    <form className={style.wrapper}>
      <Select
        value={category}
        className={style.select}
        size={"small"}
        onChange={handleSelect}
      >
        {typesList.map((key) => (
          <MenuItem key={key} value={key}>
            {types[key]}
          </MenuItem>
        ))}
      </Select>
      <TextField
        value={amount}
        className={style.textfield}
        size={"small"}
        onChange={handleClick}
      />
      <Button
        type="submit"
        disabled={isDisabled()}
        onClick={handleAddRecord}
        className={style.button}
      >
        Add
      </Button>
    </form>
  );
};
