import { React } from "react";

export const Conocenos = () => {

  const hover = (nombreCorrespondiente) => {
    if (document.getElementById(nombreCorrespondiente).style.opacity === "0") {
      document.getElementById(nombreCorrespondiente).style.opacity = "1";
    } else {
      document.getElementById(nombreCorrespondiente).style.opacity = "0";
    }
  };

  const noHover = (nombreCorrespondiente) => {
    document.getElementById(nombreCorrespondiente).style.opacity = "0";
  };

  return (
    <div className="container">
      <div className="row justify-content-center conocenos">
        <div className="col-md-4 col-11 h-100 my-2 recuadro">
          <h2 className="pt-3 pb-0">Daniel Marquez</h2>
          <img
            id="daniel"
            onMouseOver={() => hover("daniel")}
            onMouseLeave={() => noHover("daniel")}
            className="fotoPerfil"
            alt="..."
            src="https://firebasestorage.googleapis.com/v0/b/showme-69989.appspot.com/o/Fotos%20de%20proyecto%2Fdaniel.png?alt=media&token=4c9514aa-3000-4cc5-9283-9e2eeac14766"
          />
        </div>
        <div className="col-md-4 col-11 h-100 my-2 recuadro">
          <h2 className="pt-3 pb-0">Roberto Tavarez</h2>
        </div>
        <div className="col-md-4 col-11 h-100 my-2 recuadro">
          <h2 className="pt-3 pb-0">Pedro Luis De Leon</h2>
          <img
            id="pedro"
            onMouseOver={() => hover("pedro")}
            onMouseLeave={() => setTimeout(noHover("pedro"), 1000)}
            className="fotoPerfil"
            alt="..."
            src="https://firebasestorage.googleapis.com/v0/b/showme-69989.appspot.com/o/Fotos%20de%20proyecto%2Fpedro3.png?alt=media&token=d97f3889-34c1-4208-80ea-8eec7337ad61"
          />
        </div>
      </div>
    </div>
  );
};
