import React from "react";
import { useHistory } from 'react-router-dom'
import {withRouter} from 'react-router-dom';

function Button() {
    
  return <Link to ='/href'><input type="submit" value="YES" onClick={() =>{go("/")}}></input></a>
}

function go(path)
{
    this.props.history.push(path)
}
export default Button;
