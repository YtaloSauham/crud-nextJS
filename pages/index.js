
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero/Hero";
import { DiNodejs, DiReact } from "react-icons/di";
import { IconContext } from "react-icons";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Hero
          title="Crud Simples-Projeto pessoal com NextJS"
          content=" Esse projeto tem como finalidade testar meus conhecimentos em frontend e
        backend."
        />
        <Hero
          className={styles.title_hero}
          title="Tecnologias Usadas"
          subtitle="Backend"
        >
          <div className={styles.tecnologias_back}>
            <DiNodejs size="5em" color="green" title="Icone do nodejs" />
          </div>

          <Hero subtitle="Frontend">
            <div className={styles.tecnologias_front}>
              <DiReact size="4em" color="#7EC8E3" title="Icone do React" />
            </div>
          </Hero>
        </Hero>
      </main>
    </div>
  );
}
