import Rect from "react";
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
  import {withRouter} from 'react-router-dom';

  import home from "./pages/home"
  import aboutUs from "./pages/aboutUs"

  function Routes (){
    return(
        
        <Router>
        <Route exact path="/" component={ab}></Route>
        <Route path="/about" component={aboutUs}/>
        <Route path="/settings" render={()=>(<p>SETTIGNS</p>)}/>
        </Router>
    )
  }
export default Routes;