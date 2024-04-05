import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ben</h1>
            <p className={styles.description}>
                I'm a full-stack developr loren ipsum adqaqg
            </p>
            <a href="mailto:ben.price700@gmail.com" className={styles.contact}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="heroImg" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
