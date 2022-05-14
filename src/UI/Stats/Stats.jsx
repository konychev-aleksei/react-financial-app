import React from "react";
import style from "./style.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Icon } from "../Icon/Icon";
import moment from "moment";

import * as api from "../../api";


const ListItem = ({
  getCategory,
  getAmount,
  formattedDate,
  item,
  handleRemoveRecord,
}) => {
  const handleClick = () => handleRemoveRecord(item.id);

  return (
    <div key={item.id} className={style.data}>
      <Icon type={getCategory(item.category)} />
      <div className={style.info}>
        <div className={style.type}>{getCategory(item.category)}</div>
        <div className={style.date}>{formattedDate(item.date)}</div>
      </div>
      <IconButton onClick={handleClick}>
        <CloseIcon />
      </IconButton>
      <div className={style.number}>{getAmount(item.amount)}</div>
    </div>
  );
};

export const Stats = ({
  data,
  getAmount,
  getCategory,
  setData,
  currentUser,
}) => {
  const formattedDate = (date) => moment(date).format("MMMM DD, YYYY");

  const handleRemoveRecord = async (id) => {
    try {
      const data = await api.removeRecord(currentUser, id);
      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.stats}>
        {data.length ? (
          data.map((item) => (
            <ListItem
              getCategory={getCategory}
              getAmount={getAmount}
              formattedDate={formattedDate}
              item={item}
              handleRemoveRecord={handleRemoveRecord}
            />
          ))
        ) : (
          <div className={style.nodata}>No data</div>
        )}
      </div>
    </div>
  );
};
