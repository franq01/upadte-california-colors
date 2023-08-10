import { createContext, useState } from "react";

export const PromocionesContext = createContext();

export const PromocionesContextProvider = ({ children }) => {
  const [promocionesData, setPromocionesData] = useState({
    imagen: "",
    titulo: "",
    descripcion: "",
    precio: "",
  });
  const [listPromociones, setListPromociones] = useState([]);
  

  return (
    <PromocionesContext.Provider
      value={{
        promocionesData,
        setPromocionesData,
        listPromociones,
        setListPromociones,
      }}
    >
      {children}
    </PromocionesContext.Provider>
  );
};
