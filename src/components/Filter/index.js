import React from 'react'
import styles from './style.module.css'

const Filter = () => (
  <section className={styles.filter}>
    <span className={styles.textBold}>FILTER BY</span>
    <button className={styles.buttonTrans}>face</button>
    <button className={styles.buttonTrans}>body</button>
    <button className={styles.buttonTrans}>hair</button>
    <button className={styles.buttonTrans}>makeup</button>
    <span className={styles.textBold}>SORT BY</span>
    <button className={styles.buttonTrans}>price low to high</button>
    <button className={styles.buttonTrans}>price high to low</button>
    <button className={styles.buttonApply}>Apply filters</button>
  </section>
)

export default Filter