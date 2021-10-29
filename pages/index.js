
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero/Hero";
import { DiNodejs, DiReact } from "react-icons/di";
import { IconContext } from "react-icons";
import Jumbo from '../components/Jumbotron/Jumbo';

export default function Home() {
  return (
    <div>
      <Jumbo title="Crud Simples-Projeto pessoal com NextJS" description="Esse projeto tem como finalidade testar meus conhecimentos em frontend e
        backend." buttonName="IR PARA CRUD" link="http://localhost:3000/Crud"/>
      <main className={styles.main}>  
        <Hero
          className={styles.title_hero}
          title="Tecnologias Usadas">
          <div className={styles.tecnologias_back}>
            <DiNodejs size="5em" color="green" title="Icone do nodejs" />
            <DiReact size="4em" color="#7EC8E3" title="Icone do React" /> 
          </div>
        </Hero>
      </main>
    </div>
  );
}
