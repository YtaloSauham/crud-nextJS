import {Container,Button,Col,Row} from 'react-bootstrap';
import style from "../../styles/jumbotron.module.css";
import router,{ useRouter } from 'next/dist/client/router';
export default function Jumbo(props){
   return (
    <div className={style.jumbotron}>
    <Container>  
    <Row>
      <Col className={style.title}>
      <h1>{props.title}</h1>
      </Col>
    </Row>
    <Row>
      <Col className="lead text-white">
      <p>
         {props.description}    
      </p>
      </Col>
    </Row>
    <Row>
      <Col className={style.bt}>
      <Button variant="primary" onClick={()=>{router.push(props.link)}}>
       {props.buttonName}
      </Button>
      </Col>
    </Row>
     
   </Container>
  </div>

    )

}