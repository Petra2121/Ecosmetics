import React from 'react'
import Shampoo from '../../images/strawberry-shampoo1.jpg'
import styles from './style.module.css'


const ProductCard = ({image, name, price}) => (
  <section className={styles.productCard}>

    <div className={styles.productImg}>
      <img src={image}/>
    </div>
    
    <div className={styles.cardBottom}>
      <span className={styles.productName}>{name}</span>
      <span className={styles.productPrice}>{price}</span>
      <button>Shop now</button>
    </div>

  </section>
)

export default ProductCard