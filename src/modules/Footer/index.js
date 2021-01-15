import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <footer className={styles.footer} >

        <ul className={styles.footertext}>
            <li className={styles.title}>
                ECOsmetics © 2021 FESB
            </li>
            <li>Petra Lovrić, Mihaela Wang</li>
        </ul>

        <div className={styles.socialcontainer}>
            <a href="https://www.instagram.com" target = "_blank" rel = "noopener noreferrer"
            className={styles.social} title="Instagram">
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
            </a>
            <a href="https://www.twitter.com" target = "_blank" rel = "noopener noreferrer"
            className={styles.social} title="Twitter">
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com" target = "_blank" rel = "noopener noreferrer"
            className={styles.social} title="Facebook">
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
            </a>
        </div>

    </footer>
  )
 
  export default Footer