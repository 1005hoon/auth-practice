import React from "react";
import requireAuth from "./hoc/requireAuth";

const Feature = () => {
  return (
    <div>
      <h1>this is feature</h1>
    </div>
  );
};

export default requireAuth(Feature);
