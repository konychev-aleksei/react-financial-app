import React from "react";
import style from "./style.module.scss";

import CreditCardIcon from "@mui/icons-material/CreditCard";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MedicationIcon from "@mui/icons-material/Medication";
import PetsIcon from "@mui/icons-material/Pets";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RedeemIcon from "@mui/icons-material/Redeem";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import CellWifiIcon from "@mui/icons-material/CellWifi";

export const Icon = ({ type }) => {
  const icons = {
    Car: <DirectionsCarIcon />,
    Medication: <MedicationIcon />,
    Pet: <PetsIcon />,
    Food: <RestaurantIcon />,
    Presents: <RedeemIcon />,
    Clothes: <CheckroomIcon />,
    PublicTransport: <DirectionsBusIcon />,
    Communication: <CellWifiIcon />,
    Transaction: <CreditCardIcon />,
  };

  return (
    <div className={style.wrapper}>{icons[type] || <CreditCardIcon />}</div>
  );
};
