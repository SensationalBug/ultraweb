import { React, useState } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faServer,
  faHdd,
} from "@fortawesome/free-solid-svg-icons";

export const Card = () => {
  const [modalWindow1 = false, setmodalWindow1] = useState();
  const [modalWindow2 = false, setmodalWindow2] = useState();
  const [modalWindow3 = false, setmodalWindow3] = useState();

  const openModal1 = () => {
    if (!modalWindow1) {
      setmodalWindow1(true);
    } else {
      setmodalWindow1(false);
    }
  };

  const openModal2 = () => {
    if (!modalWindow2) {
      setmodalWindow2(true);
    } else {
      setmodalWindow2(false);
    }
  };

  const openModal3 = () => {
    if (!modalWindow3) {
      setmodalWindow3(true);
    } else {
      setmodalWindow3(false);
    }
  };

  // Esto es para cerrar las modals desde cualquier lado
  // const toggle1 = () => setmodalWindow1(!modalWindow1);
  // const toggle2 = () => setmodalWindow2(!modalWindow2);
  // const toggle3 = () => setmodalWindow3(!modalWindow3);

  return (
    <div>
      <button
        className="btn btn-secondary p-5 m-5 rounded-circle"
        onClick={() => openModal1()}
      >
        <FontAwesomeIcon icon={faHdd} size="4x" />
        <p className="h3">Servicios</p>
      </button>
      <button
        className="btn btn-info p-5 m-5 rounded-circle"
        onClick={() => openModal2()}
      >
        <FontAwesomeIcon icon={faServer} size="4x" />
        <p className="h3">Servicios</p>
      </button>
      <button
        className="btn btn-danger p-5 m-5 rounded-circle"
        onClick={() => openModal3()}
      >
        <FontAwesomeIcon icon={faMoneyBillAlt} size="4x" />
        <p className="h3">Precios $</p>
      </button>

      <Modal isOpen={modalWindow1} centered>
        <ModalHeader>
          <h2>Esto es una ventana modal 1</h2>
        </ModalHeader>
        <ModalBody>
          <h3 className="py-3">OYM</h3>
          <p className="text-justify">Alajusba</p>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary w-100"
            onClick={() => openModal1()}
            type="button"
          >
            Close
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalWindow2} centered>
        <ModalHeader>
          <h2>Esto es una ventana modal 2</h2>
        </ModalHeader>
        <ModalBody>
          <h3 className="py-3">OYM</h3>
          <p className="text-justify">Alajusba</p>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-info w-100"
            onClick={() => openModal2()}
            type="button"
          >
            Close
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalWindow3} centered>
        <ModalHeader>
          <h2 className="">Esto es una ventana modal 3</h2>
        </ModalHeader>
        <ModalBody>
          <h3 className="py-3">OYM</h3>
          <p className="text-justify">Alajusba</p>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger w-100"
            onClick={() => openModal3()}
            type="button"
          >
            Close
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
