import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import styled from "styled-components";
import style from "../../styles/Header.module.css";


export default function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top"  className="justify-content-center">
      <Container>
        <Navbar.Brand className={style.linksText} href="/Home">CRUD-Simples</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className={style.linksText} href="/">Home</Nav.Link>
            <Nav.Link className={style.linksText} href="/Crud">Crud</Nav.Link>
          </Nav>  
       
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
