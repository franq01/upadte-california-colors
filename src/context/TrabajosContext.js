import { createContext, useState } from "react";

export const TrabajosContext = createContext();

export const TrabajosContextProvider = ({ children }) => {
  const [trabajosData, setTrabajosData] = useState({
    imagen: "",
    name: "",
    descripcion: "",
  });

  const [listTrabajosData, setListTrabajosData] = useState([]);

  return (
    <TrabajosContext.Provider
      value={{
        trabajosData,
        setTrabajosData,
        listTrabajosData,
        setListTrabajosData,
      }}
    >
      {children}
    </TrabajosContext.Provider>
  );
};
