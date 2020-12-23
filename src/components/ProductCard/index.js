import React from 'react'
import styles from './style.module.css'

const ProductCard = () => (
  <section className={styles.productCard}>
    <img src="../../../images/vegan.png"/>
    <div className={styles.cardBottom}>
      <span>Strawberry glossing shampoo</span>
      <span>16 $</span>
      <button>Shop now</button>
    </div>
  </section>
)

export default ProductCard