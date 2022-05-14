import React, { useState } from "react";
import style from "./style.module.scss";
import { Button } from "@material-ui/core";

export const Startup = ({ signIn }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(username);
  };

  const handleChange = (e) => setUsername(e.target.value);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>React Financial App</div>
      <form className={style.form}>
        <input
          onChange={handleChange}
          type="text"
          className={style.input}
          placeholder="Username"
        />
        <Button type="submit" onClick={handleSubmit} className={style.button}>
          Sign in
        </Button>
      </form>
    </div>
  );
};
