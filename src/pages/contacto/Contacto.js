import { useRef, useState } from "react";
import "./contacto.css";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import iconoUbicacion from "../../assets/icons/marcador-de-posicion.png";
import iconoWhatsapp from "../../assets/icons/whatsapp (1).png";
import iconoFacebook from "../../assets/icons/facebook (1).png";

export const Contacto = () => {
  const [emailExit, setEmailExit] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const form = useRef();
  const nombre = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (nombre.current.value && email.current.value && message.current.value) {
      emailjs
        .sendForm(
          "service_9avnbwg",
          "template_thab00j",
          form.current,
          "YWx6lOh4WVjX0KXRT"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setEmailExit(true);
      setEmailError(false);
    } else {
      setEmailError(true);
      setEmailExit(false);
    }
  };

  return (
    <>
      <Navegacion />
      <div className="container-grid">
        <div className="container-ubicacion">
          <h2 style={{ color: "black" }}>Estamos ubicados en:</h2>
          <div className="container-direccion">
            <img src={iconoUbicacion} alt="" className="icono-ubicacion" />
            <p className="parrafo-direccion">
              Apizaco-Tlaxco 2828, Quinta Secc Col Agricola Dolores
            </p>
          </div>
          <div className="container-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.576381809349!2d-98.11603358985997!3d19.464119881746296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d01f40caf1043b%3A0x7129f0cd1a5adb6b!2sCALIFORNIA%20COLORS%20Hojalateria%20y%20Pintura!5e1!3m2!1ses!2smx!4v1687905932991!5m2!1ses!2smx"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mapa"
            ></iframe>
          </div>
          <div className="container-redes-sociales">
            <img
              src={iconoWhatsapp}
              alt=""
              onClick={() => {
                const phoneNumber = "2411314735";
                const message = "Hola, quisiera comunicarme con ustedes.";
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.location.href = url;
              }}
            />
            <img src={iconoFacebook} alt="" />
          </div>
        </div>
        <div className="formulario-contacto">
          <h2>Envianos tu mensaje</h2>
          <form
            className="body-formulario-contacto"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="input_name"
              type="text"
              ref={nombre}
              name="user_name"
              placeholder="Ingresa tu nombre"
            />
            <input
              ref={email}
              type="email"
              name="user_email"
              className="input_email"
              placeholder="Ingresa tu email"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              ref={message}
              placeholder="Ingresa tu mensaje"
            />
            <input type="submit" value="enviar" className="btn-submit" />
          </form>
        </div>
      </div>
      <div className="modals">
        <Modal show={emailExit} onHide={() => setEmailExit(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "green" }}>¡Gracias!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Gracias por tu mensaje, nos contactaremos contigo pronto!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setEmailExit(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={emailError} onHide={() => setEmailError(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>¡Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Algo salio mal, porfavor verifica si llenaste todos los campos
            correctamente!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setEmailError(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
