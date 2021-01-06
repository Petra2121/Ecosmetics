import React from 'react'
import { navs as navTabs } from '../../constants/const'
import styles from './style.module.css'
import { Link } from 'gatsby'

import {HiOutlineHome} from "@react-icons/all-files/hi/HiOutlineHome"
import {RiInkBottleLine} from "@react-icons/all-files/ri/RiInkBottleLine"
import {FaTree} from "@react-icons/all-files/fa/FaTree"
import {BiComment} from "@react-icons/all-files/bi/BiComment"
import { BsBag } from "@react-icons/all-files/bs/BsBag";

export const navs = [
  {tab: 'Home', to: '/'},
  {tab: 'Products', to: '/products'}, 
  {tab: 'Brands', to: '/brands'}, 
  {tab: 'Blog', to: '/blog'}
]

const NavigationBar = ({activeTab}) => (
  <nav className={styles.navigationBar}>
    <Link to='/' >
      <li className={'Home' === activeTab ? styles.active : ''}>Home</li>
    </Link>
    <Link to='/products' >
      <li className={'Products' === activeTab ? styles.active : ''}>Products</li>
    </Link>
    <Link to='/brands' >
      <li className={'Brands' === activeTab ? styles.active : ''}>Brands</li>
    </Link>
    <Link to='/blog' >
      <li className={'Blog' === activeTab ? styles.active : ''}>Blog</li>
    </Link>

        <HiOutlineHome className={styles.icon}/>
        <RiInkBottleLine className={styles.icon}/>
        <FaTree className={styles.icon}/>
        <BiComment className={styles.icon}/>
        <BsBag className={styles.icon}/> 
  </nav>
)

export default NavigationBar