import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { HOME, PageAdmin } from "../config/router/paths";
import "bootstrap/dist/css/bootstrap.min.css";
import "../admin.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function FormAdmin() {
  const [modalLoginError, setModalLoginError] = useState(false);
  /*Este componente puede hacer uso de las variables de estado que se definieron dentro del contexto UserContext*/
  const { userData, setUserData } = useContext(UserContext);

  /*se crea una referencia del hook useNavigete */
  const navigate = useNavigate();
  const handleUsuario = (e) => {
    /*se utiliza el ... para actualizar las propiedades individuales del objeto userData sin modificar ls otras propiedades. */
    setUserData({ ...userData, nombre: e.target.value });
  };
  const handlePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    if (
      userData.nombre === "CalColors" &&
      userData.password === "CalColors04"
    ) {
      navigate(PageAdmin);
    } else {
      setModalLoginError(true);
    }
  };
  return (
    <>
      <div className="container-modalLogin">
        <Modal show={modalLoginError} onHide={() => setModalLoginError(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Verifica todos tus campos!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setModalLoginError(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="night">
        <div className="surface"></div>
        <div className="car"></div>
        <section>
          <div className="form-box">
            <div className="form-value">
              <form action="">
                <h2 style={{ color: "white" }}>Login</h2>
                <div className="inputbox">
                  <ion-icon name="mail-outline"></ion-icon>
                  <input onChange={handleUsuario} type="" required />

                  <label for="">Usuario</label>
                </div>
                <div className="inputbox">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <input onChange={handlePassword} type="password" required />
                  <label for="">contraseña</label>
                </div>

                <button onClick={login}>Iniciar sesion</button>
                <div className="register">
                  <p></p>
                </div>
              </form>
              <button
                onClick={() => {
                  navigate(HOME);
                }}
              >
                inicio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
