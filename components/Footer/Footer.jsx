import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import style from "../../styles/footer.module.css";
import {FiInstagram} from "react-icons/fi"
import Link from "next/Link"
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <div className={style.foote}>
      <footer>
        <Container>
          <Row>
            <Col className={style.social}>Social</Col>
            <Col className={style.social}>Contatos</Col>
            <Col>
            <Link href="/Crud" passHref>
        <Button variant="contained" color="secondary"><FiInstagram/></Button>
    
         </Link>
         </Col>
          </Row>
          <Row className={style.redes}>
            <Col> 
      </Col>
            <Col>Instagram</Col>
            <Col>Instagram</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
