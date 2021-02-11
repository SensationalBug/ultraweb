import { React } from "react";
import { Inicio } from "./Inicio";
import { Conocenos } from "./Conocenos";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <Router>
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg Navbar py-0">
          <div className="container-fluid">
            <span className="navbar-brand text-white">
              <FontAwesomeIcon icon={faLaptopCode} className="mr-1"/>
              UltraWeb
            </span>
            <span className="navbar-text">
              <Link to="/">
                <button className="text-white btn navBarButton">Inicio</button>
              </Link>
              <Link to="/conocenos">
                <button className="text-white btn navBarButton">Conocenos</button>
              </Link>
            </span>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route path="/conocenos">
          <Conocenos />
        </Route>
      </Switch>
    </Router>
  );
};
