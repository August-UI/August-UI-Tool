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
        <Route extact path="/" component={home}></Route>
        <Route path="/about" component={aboutUs}/>
        </Router>
    )
  }
export default Routes;