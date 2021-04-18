import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import LogIn from "./components/Login";
import Home from "./components/PersistentDrawer";
import { AuthProvider } from "./components/auth";
import Production from "./components/production_list_component";
import PersistentDrawer from "./components/PersistentDrawer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Redirect exact path="/" to="/login" />
          <Route exact path="/login" component={LogIn} />
          <PersistentDrawer />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
