import React from 'react'
import ProductCard from '../../components/ProductCard'

import styles from './style.module.css'
import { GoChevronLeft } from "@react-icons/all-files/go/GoChevronLeft";
import { GoChevronRight } from "@react-icons/all-files/go/GoChevronRight";

import Shampoo from '../../images/acid-base.png'
import Blush from '../../images/balm-and-buds-salve.png'
import Eyeshadow from '../../images/lip-paint-clay-idol.png'

const BrandProducts = () => (
  <section className={styles.bestsellers}>
    <span  className={styles.bestsellersTitle}>Our Products</span>

    <div className={styles.container}>
      <GoChevronLeft className={styles.icon1}/>
      <div className={styles.products}>
        <ProductCard image={Shampoo} name="Acid Base" price='16$' />
        <ProductCard image={Blush} name="Balms And Buds Salve" price='12$' />
        <ProductCard image={Eyeshadow} name="Lip Paint - Clay Idol" price='12$' />
      </div>
      <GoChevronRight className={styles.icon2}/>
     </div>

  </section>
)

export default BrandProducts