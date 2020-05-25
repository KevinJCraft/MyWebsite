import React from "react";
import { useHistory } from "react-router-dom";
import "./noPath.css";
import MenuButton from "../MenuButton";

const NoPath = () => {
  const history = useHistory();
  return (
    <>
      <MenuButton />
      <div className="noPath">
        <div className="noPath-row">
          <h1>Did I miss a semi-colon? Either way, back to HOME with ya!</h1>
        </div>
        <div className="noPath-row">
          <button onClick={() => history.push("/")}>Back to Home</button>
        </div>
      </div>
    </>
  );
};

export default NoPath;
