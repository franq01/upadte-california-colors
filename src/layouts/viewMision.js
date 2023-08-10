import "../mision.css";
export const Mision = ({ mision, texto, imagen }) => {
  return (
    <div className="container-mision">
      <div className="icono-mision">{imagen}</div>
      <div className="body-mision">
        <h2>{mision}</h2>
        <p>{texto}</p>
      </div>
    </div>
  );
};

export const Valores = ({ valores, texto, imagen }) => {
  return (
    <div className="container-valores">
      <div className="icono-valores">{imagen}</div>
      <div className="body-valores">
        <h2>{valores}</h2>
        <p>{texto}</p>
      </div>
    </div>
  );
};
