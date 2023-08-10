import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
export const Cards = ({ imagenServicio, servicio, descripcion, funcion }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top img"
        src={imagenServicio}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{servicio}</h5>
        <p className="card-text">{descripcion}</p>
        <button className="btn-informacion" onClick={funcion}>
          Informacion
        </button>
      </div>
    </div>
  );
};

export const CardsServicios = ({ imagen, servicio, descripcion, refe }) => {
  return (
    <div className="catalogo-servicios">
      <div className="body-catalogo">
        <img src={imagen} alt="" />
        <h2>{servicio}</h2>
        <p>{descripcion}</p>
        <div className="btn-ver">
          <Link style={{ color: "white", textDecoration: "none" }} to={refe}>
            Ver
          </Link>
        </div>
      </div>
    </div>
  );
};
