import React from 'react'

import Logo from '../Logo'
import UserMenu from '../UserMenu'

import styles from './style.module.css'

const Navigation = () => (
  <section className={styles.navigationTop}>
    <div className={styles.navigationContainer}>
      <Logo />
      <UserMenu />
    </div>
  </section>
)

export default Navigation