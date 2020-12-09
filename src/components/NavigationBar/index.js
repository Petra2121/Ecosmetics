import React from 'react'
import { navs as navTabs } from '../../constants/const'
import styles from './style.module.css'
import { Link } from 'gatsby'

const NavigationBar = ({activeTab}) => (
  <nav className={styles.navigationBar}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
  </nav>
)

export default NavigationBar