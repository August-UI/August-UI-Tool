import Rect from "react";
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
  import home from "./pages/home"

  function Routes (){
    return(

        <Router>
        <Route path="/" component={home}></Route>
        <Route path="/about" render={}
        </Router>
    )
  }
export default Routes;