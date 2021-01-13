import React from 'react'

import Logo from '../Logo'
import UserMenu from '../UserMenu'

import styles from './style.module.css'

const Navigation = () => (
  <section className={styles.navigationTop}>
    <p className={styles.hidden}>X...X</p>
    <Logo />
    <UserMenu />
  </section>
)

export default Navigation