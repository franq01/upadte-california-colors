import "./servicios.css";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import { Carrusel } from "../../components/carrusel/carrusel";
import firstImageCarrusel from "../../assets/motor.jpg";
import secondImageCarrusel from "../../assets/kilometraje.jpg";
import thirdImageCarrusel from "../../assets/carroPexels.jpg";
import { useContext, useEffect, useState } from "react";
import { ServiciosContext } from "../../context/ServiciosContext";
import serviciosMecanica from "../../utils/serviciosMecanica";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Servicios = () => {
  const { servicios, setServicios } = useContext(ServiciosContext);
  const navigate = useNavigate();

  useEffect(() => {
    setServicios(serviciosMecanica);
  }, []);

  const searchService = (e) => {
    const filterProduct = serviciosMecanica.filter((servicio) => {
      return servicio.nombre.startsWith(e.target.value);
    });
    setServicios(filterProduct);
  };

  return (
    <>
      <Navegacion />
      <div className="container-carrusel">
        <Carrusel
          firstTitle="Ofrecemos los mejores servicios"
          secondTitle="De muy buena calidad"
          thirdTitle="Servicios excelentes"
          firstImage={firstImageCarrusel}
          secondImage={secondImageCarrusel}
          thirdImage={thirdImageCarrusel}
          redireccion="#servicios"
          textoRedireccion="Ver"
        />
      </div>
      <div className="container-input-search-service">
        <div className="input-search">
          <input
            type="text"
            placeholder="Busca un servicio"
            onChange={searchService}
          />
        </div>
      </div>
      <div id="servicios" className="container-card-services">
        {servicios.map((servicio) => (
          <div className="body-card-services" key={servicio.id}>
            <img src={servicio.image} alt="imagen" />
            <h2>{servicio.nombre}</h2>
            <Button
              variant="primary"
              onClick={() => {
                navigate(`/servicios/${servicio.id}`);
              }}
            >
              Detalles
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};
