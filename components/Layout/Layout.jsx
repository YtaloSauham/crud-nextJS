import { Container, Row, Col } from "react-bootstrap";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout(props) {
  return (
    <>
    <Header/>
      <Container>{props.children}</Container>
      <Footer/>
    </>
  );
}
