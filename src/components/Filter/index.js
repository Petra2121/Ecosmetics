import React from 'react'

import styles from './style.module.css'

const Filter = ({setFilters, appliedFilters, sort, setSort}) => {
  const filtersToApply = []
  function showMask() {
    var node = document.getElementById('mask123')
    var display = node.style.display;
    node.style.display = display === "block" ? 'none' : "block"
  }
  

  const toggleFilter = filterName => {
    // filtersToApply.push(filterName)
    if (filtersToApply.includes(filterName)){
      const indexToRemove = filtersToApply.indexOf(filterName)
      if (indexToRemove !== -1) {
        filtersToApply.splice(indexToRemove, 1)
      }
    } else {
      filtersToApply.push(filterName)
    }
  }

  return (
    <div className={styles.huge}>
      <div className={styles.wrapper}>
    <section className={styles.filter}>
      <div className={styles.filterBy}>
      <span className={styles.textBold}>FILTER BY</span>
      <button className={styles.buttonTrans} onClick={() => toggleFilter("Face")}>face</button>
      <button className={styles.buttonTrans} onClick={() => toggleFilter("Body")}>body</button>
      <button className={styles.buttonTrans} onClick={() => toggleFilter("Hair")}>hair</button>
      <button className={styles.buttonTrans}  onClick={() => toggleFilter("Makeup")}>makeup</button>
      </div>
      <div className={styles.sortBy}>
      <span className={styles.textBold}>SORT BY</span>
      <button className={styles.buttonTrans} onClick={() => sort === "ASC" ? setSort(null) : setSort("ASC")}>price low to high</button>
      <button className={styles.buttonTrans} onClick={() => sort === "DEC" ? setSort(null) : setSort("DEC")}>price high to low</button>
      </div>
    </section>
    <div className={styles.buttonWrap}>
    <button className={styles.buttonApply} onClick={() => setFilters([...filtersToApply])}>Apply filters</button>
    </div>
    </div>

    <button className={styles.openFilter} onClick={showMask}>filter and sort ⯆</button>
      <div id="mask123" className={styles.mobFilter} style={{display: 'none'}}>
    <div className={styles.wrapper2}>
    <section className={styles.filter}>
      <div className={styles.filterBy2}>
      <span className={styles.textBold}>FILTER BY</span>
      <button className={styles.buttonTrans} onClick={() => toggleFilter("Face")}>face</button>
      <button className={styles.buttonTrans} onClick={() => toggleFilter("Body")}>body</button>
      <button className={styles.buttonTrans} onClick={() => toggleFilter("Hair")}>hair</button>
      <button className={styles.buttonTrans}  onClick={() => toggleFilter("Makeup")}>makeup</button>
      </div>
      <div className={styles.sortBy2}>
      <span className={styles.textBold}>SORT BY</span>
      <button className={styles.buttonTrans} onClick={() => sort === "ASC" ? setSort(null) : setSort("ASC")}>price low to high</button>
      <button className={styles.buttonTrans} onClick={() => sort === "DEC" ? setSort(null) : setSort("DEC")}>price high to low</button>
      </div>
    </section>
    <div className={styles.buttonWrap}>
    <button className={styles.buttonApply2} onClick={() => setFilters([...filtersToApply])}>Apply filters</button>
    </div>
    </div>
    </div>
    </div>
  )

}

export default Filter