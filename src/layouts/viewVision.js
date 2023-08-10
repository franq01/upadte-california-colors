import "../vision.css";

export const Vision = ({ vision, texto, imagen }) => {
  return (
    <div id="explorar" className="container-vision">
      <div className="icono-vision">{imagen}</div>
      <div className="body-vision">
        <h2>{vision}</h2>
        <p>{texto}</p>
      </div>
    </div>
  );
};
