import React from 'react'
import styles from './style.module.css'

const Filter = () => (
  <div className={styles.wrapper}>
  <section className={styles.filter}>
    <div className={styles.filterBy}>
    <span className={styles.textBold}>FILTER BY</span>
    <button className={styles.buttonTrans}>face</button>
    <button className={styles.buttonTrans}>body</button>
    <button className={styles.buttonTrans}>hair</button>
    <button className={styles.buttonTrans}>makeup</button>
    </div>
    <div className={styles.sortBy}>
    <span className={styles.textBold}>SORT BY</span>
    <button className={styles.buttonTrans}>price low to high</button>
    <button className={styles.buttonTrans}>price high to low</button>
    </div>
  </section>
  <div className={styles.buttonWrap}>
  <button className={styles.buttonApply}>Apply filters</button>
  </div>
  </div>
)

export default Filter