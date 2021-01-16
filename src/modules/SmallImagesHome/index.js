import React from 'react'
import styles from './style.module.css'
import FirstSmallImage from '../../components/ImagesHome/FirstSmallImage'
import SecondSmallImage from '../../components/ImagesHome/SecondSmallImage'
import { Link } from 'gatsby'

const SmallImagesHome = () => 
    <section className={styles.smallImagesHome}>
        <div className={styles.leftImage}>
            <FirstSmallImage />
            <Link to="/brands">
                <button className={styles.btn}>Shop brands</button>
            </Link>
        </div>
        <div className={styles.rightImage}>
            <SecondSmallImage />
            <Link to="/blog">
                <button className={styles.btn}>View Blog</button>
            </Link>
    </div>
</section>
 
export default SmallImagesHome