import { React } from "react";
import { Bubbles } from "./Bubbles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export const Inicio = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-10 logo">
            <FontAwesomeIcon
              icon={faLaptopCode}
              size="10x"
              color="#3c99c5"
              className="mt-5 mb-3"
            />
          <h1 className="d-block ultrawebName">UltraWeb</h1>
        </div>
        <Bubbles/>
      </div>
    </div>
  );
};
