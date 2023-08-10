import "./tableComments.css"
import { useContext } from "react"
import { ResenasContext } from "../../context/ReseñasContext"
import Button from "react-bootstrap/Button";

export const TableComments = ()=>{
    const {listComentarios,setListComentarios} = useContext(ResenasContext)

    const deleteComment=(commentId)=>{
        /*comentario hace referencia al valor e index al indice de cada iteracion*/
       setListComentarios(listComentarios.filter((comentario,index)=>index!==commentId))
    }
    const deleteAllComments = ()=>{
        setListComentarios([])
    }
    return (
        <div style={{marginTop:"60px"}}>
            <h1 style={{fontFamily:"sans-serif"}}>Comentarios de tus clientes</h1>
          <table className="table-comments">
            <thead >
                <tr >
                    <th>Numero</th>
                    <th>Comentario</th>
                    <th>Eliminar</th>
                    
                </tr>
            </thead>
             <tbody>
                {listComentarios.map((comentario,index)=>(
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{comentario}</td>
                        <td>
                            <Button variant="primary" style={{width:"auto"}} onClick={()=>deleteComment(index)}>Eliminar</Button>
                        </td>
                    </tr>
                ))}
             </tbody>
          </table>
          <div style={{display:"flex", justifyContent:"center", marginTop:"15px"}}>
          {listComentarios.length > 0 ? <Button variant="primary" style={{width:"auto"}} onClick={deleteAllComments}>Eliminar todos</Button>:<h2 style={{color:"black"}}>No hay comentarios aun</h2>}
          </div>
        </div>
    )
}