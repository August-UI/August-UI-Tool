import Rect from "react";
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
  import home from "./pages/home"

  function routes (){
    return(

        <Router>
        <Route path="/" component={home}></Route>
        </Router>
    )
  }
export default routes;