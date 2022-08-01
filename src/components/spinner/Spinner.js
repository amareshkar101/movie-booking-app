import React from "react";
import Loader from "../../assets/load.gif";

function Spinner() {
  return <img src={Loader} alt="page loading" style={{ marginTop: 100 }} />;
}

export default Spinner;
