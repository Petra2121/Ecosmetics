import React from 'react'
import styles from './style.module.css'

const text = `As The Beauty Industry Continues To Grapple With Its Plastics Problem, The Best Sustainable Beauty 
Brands Are Working Toward Creating A Future With Less Pollution. Now Is A Great Time To Consider The 
Environmental Impacts Caused By The Cosmetic Products We're Purchasing. We've Rounded Up For You 
Some Of Our Favorite Products From The Best Sustainable Brands On The Market.`


const MeetBrands = () => (
  <section className={styles.meetBrands}>
    <span className={styles.headingText}>Meet our brands</span>
    <span className={styles.middleText}>"The earth is what we all have in common.”</span>
    <span className={styles.middleText}>-Wendell Berry</span>
    <hr className={styles.line}></hr>
    <span className={styles.smallText}>{text}</span>
  </section>
)

export default MeetBrands