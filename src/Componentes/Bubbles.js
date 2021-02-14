import { React, useState } from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
  Collapse,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faServer,
  faHdd,
  faPlus,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

export const Bubbles = () => {
  const [modalWindow1, setmodalWindow1] = useState(false);
  const [modalWindow2, setmodalWindow2] = useState(false);
  const [modalWindow3, setmodalWindow3] = useState(false);

  const [tooltipRegistroOpen, setTooltipRegistroOpen] = useState(false);
  const [tooltipVersionesOpen, setTooltipVersionesOpen] = useState(false);
  const [tooltipParchesOpen, setTooltipParchesOpen] = useState(false);
  const [tooltipSeoOpen, setTooltipSeoOpen] = useState(false);
  const [tooltipAnaliticaOpen, setTooltipAnaliticaOpen] = useState(false);
  const [tooltipMigracionOpen, setTooltipMigracionOpen] = useState(false);

  const [collapseValue, setCollapseValue] = useState(false);

  const [princingToolTip, setPrincinToolTip] = useState(false);

  const [onePage, setOnePage] = useState(false);
  const [webS, setWebS] = useState(false);
  const [WebA, setWebA] = useState(false);
  const [tiendaOnline, setTiendaOnline] = useState(false);

  const openModal = (modalWindowSelection, setmodalWindowSelection = Boolean) =>
    setmodalWindowSelection(!modalWindowSelection);

  const toggle = (toolipOption, setToolTipOption = Boolean) =>
    setToolTipOption(!toolipOption);

  const openCollapse = (prevState, NextState) => NextState(!prevState);

  return (
    <div className="bubbles">
      <button
        className="btn btn-info text-white p-5 rounded-circle boton"
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
        className="btn btn-info p-5 rounded-circle boton"
        onClick={() => openModal(modalWindow3, setmodalWindow3)}
      >
        <FontAwesomeIcon icon={faMoneyBillAlt} size="4x" />
        <p className="h3">Pricing$</p>
      </button>

      <Modal isOpen={modalWindow1} centered>
        <ModalHeader className="bg-info text-white justify-content-center">
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
        <ModalFooter
          className="btn btn-info text-white w-100 justify-content-center"
          onClick={() => openModal(modalWindow1, setmodalWindow1)}
        >
          <h4>Close</h4>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalWindow2} centered>
        <ModalHeader className="bg-info text-white justify-content-center">
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
        <ModalFooter
          className="btn btn-info w-100 justify-content-center"
          onClick={() => openModal(modalWindow2, setmodalWindow2)}
        >
          <h3>Close</h3>
        </ModalFooter>
      </Modal>

      <Modal className="modal-xl" isOpen={modalWindow3} centered>
        <ModalHeader className="bg-info text-white justify-content-center">
          <span className="h2">
            Pricing
            <FontAwesomeIcon
              className="ml-3 pt-1"
              icon={faEllipsisV}
              id="pricing"
            />
            <Tooltip
            className="text-justify"
              placement="right"
              isOpen={princingToolTip}
              target="pricing"
              toggle={() => toggle(princingToolTip, setPrincinToolTip)}
            >
              <p className="h6 mb-3">Todas las Webs incluyen:</p>
              <li className="text-left">Dominio (.com) por 1 año</li>
              <li className="text-left">Hosting por 1 año</li>
              <li className="text-left">Certificado SSL</li>
              <p className="mt-3 text-justify">
                Para ver los precios presione en el nombre de la Web que desea
              </p>
            </Tooltip>
          </span>
          <button
            className="btn btn-dark closeButton"
            onClick={() => openCollapse(collapseValue, setCollapseValue)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </ModalHeader>
        <ModalBody className="modalBody">
          <div className="row justify-content-center">
            <div className="col-md-3 col-6 text-center">
              <h4
                className="text-white bg-info rounded"
                onClick={() => openCollapse(onePage, setOnePage)}
              >
                OnePage
              </h4>
              <Collapse isOpen={onePage} className="my-2">
                <span className="border border-info rounded px-2">RD$8,000</span>
              </Collapse>
              <Collapse isOpen={collapseValue}>
                <ListGroup className=" py-1">
                  <ListGroupItem className="py-2">4 Secciones.</ListGroupItem>
                  <ListGroupItem className="py-2">
                    Redes Sociales.
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    Soporte técnico.
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    Form de Contacto.
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    Diseño Responsive.
                  </ListGroupItem>
                </ListGroup>
              </Collapse>
            </div>
            <div className="col-md-3 col-6 text-center ">
              <h4
                className="text-white bg-info rounded"
                onClick={() => openCollapse(webS, setWebS)}
              >
                Web Sencilla
              </h4>
              <Collapse isOpen={webS} className="my-2">
                <span className="border border-info rounded px-2">RD$10,000</span>
              </Collapse>
              <Collapse isOpen={collapseValue}>
                <ListGroup className="py-2">
                  <ListGroupItem className="py-1">Blog.</ListGroupItem>
                  <ListGroupItem className="py-2">5 Secciones.</ListGroupItem>
                  <ListGroupItem className="py-2">
                    Redes Sociales.
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    Soporte técnico.
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    Form de Contacto.
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    Diseño Responsive.
                  </ListGroupItem>
                </ListGroup>
              </Collapse>
            </div>
            <div className="col-md-3 col-6 text-center ">
              <h4
                className="text-white bg-info rounded"
                onClick={() => openCollapse(WebA, setWebA)}
              >
                Web Avanzada
              </h4>
              <Collapse isOpen={WebA} className="my-2">
                <span className="border border-info rounded px-2">RD$13,000</span>
              </Collapse>
              <Collapse isOpen={collapseValue}>
                <ListGroup className="py-1">
                  <ListGroupItem className="py-2">Blog</ListGroupItem>
                  <ListGroupItem className="py-2">10 Secciones.</ListGroupItem>
                  <ListGroupItem className="py-2">
                    Soporte técnico.
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    Form de Contacto.
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    Botón de WhatsApp.
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    Diseño Responsive.
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    Enlace a Redes Sociales.
                  </ListGroupItem>
                </ListGroup>
              </Collapse>
            </div>
            <div className="col-md-3 col-6 text-center ">
              <h4
                className="text-white bg-info rounded"
                onClick={() => openCollapse(tiendaOnline, setTiendaOnline)}
              >
                Tienda Online
              </h4>
              <Collapse isOpen={tiendaOnline} className="my-2">
                <span className="border border-info rounded px-2">RD$15,000</span>
              </Collapse>
              <Collapse isOpen={collapseValue}>
                <ListGroup className="py-1">
                  <ListGroupItem className="py-2">Categorías.</ListGroupItem>
                  <ListGroupItem className="py-1">
                    Soporte técnico.
                  </ListGroupItem>
                  <ListGroupItem className="py-1">
                    Métodos de pago.
                  </ListGroupItem>
                  <ListGroupItem className="py-1">
                    Form de Contacto.
                  </ListGroupItem>
                  <ListGroupItem className="py-1">
                    Botón de WhatsApp.
                  </ListGroupItem>
                  <ListGroupItem className="py-1">
                    Diseño Responsive.
                  </ListGroupItem>
                  <ListGroupItem className="py-1">
                    1 Correo corporativos.
                  </ListGroupItem>
                  <ListGroupItem className="py-1">
                    5 Páginas de Contenido.
                  </ListGroupItem>
                  <ListGroupItem className="py-1">
                    Enlace a Redes Sociales.
                  </ListGroupItem>
                </ListGroup>
              </Collapse>
            </div>
          </div>
        </ModalBody>
        <ModalFooter
          className="btn btn-info w-100 justify-content-center"
          onClick={() => openModal(modalWindow3, setmodalWindow3)}
        >
          <h3>Close</h3>
        </ModalFooter>
      </Modal>
    </div>
  );
};
