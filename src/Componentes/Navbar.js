import { React } from "react";
import { Inicio } from "./Inicio";
import { Conocenos } from "./Conocenos";
import { Contactanos } from "./Contactanos";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <Router>
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg Navbar py-0">
          <div className="container-fluid">
            <span className="navbar-brand">
              <Link to="/">
                <button className="btn text-white fs-1">
                  <FontAwesomeIcon icon={faLaptopCode} className="mr-1"/>
                  UltraWeb
                </button>
              </Link>
            </span>
            <span className="navbar-text">
              <Link to="/conocenos">
                <button className="text-white btn navBarButton">
                  Conócenos
                </button>
              </Link>
              <Link to="/contactanos">
                <button className="text-white btn navBarButton">
                  Contáctanos
                </button>
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
        <Route path="/contactanos">
          <Contactanos />
        </Route>
      </Switch>
    </Router>
  );
};
