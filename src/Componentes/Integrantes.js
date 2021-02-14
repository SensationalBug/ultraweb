import { React, useState } from "react";
import FlipCard from "flip-card-react";

export const Pedro = () => {
  const [isFlipped, setFlipped] = useState(false);
  const flip = () => setFlipped((girar) => !girar);

  const front = (
    <div onClick={() => flip()} className="h-100 contenedor">
      <h2 className="pt-3 pb-0">Pedro Luis De Leon</h2>
      <div className="parrafo text-justify">
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

  const back = (
    <div onClick={() => flip()}>
      <img
        className="fotoPerfil"
        alt="..."
        src="https://firebasestorage.googleapis.com/v0/b/ultraweb-ec96d.appspot.com/o/pedro2.png?alt=media&token=06a144df-2675-4954-80ef-b23057328b08"
      />
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
    <div onClick={() => flip()} className="h-100 contenedor">
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

  const back = (
    <div onClick={() => flip()}>
      <img
        className="fotoPerfil"
        alt="..."
        src="https://firebasestorage.googleapis.com/v0/b/ultraweb-ec96d.appspot.com/o/daniel.png?alt=media&token=33aaeed7-e19a-42ba-bbfc-c39ab3b46bd0"
      />
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
    <div onClick={() => flip()} className="h-100 contenedor">
      <h2 className="pt-3 pb-0">Robelto Tavarez</h2>
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

  const back = (
    <div onClick={() => flip()}>
      <img
        className="fotoPerfil"
        alt="..."
        src="https://firebasestorage.googleapis.com/v0/b/ultraweb-ec96d.appspot.com/o/lobelto.png?alt=media&token=6dec48d3-cde5-483b-8ba5-21f201bb8018"
      />
    </div>
  );

  return (
    <div>
      <FlipCard isFlipped={isFlipped} front={front} back={back} />
    </div>
  );
};
