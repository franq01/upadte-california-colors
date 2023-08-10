import "../header.css";

export const Header = ({ titulo, parrafo }) => {
  return (
    <div className="container-padre">
      <div className="logo">
        <p className="c">C</p>
        <p className="c">A</p>
        <p className="c">L</p>
        <p className="c">I</p>
        <p className="f">F</p>
        <p className="f">O</p>
        <p className="f">R</p>
        <p className="f">N</p>
        <p className="i">I</p>
        <p className="i">A</p>
        <p className="i">C</p>
        <p className="i">O</p>
        <p className="i">L</p>
        <p className="c">O</p>
        <p className="c">R</p>
        <p className="c">S</p>
      </div>
      <div className="container-about">
        <h2>{titulo}</h2>
        <p>{parrafo}</p>
        <ButtonExplorar texto="Explorar" referencia="#explorar" />
      </div>
    </div>
  );
};

const ButtonExplorar = ({ texto, referencia }) => {
  return (
    <div className="container-button">
      <a style={{ textDecoration: "none", color: "white" }} href={referencia}>
        {texto}
      </a>
    </div>
  );
};
