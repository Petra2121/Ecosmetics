import React from 'react'
import styles from './style.module.css'
import FirstSmallImage from '../../components/ImagesHome/FirstSmallImage'
import SecondSmallImage from '../../components/ImagesHome/SecondSmallImage' 

const SmallImagesHome = () => <section className={styles.smallImagesHome}>
    <div className={styles.leftImage}>
        <button>Shop brands</button>
        <FirstSmallImage />
    </div>
    <div className={styles.rightImage}>
        <SecondSmallImage />
        <button>View Blog</button>
    </div>
</section>
 
export default SmallImagesHome