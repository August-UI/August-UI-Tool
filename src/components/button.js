import React from "react";
import { useHistory, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Button() {
  return (
    <Link to="/">
      <input
        type="submit"
        value="YES"
      ></input>
    </Link>
  );
}

export default Button;
