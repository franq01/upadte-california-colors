import { useState, useRef } from "react";
import "./reseñas.css";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { ResenasContext } from "../../context/ReseñasContext";
import rudeWords from "../../utils/rudeWords";

export const Reseñas = () => {
  const [viewModalExit, setViewModalExit] = useState(false);
  const [viewModalError, setViewModalError] = useState(false);
  const inputComentario = useRef();
  const { comentario, setComentario, listComentarios, setListComentarios } =
    useContext(ResenasContext);

  /*se recorre el arreglo*/
  const comentariosRender = listComentarios.map((comentario, index) => {
    return (
      <div key={index} className="cards-comentarios">
        <div className="card">{comentario}</div>
      </div>
    );
  });

  return (
    <>
      <Navegacion />
      <div className="container-modals">
        <Modal show={viewModalExit} onHide={() => setViewModalExit(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "green" }}>¡Gracias!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Gracias por tu comentario, nos ayudas mucho opinando!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setViewModalExit(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={viewModalError} onHide={() => setViewModalError(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>¡Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Ocurrio un error, verifica que hayas llenado todos los campos
            porfavor o que tu contenido no sea ofensivo!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setViewModalError(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="container-comentarios" id="comentarios">
        {listComentarios.length === 0 ? (
          <h1 style={{ color: "black" }}>Comentarios</h1>
        ) : (
          comentariosRender
        )}
        <div className="formulario-comentarios">
          <input
            type="text"
            ref={inputComentario}
            onChange={(e) => setComentario(e.target.value)}
            className="input-comentarios"
            placeholder="Ingresa tu comentario"
          />
          <button
            className="btn-insert-comment"
            onClick={() => {
              if (
                inputComentario.current.value ==
                  rudeWords.getWord1.toLocaleLowerCase() ||
                inputComentario.current.value ==
                  rudeWords.getWord2.toLocaleLowerCase() ||
                inputComentario.current.value ==
                  rudeWords.getWord3.toLocaleLowerCase() ||
                inputComentario.current.value ==
                  rudeWords.getWord4.toLocaleLowerCase() ||
                inputComentario.current.value ==
                  rudeWords.getWord5.toLocaleLowerCase() ||
                inputComentario.current.value ==
                  rudeWords.getWord6.toLocaleLowerCase()
              ) {
                setViewModalError(true);
                inputComentario.current.value = "";
              } else {
                /*se crea un nuevo arreglo con los elementos del anterior y se le agrega un nuevo valor (comentario)*/
                setListComentarios([...listComentarios, comentario]);
                setViewModalExit(true);
              }
            }}
          >
            Insertar comentario
          </button>
        </div>
      </div>
    </>
  );
};
