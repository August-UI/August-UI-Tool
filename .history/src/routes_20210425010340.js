import Rect from "react";
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
  import home from "./pages/home"
  import aboutUs from "./pages/aboutUs"

  function Routes (){
    return(
        
        <Router>
        <Route path="/" component={home}></Route>
        <Route path="/about" component={ab}/>
        </Router>
    )
  }
export default Routes;