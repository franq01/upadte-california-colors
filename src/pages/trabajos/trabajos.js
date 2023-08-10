import "./renderTrabajos.css";
import { useContext, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import carruselImage1 from "../../assets/imagenesCarrusel/carrusel1.jpg";
import carruselImage2 from "../../assets/imagenesCarrusel/carrusel2.jpg";
import carruselImage3 from "../../assets/imagenesCarrusel/carrusel3.jpg";
import { Carrusel } from "../../components/carrusel/carrusel";
import { TrabajosContext } from "../../context/TrabajosContext";
import { ListTrabajos } from "./ListTrabajos";

export const Trabajos = () => {
  /*variable de estado definido dentro del context, es un array con datos acerca de los trabajos de la empresa*/
  const { listTrabajosData } = useContext(TrabajosContext);
  const [openChat, setOpenChat] = useState(false);
  const respuesta = useRef();

  const sendMessage = () => {
    setOpenChat(true);
  };

  return listTrabajosData.length > 0 ? (
    <>
      <Navegacion />
      <div className="container-empleos">
        <div className="modalChat">
          <Modal size="lg" show={openChat} onHide={() => setOpenChat(false)}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "green" }}>
                Bienvenido a nuestro bot en linea!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <>
                <p style={{ color: "black", textAlign: "center" }}>
                  Hola, en este chat automatico te brindamos informacion acerca
                  de nuestras vacantes
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  <p style={{ color: "black" }} ref={respuesta}></p>
                </div>
                <div
                  className="btn-preguntas-vacante"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  <Button
                    style={{ width: "300px" }}
                    variant="primary"
                    onClick={() => {
                      respuesta.current.innerHTML =
                        "Necesitas tu ine, comprobante de domicilio, carta de antecedentes no penales, ser te tetla o alrededores.";
                    }}
                  >
                    ¿Que requisitos necesito?
                  </Button>
                  <Button
                    style={{ width: "300px" }}
                    variant="primary"
                    onClick={() => {
                      respuesta.current.innerHTML =
                        "De preferencia minimo 1 año de experiencia, si no cuentas con la experiencia adecuada, ¡Nosotros te impulsamos!.";
                    }}
                  >
                    ¿Tengo que tener experiencia?
                  </Button>
                  <Button
                    style={{ width: "300px" }}
                    variant="primary"
                    onClick={() => {
                      respuesta.current.innerHTML =
                        "Estamos ubicados en: KM. 65 CARR.FEDERAL APIZACO-TLAXO (ENTRONQUE TETLA)";
                    }}
                  >
                    ¿Donde estan ubicados?
                  </Button>
                  <Button
                    style={{ width: "300px" }}
                    variant="primary"
                    onClick={() => {
                      respuesta.current.innerHTML =
                        "Puedes ponerte en contacto a los siguientes numeros: 241 110 74 47 o 241 131 47 32 a nombre de California Colors";
                    }}
                  >
                    Deseo contactarlos directamente
                  </Button>
                </div>
              </>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setOpenChat(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="container-carrusel">
          <Carrusel
            firstTitle="¿Buscas un empleo?"
            secondTitle="¡No esperes mas!"
            thirdTitle="Se de nuestro equipo"
            firstImage={carruselImage1}
            secondImage={carruselImage2}
            thirdImage={carruselImage3}
            redireccion="#trabajos"
            textoRedireccion="Ver vacantes"
          />
        </div>
        <h1 style={{ marginTop: "20px" }}>Vacantes:</h1>
        <div
          id="trabajos"
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
          className="empleo-disponible"
        >
          <ListTrabajos handleClick={sendMessage} />
        </div>
      </div>
    </>
  ) : (
    <>
      <Navegacion />
      <div className="container-carrusel">
        <Carrusel
          firstTitle="¿Buscas un empleo?"
          secondTitle="¡No esperes mas!"
          thirdTitle="Se de nuestro equipo"
          firstImage={carruselImage1}
          secondImage={carruselImage2}
          thirdImage={carruselImage3}
          redireccion="#trabajos"
          textoRedireccion="Ver vacantes"
        />
      </div>

      <div className="icon-error">
        <ion-icon name="close-circle-outline"></ion-icon>
      </div>
      <h1 id="trabajos" style={{ color: "black", textAlign: "center" }}>
        ¡Por el momento no hay vacantes disponibles!
      </h1>
    </>
  );
};
