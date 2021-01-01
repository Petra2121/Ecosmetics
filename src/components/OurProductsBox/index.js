import React from 'react'
import styles from './style.module.css'
 
const OurProductsBox = ({image, title, text }) => (
    <section className={styles.ourProductsBox}>
        <img src={image} alt="Bestsellers" className={styles.icon}/>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>        
    </section>
)
 
export default OurProductsBox