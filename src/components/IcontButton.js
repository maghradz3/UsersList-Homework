import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBalanceScale,
  faCar,
  faTrain,
  faBaby,
  fa0,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./IconButton.module.css";

// library.add(fas, fa0, faCar, faTrain, faBalanceScale, faBaby);
const fontIcons = [faBalanceScale, faCar, faTrain, faBaby, fa0];
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
    <div>
      <FontAwesomeIcon icon={fontIcon} color="white" />
      <button className={classes.button} onClick={generateIconHandler}>
        Generate <FontAwesomeIcon icon={fontIcon} />
      </button>
    </div>
  );
};
