import { React } from "react";
import { Pedro, Daniel, Lobelto } from "./Integrantes";

export const Conocenos = () => {
  return (
    <div className="container">
      <div className="row justify-content-center conocenos">
        
        <div className="col-md-4 col-11 h-100 my-2 pt-5 recuadro">
          <Pedro />
        </div>

        <div className="col-md-4 col-11 h-100 my-2 pt-5 recuadro">
          <Daniel />
        </div>

        <div className="col-md-4 col-11 h-100 my-2 pt-5 recuadro">
          <Lobelto />
        </div>
        
      </div>
    </div>
  );
};
