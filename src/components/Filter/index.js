import React from 'react'

import styles from './style.module.css'

const Filter = ({setFilters, appliedFilters, sort, setSort}) => {
  const filtersToApply = []

  const toggleFilter = filterName => {
    filtersToApply.push(filterName)
  }

  return (
    <section className={styles.filter}>
    <span className={styles.textBold}>FILTER BY</span>
    <button className={styles.buttonTrans} onClick={() => toggleFilter("Face")} >face</button>
    <button className={styles.buttonTrans} onClick={() => toggleFilter("Body")} >body</button>
    <button className={styles.buttonTrans} onClick={() => toggleFilter("Hair")} >hair</button>
    <button className={styles.buttonTrans} onClick={() => toggleFilter("Makeup")} >makeup</button>
    <span className={styles.textBold}>SORT BY</span>
    <button className={styles.buttonTrans} onClick={() => sort === "ASC" ? setSort(null) : setSort("ASC")}>price low to high</button>
    <button className={styles.buttonTrans} onClick={() => sort === "DEC" ? setSort(null) : setSort("DEC")}>price high to low</button>
    <button className={styles.buttonApply} onClick={() => setFilters([...filtersToApply])} >Apply filters</button>
  </section>)

}

export default Filter