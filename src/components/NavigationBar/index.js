import React from 'react'

import styles from './style.module.css'

const NavigationBar = () => (
  <nav className={styles.navigationBar}>
    <ul className={styles.navigationButtons}>
      <li className={styles.active}>Home</li>
      <li>Products</li>
      <li>Brands</li>
      <li>Blog</li>
    </ul>
  </nav>
)

export default NavigationBar