import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'


const ProductCard = ({image, name, price}) => (
  <section className={styles.productCard}>

    <div className={styles.productImg}>
      <img src={image} alt="Product"/>
    </div>
    
    <div className={styles.cardBottom}>
      <span className={styles.productName}>{name}</span>
      <span className={styles.productPrice}>{price}</span>
      <Link to="/product">
        <button>Shop now</button>
      </Link> 
    </div>

  </section>
)

export default ProductCard