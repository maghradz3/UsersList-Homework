import React, { useEffect, useState } from "react";
// import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBalanceScale,
  faCar,
  faTrain,
  faBaby,
  fa0,
  faRandom,
  fa2,
  faDog,
  faPlane,
  faClock,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
// import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./IconButton.module.css";

// library.add(fas, fa0, faCar, faTrain, faBalanceScale, faBaby);
const fontIcons = [
  faBalanceScale,
  faCar,
  faTrain,
  faBaby,
  fa0,
  fa2,
  faDog,
  faPlane,
  faClock,
  faCircle,
];
console.log(fontIcons.length);

// console.log(icons);
// const iconsKeys = Object.keys(icons);
// console.log(iconsKeys[0]);

const getRandomIndex = () => {
  const randomIndex = Math.floor(Math.random() * fontIcons.length);

  return fontIcons[randomIndex];
};

export const IcontButton = () => {
  const [fontIcon, setFontIcon] = useState(faRandom);

  const generateIconHandler = () => {
    const timer = setTimeout(() => {
      setFontIcon(getRandomIndex());
    }, 3000);
    return timer;
  };

  return (
    <div className={classes.contentWrapper}>
      <FontAwesomeIcon icon={fontIcon} color="wheat" fontSize="40px" />
      <button className={classes.Button} onClick={generateIconHandler}>
        Generate <FontAwesomeIcon icon={fontIcon} />
      </button>
    </div>
  );
};
