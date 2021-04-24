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
        <Route exact path="/" component={home}></Route>
        <Route path="/about" component={aboutUs}/>
        <Route path="/settings" render={()}
        </Router>
    )
  }
export default Routes;