import React from 'react'
import OurProductsBox from '../../components/OurProductsBox'

import vegan from '../../images/vegan.png'
import organic from '../../images/organic.png'
import crueltyfree from '../../images/cruelty-free.png'

import styles from './style.module.css'

const ourProductsText = `
While the performance of natural makeup used to pale in comparison to products from our favorite makeup 
counters, there are many natural makeup brands creating products that are richly pigmented, apply beautifully, 
and wear as well as their more synthetic competitors.`

const firstText = `Our vegan customers have many options to choose from.`

const secondText = `Each ingredient is natural and organically farmed.`

const thirdText = `All of our brands are cruelty free!`

const OurProducts = () => (
    <section className={styles.ourProducts}>
        <div className={styles.leftText}>
            <span>Our products</span>
            <p>{ourProductsText}</p>
        </div>
        <div className={styles.boxes}>
            <OurProductsBox image={vegan} title="Vegan" text={firstText} />
            <OurProductsBox image={organic} title="Natural ingredients" text={secondText} />
            <OurProductsBox image={crueltyfree} title="Cruelty free" text={thirdText} />          
        </div>
    </section>
)

 
export default OurProducts