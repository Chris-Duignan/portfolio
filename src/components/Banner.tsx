import styles from "../styles/banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <header className={styles.banner__container}>
      <h1 className={styles.banner__heading}>Chris Duignan</h1>
      <a
        href="https://github.com/Chris-Duignan"
        target="_blank"
        className={styles.banner__icon}
      >
        <Image
          src={"/github-mark.svg"}
          alt="github link"
          width={30}
          height={30}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/chris-duignan-142963175/"
        target="_blank"
        className={styles.banner__icon}
      >
        <Image
          src={"/LI-In-Bug.png"}
          alt="linkedIn link"
          width={35}
          height={30}
        />
      </a>
    </header>
  );
};

export default Banner;
