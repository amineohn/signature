import dom from "react-dom";
import "./styles/main.css";
import Index from "./viewes/index";
import Auth from "./viewes/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

dom.render(
  <Router>
    <Switch>
      <Route path="/">
        <Index />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
