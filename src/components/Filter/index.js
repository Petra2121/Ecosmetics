import React from 'react'
 
import styles from './style.module.css'

import {FaAngleDown} from "@react-icons/all-files/fa/faangledown"
 
const myDocument = typeof document === 'undefined' ? {getElementById: (element) => {}} : {
  getElementById: (element) => document.getElementById(element)
}
 
console.log(myDocument)
 
const Filter = ({setFilters, appliedFilters, sort, setSort}) => {
  const filtersToApply = [...appliedFilters]
 
  function showMask() {
    const node = myDocument.getElementById('mask123')
    const display = node.style.display;
    node.style.display = display === "block" ? 'none' : "block"
  }
 
  function sorting1() {
    const node = myDocument.getElementById('lowtohigh')
    const otherNode = myDocument.getElementById('hightolow')
 
    sort === "ASC" ? (node.style.backgroundColor="transparent") : (node.style.backgroundColor="#CFC5C5")
    sort === "ASC" ? setSort(null) : (setSort("ASC"))
    otherNode.style.backgroundColor = "transparent"
  }
 
  function sorting2() {
    const node = myDocument.getElementById('hightolow')
    const otherNode = myDocument.getElementById('lowtohigh')
 
    sort === "DEC" ? (node.style.backgroundColor="transparent") : (node.style.backgroundColor="#CFC5C5")
    sort === "DEC" ? setSort(null) : setSort("DEC")
    otherNode.style.backgroundColor = "transparent"
  }
 
  const toggleFilter = filterName => {
    // filtersToApply.push(filterName)
    var node = myDocument.getElementById(filterName)
 
    if (filtersToApply.includes(filterName)){
      const indexToRemove = filtersToApply.indexOf(filterName)
      if (indexToRemove !== -1) {
        node.style.backgroundColor = "transparent"
        filtersToApply.splice(indexToRemove, 1)
      }
    } else {
      filtersToApply.push(filterName)
      node.style.backgroundColor = "#CFC5C5"
    }
  }
 
  return (
    <div className={styles.huge}>
      <div className={styles.wrapper}>
    <section className={styles.filter}>
      <div className={styles.filterBy}>
      <span className={styles.textBold}>FILTER BY</span>
      <button id="Face" className={styles.buttonSelected} onClick={() => toggleFilter("Face")}>face</button>
      <button id="Body" className={styles.buttonSelected} onClick={() => toggleFilter("Body")}>body</button>
      <button id="Hair" className={styles.buttonSelected} onClick={() => toggleFilter("Hair")}>hair</button>
      <button id="Makeup" className={styles.buttonSelected}  onClick={() => toggleFilter("Makeup")}>makeup</button>
      </div>
      <div className={styles.sortBy}>
      <span className={styles.textBold}>SORT BY</span>
      <button id="lowtohigh" className={styles.buttonTrans} onClick={sorting1}>price low to high</button>
      <button id="hightolow" className={styles.buttonTrans} onClick={sorting2}>price high to low</button>
      </div>
    </section>
    <div className={styles.buttonWrap}>
    <button className={styles.buttonApply} onClick={() => setFilters([...filtersToApply])}>Apply filters</button>
    </div>
    </div>
 
    
    <div className={styles.openFilter} onClick={showMask}>
      <span>filter and sort</span>
      <FaAngleDown className={styles.icon}/>
    </div>
      <div id="mask123" className={styles.mobFilter} style={{display: 'none'}}>
    <div className={styles.wrapper2}>
    <section className={styles.filter}>
      <div className={styles.filterBy2}>
      <span className={styles.textBold}>FILTER BY</span>
      <button id="Face" className={styles.buttonSelected} onClick={() => toggleFilter("Face")}>face</button>
      <button id="Body" className={styles.buttonSelected} onClick={() => toggleFilter("Body")}>body</button>
      <button id="Hair" className={styles.buttonSelected} onClick={() => toggleFilter("Hair")}>hair</button>
      <button id="Makeup" className={styles.buttonSelected}  onClick={() => toggleFilter("Makeup")}>makeup</button>
      </div>
      <div className={styles.sortBy2}>
      <span className={styles.textBold}>SORT BY</span>
      <button id="lowtohigh" className={styles.buttonTrans} onClick={sorting1}>price low to high</button>
      <button id="hightolow" className={styles.buttonTrans} onClick={sorting2}>price high to low</button>
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