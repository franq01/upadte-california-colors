import Carousel from "react-bootstrap/Carousel";
import "./carrusel.css";
export function Carrusel({
  firstTitle,
  secondTitle,
  thirdTitle,
  firstImage,
  secondImage,
  thirdImage,
  redireccion,
  textoRedireccion,
}) {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 imagen-carrusel"
          src={firstImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="title-carrusel">{firstTitle}</h1>
          <div className="container-redireccionar">
            <div className="redireccionar">
              <a href={redireccion}>{textoRedireccion}</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 imagen-carrusel"
          src={secondImage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="title-carrusel">{secondTitle}</h1>
          <div className="container-redireccionar">
            <div className="redireccionar">
              <a href={redireccion}>{textoRedireccion}</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 imagen-carrusel"
          src={thirdImage}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="title-carrusel">{thirdTitle}</h1>
          <div className="container-redireccionar">
            <div className="redireccionar">
              <a href={redireccion}>{textoRedireccion}</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
