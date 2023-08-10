import "./navegacion.css";
import { Link } from "react-router-dom";
import {
  CATALOGOSERVICIOS,
  CONTACTO,
  HOME,
  LOGIN,
  ListComentarios,
  ListPromociones,
  ListTrabajos,
} from "../../config/router/paths";
// import iconMenu from "../../assets/icons/iconMenu.png"



export const Navegacion = () => {
  

  return (
    <>
      <nav className="container-nav">
        {/* <input type="checkbox"/>
        <label htmlFor="check" className="bar-btn"></label> */}
        <Link className="nav-links" to={HOME}>
          Inicio
        </Link>
        <Link className="nav-links" to={ListPromociones}>
          Promociones
        </Link>
        <Link className="nav-links" to={CATALOGOSERVICIOS}>
          Catalogo de servicios
        </Link>
        <Link className="nav-links" to={ListTrabajos}>
          ¿Buscas empleo?
        </Link>
        <Link className="nav-links" to={ListComentarios}>
          Comentarios
        </Link>
        <Link className="nav-links" to={CONTACTO}>
          Contacto
        </Link>
        <Link className="nav-links" to={LOGIN}>
          Admin
        </Link>
      </nav>
    </>
  );
};
