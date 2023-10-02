import "./globals.css";
import styles from "./page.module.css";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <main className={styles.body}>
        <AboutMe></AboutMe>
        <TechStack></TechStack>
        <Projects></Projects>
      </main>
    </>
  );
}
