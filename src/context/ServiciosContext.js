import { createContext, useState } from "react";

export const ServiciosContext = createContext();

export const ServiciosContextProvider = ({ children }) => {
  const [servicios, setServicios] = useState([]);
  return (
    <ServiciosContext.Provider value={{ servicios, setServicios }}>
      {children}
    </ServiciosContext.Provider>
  );
};
