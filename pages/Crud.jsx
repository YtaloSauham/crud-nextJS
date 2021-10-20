import { useEffect, useState } from "react"
import  axios  from "axios";
import { Button,Container, Table,Form,Row,Col} from "react-bootstrap"; 
import style from "../styles/Crud.module.css"
import {AiOutlineEdit} from "react-icons/ai"
import {BsFillTrashFill} from "react-icons/bs"
const baseUrl="http://localhost:3001/users"


export default function Crud(){

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [usuarios,setUsuarios]=useState([]);
    const [id,setID]=useState(0)
    const [validated, setValidated] = useState(false);
    const [isLoading,setLoading]=useState(false);
    function renderTable(){
        return (             
            <Table striped bordered hover variant="dark">
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
            </Table>
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
                        
                        <Button size="sm" className={style.button_Edit} variant="warning" onClick={()=>{update(dados)}}>
                           <AiOutlineEdit/>
                            </Button>

                        <Button size="sm" className={style.button_Remove} variant="danger" onClick={()=>{remove(dados.id)}}><BsFillTrashFill/></Button>
                      
                    </td>
                
                </tr>
                    )
         })
    }

    useEffect(()=>{  
        setInterval(()=>{axios.get(baseUrl).then((res)=>setUsuarios(res.data))},5000)
        
   },[])
   
    async function save(event){
    const method = id ? 'put' : 'post'
    const url= id ? `${baseUrl}/${id}` : baseUrl
    const form = event.currentTarget;
    if (form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    }
    else{
        setLoading(true)    
       axios[method](url,{name,email})
        .then(()=>setLoading(false))
        .then(()=>clear())
    }
    setValidated(true)   
        }

    
    function update(user){
        setName(user.name)
        setEmail(user.email)
        setID(user.id)
    }

    async function remove(id_delete){
        await axios.delete(`${baseUrl}/${id_delete}`)

    }

    function clear(){
        setName('')
        setEmail('')
        setID('')
    }

    // function enviarUpload(user){
    //     axios.put(baseUrl+`/${user.id}`,{name,email})
       
    // }



        return(
            <div>
            <Container>
            {/* <label>Nome:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> */}
            <Form noValidate validated={validated} onSubmit={save}>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Ex:João" value={name} onChange={(e)=>setName(e.target.value)} required/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Digite um nome valido</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ex:irelia@hotmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </Form.Group>
            </Row>
            <Button 
            className={style.buttons_Form}
            variant="primary"
            disabled={isLoading} 
            type="submit">{isLoading ? 'Salvando…' : 'Salvar'} </Button>
             <Button  className={style.buttons_Form} variant="secondary"  active onClick={e=>{clear()}}>Cancelar</Button >
            </Form>
            <div className={style.table_Container}>
            {renderTable()}
           </div>
            </Container>
            </div>
        )

    
}