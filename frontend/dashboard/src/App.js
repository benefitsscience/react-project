import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Fade} from "@material-ui/core";

import {menuOptions, headerSubtitles} from "./utilities/constants";
import PageOne from "./pages/page_1/page1";
import PageTwo from "./pages/page_2/page2";
import PageThree from "./pages/page_3/page3";
import PageFour from "./pages/page_4/page4";


function BSTDashboard() {

  return (
      <Router>
          <Switch>
              <Route exact path={"/"}>
                  <PageOne title={menuOptions[0]} subtitle={headerSubtitles[0]} />
              </Route>

              <Route exact path={"/".concat(menuOptions[1].toLowerCase())}>
                  <PageTwo title={menuOptions[1]} subtitle={headerSubtitles[1]} />
              </Route>

              <Route exact path={"/".concat(menuOptions[2].toLowerCase())}>
                  <PageThree title={menuOptions[2]} subtitle={headerSubtitles[2]} />
              </Route>

              <Route exact path={"/".concat(menuOptions[3].toLowerCase())}>
                  <PageFour title={menuOptions[3]} subtitle={headerSubtitles[3]} />
              </Route>
          </Switch>
      </Router>
  );
}

export default BSTDashboard;
