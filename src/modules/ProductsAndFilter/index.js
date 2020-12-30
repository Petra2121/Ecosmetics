import React from 'react'
import AllProducts from '../../components/AllProducts'
import Filter from '../../components/Filter'
import styles from './style.module.css'

const ProductsAndFilter = () => <section className={styles.productFilter}>
    <div className={styles.filter}>
      <Filter />
    </div>
    <div className={styles.products}>
        <AllProducts />
    </div>
    
</section>
 
export default ProductsAndFilter