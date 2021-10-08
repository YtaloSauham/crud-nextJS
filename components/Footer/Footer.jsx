import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import style from "../../styles/footer.module.css";
export default function Footer() {
  return (
    <div className={style.foote}>
      <footer>
        <Container>
          <Row>
            <Col className={style.social}>Social</Col>
            <Col>Seila</Col>
          </Row>
          <Row className={style.redes}>
            <Col>Instagram</Col>
            <Col>Instagram</Col>
            <Col>Instagram</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
