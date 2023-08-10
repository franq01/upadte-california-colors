import "../../Promociones.css";
import { Carrusel } from "../../components/carrusel/carrusel";
import ImageAhorrar from "../../assets/imagenesCarrusel/ahorrar.jpg";
import ImageComprar from "../../assets/imagenesCarrusel/compras.jpg";
import ImageAuto from "../../assets/imagenesCarrusel/auto.jpg";
import { useContext } from "react";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import { PromocionesContext } from "../../context/PromocionesContext";
import { ListPromociones } from "./ListPromociones";

export const Promociones = () => {
  const { listPromociones } = useContext(PromocionesContext);

  return listPromociones.length > 0 ? (
    <>
      <Navegacion />
      <div className="container-carrusel">
        <Carrusel
          firstTitle="¡Ahorrate unos pesos!"
          secondTitle="Adquiere cualquier promocion"
          thirdTitle="Mejora tu auto"
          firstImage={ImageAhorrar}
          secondImage={ImageComprar}
          thirdImage={ImageAuto}
          redireccion="#promociones"
          textoRedireccion="Ver promociones"
        />
      </div>
      <div id="promociones" className="container-promociones">
        <ListPromociones />
      </div>
    </>
  ) : (
    <div className="no-promociones">
      <Navegacion />
      <div className="container-carrusel">
        <Carrusel
          firstTitle="¡Ahorrate unos pesos!"
          secondTitle="Adquiere cualquier promocion"
          thirdTitle="Mejora tu auto"
          firstImage={ImageAhorrar}
          secondImage={ImageComprar}
          thirdImage={ImageAuto}
          redireccion="#promociones"
          textoRedireccion="Ver promociones"
        />
      </div>
      <div
        id="promociones"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="text-promociones"
      >
        <div className="icon-error">
          <ion-icon
            style={{ color: "red" }}
            name="close-circle-outline"
          ></ion-icon>
        </div>
        <h1 style={{ color: "black", textAlign: "center" }}>
          ¡No hay promociones disponibles!
        </h1>
      </div>
    </div>
  );
};
