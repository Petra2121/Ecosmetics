import React from 'react'
import ProductCard from '../../components/ProductCard'
import styles from './style.module.css'

import Shampoo from '../../images/strawberry-shampoo1.jpg'
import Blush from '../../images/phyto-pigments-cream-blush.jpg'
import Eyeshadow from '../../images/phyto-pigment-eyeshadow.jpg'

const Bestsellers = () => (
  <section className={styles.bestsellers}>
    <span  className={styles.bestsellersTitle}>Bestsellers</span>

    <div className={styles.container}>
      <div className={styles.products}>
        <ProductCard image={Shampoo} name="Strawberry Glossing Shampoo" price='16$' />
        <ProductCard image={Blush} name="Phyto Pigments Cream Blush" price='12$' />
        <ProductCard image={Eyeshadow} name="Phyto Pigment Eyeshadow" price='12$' />
      </div>
     </div>

  </section>
)

export default Bestsellers