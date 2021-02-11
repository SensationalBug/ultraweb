import { React, useState } from "react";
import FlipCard from "flip-card-react";

export const Pedro = () => {
  const [isFlipped, setFlipped] = useState(false);
  const flip = () => setFlipped((girar) => !girar);

  const front = (
    <div onClick={() => flip()}>
      <img
        className="fotoPerfil"
        alt="..."
        src="https://firebasestorage.googleapis.com/v0/b/showme-69989.appspot.com/o/Fotos%20de%20proyecto%2Fpedro3.png?alt=media&token=d97f3889-34c1-4208-80ea-8eec7337ad61"
      />
    </div>
  );

  const back = (
    <div onClick={() => flip()} className="h-100">
      <h2 className="pt-3 pb-0">Pedro Luis De Leon</h2>
      <div className="parrafo text-justify" id="parrafoDaniel">
        <p>
          Técnico en informática y encargado de desarrollo en el proyecto
          UltreWeb.
        </p>
        <p>
          Empecé en el área de desarrollo web en 2019 y desde entonces me he
          encaminado por el rumbo de JavaScript como lenguaje principal para
          desarrollar sitios web y web apps, además de sus librerias y
          herramientas.
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <FlipCard isFlipped={isFlipped} front={front} back={back} />
    </div>
  );
};

export const Daniel = () => {
  const [isFlipped, setFlipped] = useState(false);
  const flip = () => setFlipped((girar) => !girar);

  const front = (
    <div onClick={() => flip()}>
      <img
        className="fotoPerfil"
        alt="..."
        src="https://firebasestorage.googleapis.com/v0/b/showme-69989.appspot.com/o/Fotos%20de%20proyecto%2Fdaniel.png?alt=media&token=4c9514aa-3000-4cc5-9283-9e2eeac14766"
      />
    </div>
  );

  const back = (
    <div onClick={() => flip()} className="h-100">
      <h2 className="pt-3 pb-0">Daniel Marquez</h2>
      <div className="parrafo text-justify">
        <p>
          Técnico en informática y encargado de diseño en el proyecto UltraWeb.
        </p>
        <p>
          Con mas de 28 certificaciones en el área, con experiencia como
          diseñador y editor de vídeos, actualmente facilitador de algunas
          academias importants en el area de informática, programación,
          multimedia, entre otras.
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <FlipCard isFlipped={isFlipped} front={front} back={back} />
    </div>
  );
};

export const Lobelto = () => {
  const [isFlipped, setFlipped] = useState(false);
  const flip = () => setFlipped((girar) => !girar);

  const front = (
    <div onClick={() => flip()}>
      <img
        className="fotoPerfil"
        alt="..."
        src="https://firebasestorage.googleapis.com/v0/b/showme-69989.appspot.com/o/Fotos%20de%20proyecto%2Flobelto.png?alt=media&token=e862caa6-d024-405b-9208-a5e02f02dfe7"
      />
    </div>
  );

  const back = (
    <div onClick={() => flip()} className="h-100">
      <h2 className="pt-3 pb-0">Lobelto Tavarez</h2>
      <div className="parrafo text-justify">
        <p>Técnico en informática y presidente del Proyecto UltraWeb.</p>
        <p>
          Inicié en el área de desarrollo de software con 15 años diseñando
          calculadoras y agendas como proyectos escolares. Como estudiante de
          O&M, Ahora me centro en el campo de educación digital.
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <FlipCard isFlipped={isFlipped} front={front} back={back} />
    </div>
  );
};
