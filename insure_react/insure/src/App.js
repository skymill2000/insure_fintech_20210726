import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";

function App() {
  <Router>
    <Switch>
      <Route path="/test" exact>
        <ListPage></ListPage>
      </Route>
    </Switch>
  </Router>;
}

export default App;
