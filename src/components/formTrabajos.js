import "../styles/agregarTrabajos.css";
import { useState, useRef, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Boton } from "./Buttons/Button";
import { useNavigate } from "react-router-dom";
import { TrabajosContext } from "../context/TrabajosContext";
export const FormTrabajos = ({ titulo }) => {
  const {
    trabajosData,
    setTrabajosData,
    listTrabajosData,
    setListTrabajosData,
  } = useContext(TrabajosContext);
  const [addExit, setAddExit] = useState(false);
  const [addError, setAddError] = useState(false);
  const [deleteJobExit, setDeleteJobExit] = useState(false);
  const [deleteJobError, setDeleteJobError] = useState(false);
  const [modalViewJobs, setModalViewJobs] = useState(false);
  const FormTrabajos = useRef();
  const imagenTrabajoValue = useRef();
  const tituloTrabajoValue = useRef();
  const descripcionTrabajoValue = useRef();
  const navigete = useNavigate();
  const resetInputs = () => {
    const inputs = Array.from(FormTrabajos.current.children).filter(
      (element) => element.tagName === "INPUT"
    );
    /*se recorre el arreglo y se le indica que el valor de cada input sera igual a una cadena vacia*/
    inputs.forEach((e) => (e.value = ""));
  };
  const selectFile = (e) => {
    /*se obtiene la imagen seleccionada mediante la propiedad target.files[0]*/
    const image = e.target.files[0];
    /*se valida que la imagen seleccionada sea del tipo image/ para asegurarse de que se esta cargando unicamente una imagen, si la imagen es valida se crea una URL temporal con el metodo URL.createObjectURL(image) y se actualiza el estado de la variable en setImagen con la url temporal generada, que se utilizara para posteriormente mostrar la imagen en el componente Promociones.js*/
    if (image.type.startsWith("image/")) {
      setTrabajosData({ ...trabajosData, imagen: URL.createObjectURL(image) });
    }
  };

  const insertJob = () => {
    if (
      imagenTrabajoValue.current.files &&
      tituloTrabajoValue.current.value &&
      descripcionTrabajoValue.current.value
    ) {
      let newTrabajo = {
        id: listTrabajosData.length,
        imagen: trabajosData.imagen,
        name: trabajosData.name,
        descripcion: trabajosData.descripcion,
      };
      setListTrabajosData([...listTrabajosData, newTrabajo]);
     

      setAddExit(true);
      resetInputs();
      descripcionTrabajoValue.current.value = "";
    } else {
      setAddError(true);
    }
  };

  const openModalViewJobs = () => {
    setModalViewJobs(true);
  };

  const deleteJobs = () => {
    if (trabajosData.length > 0) {
      setListTrabajosData([]);
      setDeleteJobExit(true);
    } else {
      setDeleteJobError(true);
    }
  };
  const deleteJob = (id) => {
    setListTrabajosData(
      listTrabajosData.filter((trabajos) => trabajos.id !== id)
    );
  };

  return (
    <div className="container-trabajos">
      <div className="modals">
        <Modal show={addExit} onHide={() => setAddExit(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "green" }}>Correcto!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tu vacantes se agrego y la podran ver tus clientes
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setAddExit(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={addError} onHide={() => setAddError(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Algo salio mal, porfavor verifica todos los campos!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setAddError(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={deleteJobExit} onHide={() => setDeleteJobExit(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "green" }}>Exito!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Se borraron todas las vacantes correctamente!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setDeleteJobExit(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={deleteJobError} onHide={() => setDeleteJobError(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Algo salio mal, no tienes ninguna vacante para eliminar!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setDeleteJobError(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          fullscreen={true}
          size="lg"
          show={modalViewJobs}
          onHide={() => setModalViewJobs(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "blue" }}>Tus vacantes:</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display: "flex", flexWrap: "wrap" }}>
            {listTrabajosData.length > 0 ? (
              listTrabajosData.map((trabajo) => {
                return (
                  <div
                    className="card"
                    style={{ width: "18rem" }}
                    key={trabajo.id}
                  >
                    <img className="card-img-top img" src={trabajo.imagen} />
                    <div className="card-body">
                      <p  style={{color:"black",fontFamily:"sans-serif"}}>{trabajo.name}</p>
                      <p style={{color:"black",fontFamily:"monospace"}}>{trabajo.descripcion}</p>

                      {/*cuando se presiona el boton, se actualiza la variable de estado listPromociones, que es el arreglo donde se guardan las promociones, cuando ocurre el onClick se ejecuta la funcion deletePromotion, que basicamente es que en el arreglo listPromociones solo se mantienen las promociones que por su id sea diferente al id que se esta iterando*/}
                      <Button onClick={() => deleteJob(trabajo.id)}>
                        Eliminar trabajo
                      </Button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 style={{ color: "black" }}>No tienes ninguna vacante</h1>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setModalViewJobs(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <h1 style={{fontFamily:"sans-serif"}}>{titulo}</h1>
      <div ref={FormTrabajos} className="agregar-trabajo">
        <label htmlFor="imagen">Añade una imagen:</label>
        <input
          ref={imagenTrabajoValue}
          onChange={selectFile}
          type="file"
          id="imagen"
          className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100 border-b-2 border-blue-700 border-t-0 border-r-0 border-l-0"
        />
        <label htmlFor="trabajo">Trabajo:</label>
        <input
          ref={tituloTrabajoValue}
          type="text"
          id="trabajo"
          onChange={(e) =>
            setTrabajosData({ ...trabajosData, name: e.target.value })
          }
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <label htmlFor="descripcion">Descripcion:</label>
        <textarea
          ref={descripcionTrabajoValue}
          id="descripcion"
          cols="30"
          rows="10"
          onChange={(e) =>
            setTrabajosData({ ...trabajosData, descripcion: e.target.value })
          }
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        ></textarea>
        <Boton color="primary" texto="insertar vacante" click={insertJob} />
        <Boton
          color="primary"
          texto="visualizar vacantes"
          click={openModalViewJobs}
        />
        <Boton color="primary" texto="eliminar vacantes" click={deleteJobs} />
      </div>
    </div>
  );
};
