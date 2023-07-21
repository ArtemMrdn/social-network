import React from "react";
import preloader from "../../../ass/images/preloader.svg";

type PropsType = {};

let Preloader: React.FC<PropsType> = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img src={preloader} alt='Preloader' />
    </div>
  );
};

export default Preloader;
