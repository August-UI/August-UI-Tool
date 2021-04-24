import React from "react";

function Button() {
  return <input type="submit" value="YES" onClick={this.props.history.push("/")}></input>;
}

// function go()
// {

// }
export default Button;
