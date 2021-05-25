import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

export default function requireAuth(ChildComponent) {
  function WithAuth(props) {
    const history = useHistory();
    const { auth } = props;

    useEffect(() => {
      shouldNavigateAway();
    });

    const shouldNavigateAway = () => {
      if (!auth) {
        history.push("/");
      }
    };

    return <ChildComponent {...props} />;
  }

  const mapStateToProps = (state) => ({ auth: state.auth.authenticated });
  return connect(mapStateToProps)(WithAuth);
}
