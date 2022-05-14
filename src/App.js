import React, { useState, useEffect } from "react";
import { MobilePanel } from "./UI/MobilePanel/MobilePanel";
import { Tile } from "./UI/Tile/Tile";
import { StyledChart } from "./UI/Chart/Chart";
import { Stats } from "./UI/Stats/Stats";
import { Card } from "./UI/Card/Card";
import { Startup } from "./UI/Startup/Startup";

import * as api from "./api";
import style from "./style.module.scss";
import { types } from "./constants";

const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [data, setData] = useState([]);

  const getAmount = (amount) =>
    amount >= 0 ? `$${amount}` : `-$${String(amount).substring(1)}`;

  const getCategory = (category) => {
    return types[category] || types[8];
  };

  const signIn = async (username) => {
    try {
      const data = await api.getUserData(username);
      window.localStorage.setItem("currentUser", username);
      setCurrentUser(username);
      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  const logOut = () => {
    setCurrentUser(null);
    setData([]);
    window.localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    (async () => {
      try {
        const username = window.localStorage.getItem("currentUser");
        if (username) {
          const data = await api.getUserData(username);
          setCurrentUser(username);
          setData(data);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      {currentUser ? (
        <>
          <MobilePanel
            data={data}
            getAmount={getAmount}
            currentUser={currentUser}
            logOut={logOut}
          />
          <div className={style.dashboard}>
            <div className={style.section}>
              <Tile data={data} getAmount={getAmount} />
              <StyledChart data={data} />
            </div>
            <div className={style.section}>
              <Stats
                data={data}
                getAmount={getAmount}
                getCategory={getCategory}
                setData={setData}
                currentUser={currentUser}
              />
              <Card types={types} setData={setData} currentUser={currentUser} />
            </div>
          </div>
        </>
      ) : (
        <Startup signIn={signIn} />
      )}
    </>
  );
};

export default App;

