import React from "react";
import { useHistory } from 'react-router-dom'
import {withRouter} from 'react-router-dom';

function Button() {
    
  return <a<input type="submit" value="YES" onClick={() =>{go("/")}}></input>;
}

function go(path)
{
    this.props.history.push(path)
}
export default Button;
