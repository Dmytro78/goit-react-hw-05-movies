import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Loader.module.css";

const LoaderView = () => {
  return (
    <div className={s.loaderContainer}>
      <Loader
        style={{ textAlign: "center", marginTop: "15px" }}
        type="Bars"
        color="#FF0000"
        height={80}
        width={80}
      />
    </div>
  );
};
export default LoaderView;
