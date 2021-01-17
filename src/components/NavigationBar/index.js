import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'

import {HiOutlineHome} from "@react-icons/all-files/hi/HiOutlineHome"
import {RiInkBottleLine} from "@react-icons/all-files/ri/RiInkBottleLine"
import {FaTree} from "@react-icons/all-files/fa/FaTree"
import {BiComment} from "@react-icons/all-files/bi/BiComment"
import {AiOutlineShopping} from "@react-icons/all-files/ai/AiOutlineShopping"

const NavigationBar = ({activeTab}) => (
  <nav className={styles.navigationBar}>
    <Link to='/'>
      <div className={styles.navElement}>
        <HiOutlineHome className={styles.icon}/>
        <li className={'Home' === activeTab ? styles.active : ''}>Home</li>
      </div>
    </Link>

    <Link to='/products' >
      <div className={styles.navElement}>
        <RiInkBottleLine className={styles.icon}/>
        <li className={'Products' === activeTab ? styles.active : ''}>Products</li>
      </div>
    </Link>

    <Link to='/brands' >
      <div className={styles.navElement}>
        <FaTree className={styles.icon}/>
        <li className={'Brands' === activeTab ? styles.active : ''}>Brands</li>
      </div>
    </Link>

    <Link to='/blog' >
      <div className={styles.navElement}>
        <BiComment className={styles.icon}/>
        <li className={'Blog' === activeTab ? styles.active : ''}>Blog</li>
      </div>
    </Link>

    <Link to='/cart' className ={styles.cartLink}>
      <div className={styles.navElement} id={styles.cartDiv}>
        <AiOutlineShopping className={styles.icon}/>
        <li className={'Cart' === activeTab ? styles.active : '', styles.cartLi}>Cart</li>
      </div>
    </Link>      
  </nav>
)

export default NavigationBar