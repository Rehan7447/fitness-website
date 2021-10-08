import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Freetherapy from "../Pages/free-therapy";
import Grouptherapy from "../Pages/group-therapy";
import HearingImpaired from "../Pages/for-hearing-impaired";
import "../css/Header.css";
import "../css/footer.css";

import Home from "../Pages/home";
import Contact from "../Pages/contact";
import Program from "../Pages/program";
import About from "../Pages/About";
import ForMoms from "../Pages/for-moms";
import "../css/Header.css";
import "../css/footer.css";
class MyRoutes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/program" component={Program} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/free-therapy" component={Freetherapy} />
            <Route exact path="/group-therapy" component={Grouptherapy} />
            <Route exact path="/for-moms" component={ForMoms} />
            <Route
              exact
              path="/for-hearing-impaired"
              component={HearingImpaired}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRoutes;
