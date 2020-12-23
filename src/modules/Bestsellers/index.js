import React from 'react'
import ProductCard from '../../components/ProductCard'

import styles from './style.module.css'
import { GoChevronLeft } from "@react-icons/all-files/go/GoChevronLeft";
import { GoChevronRight } from "@react-icons/all-files/go/GoChevronRight";

const Bestsellers = () => (
  <section className={styles.bestsellers}>
    <span  className={styles.bestsellersTitle}>Bestsellers</span>

    <div className={styles.container}>
      <GoChevronLeft className={styles.icon1}/>
      <div className={styles.products}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <GoChevronRight className={styles.icon2}/>
     </div>

  </section>
)

export default Bestsellers