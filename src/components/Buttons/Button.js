import "./button.css";
import Button from "react-bootstrap/Button";
export const Boton = ({ color, texto, click }) => {
  return (
    <Button variant={color} onClick={click}>
      {texto}
    </Button>
  );
};
