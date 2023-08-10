import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "../../context/UserContext";
import { ViewAdmin } from "../../layouts/viewAdmin";
import {
  CATALOGOSERVICIOS,
  CONTACTO,
  HOME,
  LOGIN,
  ListPromociones,
  PageAdmin,
  ListTrabajos,
  ListComentarios,
  SERVICIOID,
} from "./paths";
import { Home } from "../../pages/Home/Home";
import { Promociones } from "../../pages/promociones/promociones";
import { Servicios } from "../../pages/servicios/Servicios";
import { Trabajos } from "../../pages/trabajos/trabajos";
import { Reseñas } from "../../pages/reseñas/Reseñas";
import { Contacto } from "../../pages/contacto/Contacto";
import { Login } from "../../pages/Login/Login";
import { PromocionesContextProvider } from "../../context/PromocionesContext";
import { TrabajosContextProvider } from "../../context/TrabajosContext";
import { ServiciosContextProvider } from "../../context/ServiciosContext";
import ServiciosDetail from "../../pages/serviciosDetails/ServiciosDetails";
import { ResenasContextProvider } from "../../context/ReseñasContext";

export const AppRouter = () => {
  return (
    /*el contexto PromocionesContext, el contexto userData y TrabajosContext estaran disponibles para cualquier ruta que quiera usar sus valores, ya que las rutas estan envueltas dentro de estos contextos*/
    <UserContextProvider>
      <PromocionesContextProvider>
        <TrabajosContextProvider>
          <ResenasContextProvider>
          <ServiciosContextProvider>
            <Routes>
              <Route path={HOME} element={<Home />} />
              <Route path={ListPromociones} element={<Promociones />} />
              <Route path={CATALOGOSERVICIOS} element={<Servicios />} />
              <Route path={SERVICIOID} element={<ServiciosDetail />} />
              <Route path={ListTrabajos} element={<Trabajos />} />
              <Route path={ListComentarios} element={<Reseñas />} />
              <Route path={CONTACTO} element={<Contacto />} />

              <Route path={LOGIN} element={<Login />} />

              <Route path={PageAdmin} element={<ViewAdmin />} />
            </Routes>
          </ServiciosContextProvider>
            </ResenasContextProvider>
        </TrabajosContextProvider>
      </PromocionesContextProvider>
    </UserContextProvider>
  );
};
