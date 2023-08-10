import { Navegacion } from "../../components/Navegacion/Navegacion";
import { Vision } from "../../layouts/viewVision";
import { Mision, Valores } from "../../layouts/viewMision";
import imageCalColors1 from "../../assets/imagenesCarrusel/CalColors1.jpeg";
import imageCalColors2 from "../../assets/imagenesCarrusel/CalColors2.jpeg";
import imageCalColors3 from "../../assets/imagenesCarrusel/CalColors3.jpeg";
import { Carrusel } from "../../components/carrusel/carrusel";
export const Home = () => {
  return (
    <>
      <Navegacion />

      <div className="container-carrusel">
        <Carrusel
          firstTitle="Conocenos"
          secondTitle="Tu mejor opcion"
          thirdTitle="De confianza"
          firstImage={imageCalColors1}
          secondImage={imageCalColors2}
          thirdImage={imageCalColors3}
          redireccion="#nosotros"
          textoRedireccion="Explorar"
        />
      </div>
      <div id="nosotros">
        <Vision
          imagen={<ion-icon name="eye-outline"></ion-icon>}
          vision="Nuestra vision"
          texto="Posicionarnos como empresa lider en el ramo para seguir atendiendo las necesidades del cliente con la calidad, capacidad y cumplimiento oportuno que siempre nos a caracterizado, enfrentnando retos a traves de metodos innovadores, reconocida por la satisfaccion del cliente."
        />
        <Mision
          imagen={<ion-icon name="rocket-outline"></ion-icon>}
          mision="Nuestra mision"
          texto="Ofrecer servicios de muy alta calidad y darle la confianza a todos nuestros usuarios de que conservaremos sus autos en un muy buen estado de operacion eficiente y seguro, superando todas las expectativas de nuestros consumidores en el menor tiempo posibles. ¡PARA NUESTRA EMPRESA USTED Y SU VEHICULO SON PRIORIDAD!. "
        />
        <Valores
          imagen={<ion-icon name="happy-outline"></ion-icon>}
          valores="Nuestros valores"
          texto="Somos una empresa que cumple en tiempo y forma con las necesidades de cada uno de nuestros clientes, sabemos trabajar de manera muy honesta garantizando la buena calidad del trabajo al igual que todas las herramientas utilizadas. Nos dirigimos a nuestros clientes de manera equitativa y respetuosa. ¡Somos leales ante nuestros socios comerciales, empleados y accionistas!"
        />
      </div>
    </>
  );
};
