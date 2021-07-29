import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import AxiosTest from "./pages/AxiosTest";
import ListPage from "./pages/ListPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <ListPage></ListPage>
        </Route>
        <Route path="/header" exact>
          <Header title="hello router"></Header>
        </Route>
        <Route path="/axios" exact>
          <AxiosTest></AxiosTest>
        </Route>
        <Route path="/news" exact>
          <NewsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
