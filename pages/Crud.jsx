import { useEffect, useState } from "react"
import  axios  from "axios";
 
const baseUrl="http://localhost:3001/users"


export default function Crud(){

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [usuarios,setUsuarios]=useState([]);
    const  [id,setID]=useState(0)
    const [editar,setEditar]=useState(false)

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
                        <button onClick={()=>{editarFomulario(dados)}}>Editar</button>
                       
                    </td>
                
                </tr>
                    )
         })
    }

    useEffect(()=>{
       setInterval(()=>{
        axios.get(baseUrl).then((res)=>setUsuarios(res.data))
       },5000)
   
        
    },[])
   
    function enviarFormulario(){
       
        const method = id ? 'put' : 'post'
        const url= id ? `${baseUrl}/${id}` : baseUrl
        axios[method](url,{name,email}).then(res=>{console.log(res.data)})
         
        }
    // await axios.post(baseUrl,{name,email})          
    // setName('')
    // setEmail('')
    //  await axios.get(baseUrl).then((res)=>setUsuarios(res.data))
    
    



    function editarFomulario(user){
        setName(user.name)
        setEmail(user.email)
        setID(user.id)
    }

    function limpar(){
        setName('')
        setEmail('')
        setID('')
    }

    // function enviarUpload(user){
    //     axios.put(baseUrl+`/${user.id}`,{name,email})
       
    // }



        return(
            <div>
            <label>Nome:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <button onClick={e=>{enviarFormulario()}}>Save</button>
             <button onClick={e=>{limpar()}}>Cancelar</button>
            <ul>
            {renderTable()}
            </ul>
            </div>
        )

    
}