import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'

const Logo = () => (
  <section className={styles.logo}>
    <Link to="/">            
      <span className={styles.logoText}>ECOsmetics</span>
    </Link>
  </section>
)

export default Logo