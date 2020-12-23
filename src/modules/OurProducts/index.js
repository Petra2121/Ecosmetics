import React from 'react'
import OurProductsBox from '../../components/OurProductsBox'

import styles from './style.module.css'

const text = `
While the performance of natural makeup used to pale in comparison to products from our favorite makeup 
counters, there are many natural makeup brands creating products that are richly pigmented, apply beautifully, 
and wear as well as their more synthetic competitors.`
 
const OurProducts = () => (
    <section className={styles.ourProducts}>
        <div className={styles.leftText}>
            <span>Our products</span>
            <p>{text}</p>
        </div>
        <div className={styles.boxes}>
            <OurProductsBox/>
            <OurProductsBox/>
            <OurProductsBox/>          
        </div>
    </section>
)
 
export default OurProducts