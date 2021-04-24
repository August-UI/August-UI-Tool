import React from "react";
import { useHistory } from 'react-router-dom'

function Button() {
    
  return <input type="submit" value="YES" onClick={}></input>;
}

function go()
{
    this.props.useHistory.push("/")
}
export default Button;
