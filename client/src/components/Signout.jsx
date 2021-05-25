import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Signout = (props) => {
  useEffect(() => {
    props.signOut();
  }, []);
  return (
    <div>
      <h1>가지마용 😟</h1>
    </div>
  );
};

export default connect(null, actions)(Signout);
