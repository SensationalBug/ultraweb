import { React, useState } from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faServer,
  faHdd,
} from "@fortawesome/free-solid-svg-icons";

export const Card = () => {
  const [modalWindow1, setmodalWindow1] = useState(false);
  const [modalWindow2, setmodalWindow2] = useState(false);
  const [modalWindow3, setmodalWindow3] = useState(false);

  const [tooltipRegistroOpen, setTooltipRegistroOpen] = useState(false);
  const [tooltipVersionesOpen, setTooltipVersionesOpen] = useState(false);
  const [tooltipParchesOpen, setTooltipParchesOpen] = useState(false);

  const [tooltipSeoOpen, setTooltipSeoOpen] = useState(false);
  const [tooltipAnaliticaOpen, setTooltipAnaliticaOpen] = useState(false);
  const [tooltipMigracionOpen, setTooltipMigracionOpen] = useState(false);

  const toggle = (toolipOption, setToolTipOption = Boolean) =>
    setToolTipOption(!toolipOption);

  const openModal = (modalWindowSelection, setmodalWindowSelection = Boolean) =>
    setmodalWindowSelection(!modalWindowSelection);

  return (
    <div className="cards">
      <button
        className="btn btn-secondary p-5 rounded-circle boton"
        onClick={() => openModal(modalWindow1, setmodalWindow1)}
      >
        <FontAwesomeIcon icon={faHdd} size="4x" />
        <p className="h3">Products</p>
      </button>

      <button
        className="btn btn-info p-5 rounded-circle boton"
        onClick={() => openModal(modalWindow2, setmodalWindow2)}
      >
        <FontAwesomeIcon icon={faServer} size="4x" />
        <p className="h3">Services</p>
      </button>

      <button
        className="btn btn-danger p-5 rounded-circle boton"
        onClick={() => openModal(modalWindow3, setmodalWindow3)}
      >
        <FontAwesomeIcon icon={faMoneyBillAlt} size="4x" />
        <p className="h3">Pricing$</p>
      </button>

      <Modal isOpen={modalWindow1} centered>
        <ModalHeader>
          <span className="h2">Products</span>
        </ModalHeader>
        <ModalBody>
          <div className="row jusitfy-content-center">
            <div className="col text-justify pr-5">
              <ul>
                <li>
                  <strong className="h3">Sitio Web</strong>
                  <p>
                    Un sitio web (también escrito como{" "}
                    <strong>sitio web</strong>) es una colección de páginas web
                    y contenido relacionado que se identifica mediante un nombre
                    de dominio común y se publica en al menos un servidor web.
                    Ejemplos notables es esta misma página donde estas
                    navegando.
                  </p>
                </li>
                <li>
                  <strong className="h3">Web apps</strong>
                </li>
                <p>
                  Una aplicación web (o <strong>web app</strong>) es un software
                  de aplicación que se ejecuta en un servidor web,a diferencia
                  de los programas de software basados en equipos que se
                  ejecutan localmente en el sistema operativo (SO) del
                  dispositivo.
                </p>
              </ul>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary w-100"
            onClick={() => openModal(modalWindow1, setmodalWindow1)}
            type="button"
          >
            Close
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalWindow2} centered>
        <ModalHeader>
          <span className="h2">Services</span>
        </ModalHeader>
        <ModalBody>
          <div className="row jusitfy-content-center pr-md-4 px-0">
            <div className="col-md-6 col-5">
              <ul>
                <li className="pb-4">
                  <strong className="h5">Hosting</strong>
                  <a
                    className="btn btn-outline-warning w-100 py-0 mt-3"
                    href="https://www.bluehost.com/"
                    target="new blank"
                  >
                    BlueHost
                  </a>
                  <a
                    className="btn btn-outline-warning w-100 my-3 py-0"
                    href="https://www.hostinger.es/"
                    target="new blank"
                  >
                    Hostinger
                  </a>
                  <a
                    className="btn btn-outline-warning w-100 py-0"
                    href="https://es.siteground.com/"
                    target="new blank"
                  >
                    SiteGround
                  </a>
                </li>
                <li className="webStorage">
                  <strong className="h5">Web storage</strong>
                  <a
                    className="btn btn-outline-info w-100 py-0 mt-3"
                    href="https://www.mega.nz/"
                    target="new blank"
                  >
                    MEGA
                  </a>
                  <a
                    className="btn btn-outline-info w-100 my-3 py-0"
                    href="https://www.microsoft.com/es-es/microsoft-365/onedrive/online-cloud-storage"
                    target="new blank"
                  >
                    Onedrive
                  </a>
                  <a
                    className="btn btn-outline-info w-100 py-0"
                    href="https://drive.google.com/"
                    target="new blank"
                  >
                    G-drive
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="pb-4">
                  <strong className="h5">Upgrading</strong>
                  <span
                    className="btn btn-outline-success w-100 py-0 mt-3"
                    id="registros"
                  >
                    Registros
                  </span>
                  <div>
                    <Tooltip
                      trigger="click"
                      placement="bottom"
                      isOpen={tooltipRegistroOpen}
                      autohide={false}
                      target="registros"
                      toggle={() =>
                        toggle(tooltipRegistroOpen, setTooltipRegistroOpen)
                      }
                    >
                      <p className="text-justify px-2">
                        Los sitios web crean un registro de todas las
                        solicitudes que reciben. Su uso más habitual suele ser
                        obtener estadísticas de uso, del tráfico web, pero
                        también nos puede servir para detectar intentos de
                        acceso fraudulentos.
                      </p>
                    </Tooltip>
                  </div>
                  <span
                    className="btn btn-outline-success w-100 my-3 py-0"
                    id="versiones"
                  >
                    Versiones
                  </span>
                  <div>
                    <Tooltip
                      trigger="click"
                      placement="bottom"
                      isOpen={tooltipVersionesOpen}
                      autohide={false}
                      target="versiones"
                      toggle={() =>
                        toggle(tooltipVersionesOpen, setTooltipVersionesOpen)
                      }
                    >
                      <p className="text-justify px-2">
                        En otras ocasiones las versiones de software utilizadas
                        finalizan su vida (ya no tienen soporte técnico) y deben
                        ser sustituidas por nuevas versiones. Por ejemplo, en el
                        momento de escribir este artículo, las versiones 5.3,
                        5.4 y 5.5 de PHP están obsoletas y ya no reciben soporte
                        técnico. A pesar de ello existen muchos sitios web que
                        todavía las utilizan.
                      </p>
                    </Tooltip>
                  </div>
                  <span
                    className="btn btn-outline-success w-100 py-0"
                    id="parches"
                  >
                    Parches
                  </span>
                  <div>
                    <Tooltip
                      trigger="click"
                      placement="bottom"
                      isOpen={tooltipParchesOpen}
                      autohide={false}
                      target="parches"
                      toggle={() =>
                        toggle(tooltipParchesOpen, setTooltipParchesOpen)
                      }
                    >
                      <p className="text-justify px-2">
                        Además de los problemas del servidor (por ejemplo el
                        sistema operativo) pueden descubrirse problemas de
                        seguridad o rendimiento en el software utilizado por el
                        sitio web (Apache, IIS, ASP.net, WordPress, PHP, etc.).
                        En estos casos también hay que aplicar parches de
                        seguridad lo antes posible.
                      </p>
                    </Tooltip>
                  </div>
                </li>
                <li>
                  <strong className="h5">Maintenance</strong>
                  <span
                    className="btn btn-outline-danger w-100 py-0 mt-3"
                    id="seo"
                  >
                    Pos. web (SEO)
                  </span>
                  <div>
                    <Tooltip
                      trigger="click"
                      placement="bottom"
                      isOpen={tooltipSeoOpen}
                      autohide={false}
                      target="seo"
                      toggle={() => toggle(tooltipSeoOpen, setTooltipSeoOpen)}
                    >
                      <p className="text-justify px-2">
                        Necesitamos que cuando alguien utiliza un buscador con
                        términos relacionados con nuestro negocio aparezcamos en
                        la primera o primeras posiciones de los resultados de
                        búsqueda. Que esto sea así depende de nuestra estrategia
                        de posicionamiento y de nuestra competencia.
                      </p>
                    </Tooltip>
                  </div>
                  <span
                    className="btn btn-outline-danger w-100 my-3 py-0"
                    id="analitica"
                  >
                    Analítica web
                  </span>
                  <div>
                    <Tooltip
                      trigger="click"
                      placement="bottom"
                      isOpen={tooltipAnaliticaOpen}
                      autohide={false}
                      target="analitica"
                      toggle={() =>
                        toggle(tooltipAnaliticaOpen, setTooltipAnaliticaOpen)
                      }
                    >
                      <p className="text-justify px-2">
                        Se trata de conocer información relevante sobre quién y
                        cómo se utiliza nuestro sitio web. Un sitio web debe
                        estar en constante evolución, y las decisiones que
                        tomemos deberán estar basadas en datos fiables. Muchas
                        veces lo que nosotros percibimos como lo mejor para
                        nuestro sitio web no es lo mismo que piensan nuestros
                        clientes.
                      </p>
                    </Tooltip>
                  </div>
                  <span
                    className="btn btn-outline-danger w-100 py-0"
                    id="migracion"
                  >
                    Migración web
                  </span>
                  <div>
                    <Tooltip
                      trigger="click"
                      placement="bottom"
                      isOpen={tooltipMigracionOpen}
                      autohide={false}
                      target="migracion"
                      toggle={() =>
                        toggle(tooltipMigracionOpen, setTooltipMigracionOpen)
                      }
                    >
                      <p className="text-justify px-2">
                        Significa que todo el banco de datos del sitio web,
                        desde la imagenes, fotos, videos, archivos, correos
                        electrónicos, será cambiado para un nuevo lugar de
                        almacenamiento. Tú mismo puedes hacer ese cambio, pero
                        es necesario tener atención y seguir algunos pasos
                        básicos.
                      </p>
                    </Tooltip>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-info w-100"
            onClick={() => openModal(modalWindow2, setmodalWindow2)}
            type="button"
          >
            Close
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalWindow3} centered>
        <ModalHeader>
          <span className="">Esto es una ventana modal 3</span>
        </ModalHeader>
        <ModalBody>
          <h3 className="py-3">OYM</h3>
          <p className="text-justify">Alajusba</p>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger w-100"
            onClick={() => openModal(modalWindow3, setmodalWindow3)}
            type="button"
          >
            Close
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
