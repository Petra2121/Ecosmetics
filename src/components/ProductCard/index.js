import React from 'react'
import Shampoo from '../../images/strawberry-shampoo1.jpg'
import styles from './style.module.css'


const ProductCard = () => (
  <section className={styles.productCard}>

    <div className={styles.productImg}>
      <img src={Shampoo}/>
    </div>
    
    <div className={styles.cardBottom}>
      <span className={styles.productName}>Strawberry glossing shampoo</span>
      <span className={styles.productPrice}>16 $</span>
      <button>Shop now</button>
    </div>

  </section>
)

export default ProductCard