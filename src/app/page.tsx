import "./globals.css";
import styles from "./page.module.css";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <AboutMe></AboutMe>
        <TechStack></TechStack>
        <Projects></Projects>
      </main>
    </>
  );
}
