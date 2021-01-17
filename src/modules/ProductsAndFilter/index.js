import React from 'react'
import AllProducts from '../../components/AllProducts'
import Filter from '../../components/Filter'
import styles from './style.module.css'

function showMask() {
  var node = document.getElementById('mask123')
  var display = node.style.display;
  node.style.display = display == "block" ? 'none' : "block"
}

const ProductsAndFilter = () => <section className={styles.productFilter}>

    <div className={styles.filter}>
      <Filter />
    </div>
    <button className={styles.openFilter} onClick={showMask}>filter and sort</button>
      <div id="mask123" className={styles.mobFilter} style={{display: 'none'}}>
        <Filter />
      </div>
    <div className={styles.products}>
        <AllProducts />
    </div>
</section>

export default ProductsAndFilter