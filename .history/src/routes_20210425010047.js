import Rect from "react";
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
  import home from "./pages/home"

  function Routes (){
    return(
        <S
        <Router>
        <Route path="/" component={home}></Route>
        <Route path="/about" render={()=> (<p>ABOUT us!</p>)}/>
        </Router>
    )
  }
export default Routes;