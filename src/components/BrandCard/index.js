import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'


const BrandCard = ({image1, image2, name}) => (
  <section className={styles.brandSection}>

    <div className={styles.brandCard}>

      <div className={styles.imgContainer}>
        <img src={image1} className={styles.img1} />
        <img src={image2} className={styles.img2}/>
      </div>
    
      <span className={styles.brandName}>{name}</span>
      <Link to="/brand">
        <button>Check out the brand</button>
      </Link>

      <hr className={styles.line}></hr>
    </div>

  </section>
)

export default BrandCard