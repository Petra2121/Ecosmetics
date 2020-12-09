import React from 'react'

import styles from './style.module.css'

const navTabs = ['Home', 'Products', 'Brands', 'Blog']

const NavigationBar = () => (
  <nav className={styles.navigationBar}>
    {navTabs.map(tab => <li className={tab==='Home' ? styles.active : ''}>
      {tab}</li>
    )}
  </nav>
)

// const NavigationBar = () => (
//   <nav className={styles.navigationBar}>
//     <ul className={styles.navigationButtons}>
//       <li className={styles.active}>Home</li>
//       <li>Products</li>
//       <li>Brands</li>
//       <li>Blog</li>
//     </ul>
//   </nav>
// )

export default NavigationBar