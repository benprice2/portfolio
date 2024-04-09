import { getImageUrl } from "../../utils"
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>    
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="mailto:ben.price700@gmail.com">Ben.price700@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                <a href="https://www.linkedin.com/in/ben-price-25891226b/">LinkedIn.com/Ben</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon"/>
                <a href="https://github.com/benprice2">GitHub.com/Ben</a>
            </li>
        </ul>
    </footer>
  )
}
