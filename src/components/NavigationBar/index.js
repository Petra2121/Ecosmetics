import React from 'react'
import { navs as navTabs } from '../../constants/const'
import styles from './style.module.css'
import { Link } from 'gatsby'

import {HiOutlineHome} from "@react-icons/all-files/hi/HiOutlineHome"
import {RiInkBottleLine} from "@react-icons/all-files/ri/RiInkBottleLine"
import {FaTree} from "@react-icons/all-files/fa/FaTree"
import {BiComment} from "@react-icons/all-files/bi/BiComment"
import { BsBag } from "@react-icons/all-files/bs/BsBag";


const NavigationBar = ({activeTab}) => (
  <nav className={styles.navigationBar}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}

        <HiOutlineHome className={styles.icon}/>
        <RiInkBottleLine className={styles.icon}/>
        <FaTree className={styles.icon}/>
        <BiComment className={styles.icon}/>
        <BsBag className={styles.icon}/> 
  </nav>
)

export default NavigationBar