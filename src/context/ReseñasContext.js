import { createContext, useState } from "react";


export const ResenasContext = createContext()

export const ResenasContextProvider = ({children})=>{
    const [comentario,setComentario] = useState("")
    const [listComentarios,setListComentarios] = useState([])

    return (
        <ResenasContext.Provider value={{
            comentario,setComentario,listComentarios,setListComentarios
        }}>
                  {children}
            </ResenasContext.Provider>
    )
}