import React from "react";
import { useHistory } from 'react-router-dom'

function Button() {
    
  return <input type="submit" value="YES" onClick={this.props.history.push("/")}></input>;
}

// function go()
// {

// }
export default Button;
