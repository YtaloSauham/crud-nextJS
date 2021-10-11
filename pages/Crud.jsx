import { useEffect, useState } from "react"
import  axios  from "axios";
 
const baseUrl="http://localhost:3001/users"


export default function Crud(){

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [usuarios,setUsuarios]=useState([]);

    function renderTable(){
        return (
                
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
    }
    
    function renderRows(){
        return usuarios?.map((dados,i)=>{
            return  (
                <tr key={dados.id}> 
                <td>{dados.id}</td>
                    <td>{dados.name}</td>
                    <td>{dados.email}</td>
                    <td>
                        <button onClick= {() => {"#"}}>Editar</button>
                        <button onClick= {() => {"#"}}>Remover</button>
                    </td>
                
                </tr>
                    )
         })
    }

    useEffect(()=>{
    axios.get(baseUrl).then((res)=>setUsuarios(res.data))
   
    },[])
   
    async function enviarFormulario(){
    await axios.post(baseUrl,{name,email})          
    setName('')
    setEmail('')
     await axios.get(baseUrl).then((res)=>setUsuarios(res.data))
    
    
}

        return(
            <div>
            <label>Nome:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button  onClick={enviarFormulario}>Enviar</button>
            <ul>
            {renderTable()}
            </ul>
            </div>
        )

    
}