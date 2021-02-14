import { React, useRef, useState } from "react";
import { useFirebaseApp } from "reactfire";
import { Form, FormGroup } from "reactstrap";

export const Contactanos = () => {

  const [ alerta, setAlerta ] = useState("#3c99c5");
  const [ contactName, setContactName ] = useState("Contact Form");

  const nombre = useRef();
  const correo = useRef();
  const mensaje = useRef();

  const firebase = useFirebaseApp();
  const database = firebase.firestore();

  const clearFields = () => {
    nombre.current.value = ""
    correo.current.value = ""
    mensaje.current.value = ""
  }

  const getDatos = () => {
    const datos = {
      nombre: nombre.current.value,
      correo: correo.current.value,
      mensaje: mensaje.current.value
    }
    if(nombre.current.value === "" ||
    correo.current.value === "" ||
    mensaje.current.value === ""){
      cambiarColor("#da0606", "#3c99c5", "Error", "Contac Form" )
    } else {
      database.collection("UsersMessages").doc(datos.nombre).set({
        Mensajes: datos
      })
      .then(() => {
        clearFields()
        cambiarColor("#1fda06", "#3c99c5", "Enviado", "Contact Form")
      })
      .catch((e) => console.log(e, "Ocurrio un error al guardar"))
    }
  }

  const cambiarColor = (iColor, fColor, iMessage, fMessage) => {
    setAlerta(iColor)
    setContactName(iMessage)
    setTimeout(() => {
      setContactName(fMessage)
      setAlerta(fColor)
    }, 1000)
  }

  return (
    <Form className="row mx-auto justify-content-center contactanos">
      <div className="col-md-4 col-10">
        <div className="border row contactForm justify-content-center">
          <h2 className="p-5 col-12 text-white recuadro" style={{ backgroundColor: alerta }}>{contactName}</h2>
          <FormGroup row className="mt-4 col-10">
            <input className="form-control form-control-lg" ref={nombre} type="text" placeholder="Nombre completo" />
          </FormGroup>
          <FormGroup row className="col-10">
            <input className="form-control form-control-lg" ref={correo} type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup row className="col-10">
            <textarea rows="4" className="form-control form-control-lg textarea" ref={mensaje} type="textarea" placeholder="Mensaje" />
          </FormGroup>
          <FormGroup row className="col-10 justify-content-center">
            <a href="#." onClick={() => getDatos()} className="btn btn-outline-info w-50 py-md-2 py-4 my-3">Aceptar</a>
          </FormGroup>
        </div>
      </div>
    </Form>
  );
};
