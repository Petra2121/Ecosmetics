import React, {useState, useEffect} from 'react'
import AllProducts from '../../components/AllProducts'
import Filter from '../../components/Filter'
import styles from './style.module.css'

const filterList = ["Hair", "Body", "Makeup", "Face"]

const ProductsAndFilter = () => {
  const [appliedFilters, setAppliedFilters] = useState(filterList)
  const [sort, setSort] = useState(null)

  return (

    <section className={styles.productFilter}>
      <div className={styles.filter}>
        <Filter setFilters={setAppliedFilters} appliedFilters={appliedFilters} sort={sort} setSort={setSort} />
      </div>
      <div className={styles.products}>
        <AllProducts appliedFilters={appliedFilters} sort={sort} />
      </div>
    </section>

  )
} 

export default ProductsAndFilter