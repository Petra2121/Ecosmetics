import React from 'react'
import styles from './style.module.css'
import vegan from '../../images/vegan.png'
 
const OurProductsBox = () => (
    <section className={styles.ourProductsBox}>
        <img src={vegan} className={styles.icon}/>
        <p className={styles.title}>Vegan</p>
        <p className={styles.text}>Our vegan customers have many options to choose from</p>        
    </section>
)
 
export default OurProductsBox