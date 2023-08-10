import "./serviciosDetails.css";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ServiciosContext } from "../../context/ServiciosContext";
import puntuacionServicio from "./puntuacionServicio";
import { CATALOGOSERVICIOS } from "../../config/router/paths";

const ServiciosDetail = () => {
  const { servicios } = useContext(ServiciosContext);
  let { servicioID } = useParams();
  const navigete = useNavigate()

  let servicioSeleccionado = servicios.find(
    (servicio) => servicio.id == servicioID
  );
  function openWhatsApp(servicio) {
    const number = 2411314735;
    const message = `Hola, me podrian proporcionar informacion sobre lo que ofreces de ${servicio}. Por favor.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  return (
    <>
      <div className="container-card-details">
        <div className="body-card-details">
          <div className="image-service-details">
            <img src={servicioSeleccionado.image} alt="" />
          </div>
          <div className="text-service-details">
            <p style={{ color: "black" }}>
              {servicioSeleccionado.recomendado
                ? "Recomendado"
                : "No recomendado"}
            </p>
            <p style={{ color: "black" }}>
              {`Servicios de ${servicioSeleccionado.nombre}`}
            </p>
            <div className="puntuacion-service">
              <img
                style={{ height: "20px", width: "20px" }}
                src={puntuacionServicio.star}
                alt=""
              />
              <img
                style={{ height: "20px", width: "20px" }}
                src={puntuacionServicio.star}
                alt=""
              />
              <img
                style={{ height: "20px", width: "20px" }}
                src={puntuacionServicio.star}
                alt=""
              />
              <img
                style={{ height: "20px", width: "20px" }}
                src={puntuacionServicio.star}
                alt=""
              />
            </div>

            <div className="lista-servicios">
              {servicioSeleccionado.servicios.map((servicio) => (
                <ol key={servicio}>
                  <li style={{ color: "black" }}>{`✅${servicio}`}</li>
                </ol>
              ))}
            </div>
            <div className="btns-details">
            <Button
              onClick={() => openWhatsApp(servicioSeleccionado.nombre)}
              variant="primary"
              
            >
              Me interesa
            </Button>
            <Button variant="primary" onClick={()=>{
              navigete(CATALOGOSERVICIOS)
            }}>Regresar</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiciosDetail;
