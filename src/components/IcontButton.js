import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, fas } from '@fortawesome/free-solid-svg-icons'
import classes from "./IconButton.module.css"

// library.add(fas, fa0, faCar, faTrain, faBalanceScale, faBaby);



export const IcontButton = () => {
  const [fontIcon, setFontIcon] = useState(null);

  const generateIconHandler = () => {
    setTimeout(() => {
      const iconsArray=Object.keys(fas)
      const randomIcon=iconsArray[Math.floor(Math.random()*iconsArray.length)]
      setFontIcon(randomIcon);
    }, 3000);
 
  };

  return (
    <div className={classes.contentWrapper}>
      {fontIcon&&<FontAwesomeIcon icon={fas[fontIcon]} color="wheat" fontSize="40px" />}
      <button className={classes.Button} onClick={generateIconHandler}>
        Generate Icon {fontIcon&&<FontAwesomeIcon icon={fas[fontIcon]} />}
      </button>
    </div>
  );
};
