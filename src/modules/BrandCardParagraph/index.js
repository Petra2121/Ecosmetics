import React from 'react'
import BrandCard from '../../components/BrandCard'

import styles from './style.module.css'

import FatAndMoon1 from '../../images/fat-and-the-moon-1.jpg'
import FatAndMoon2 from '../../images/fat-and-the-moon-2.jpg'
import NudiGoods1 from '../../images/nudi-goods-1.jpg'
import NudiGoods2 from '../../images/nudi-goods-2.jpg'

const BrandCardParagraph = () => (
  <section className={styles.brandCards}>

    <div className={styles.brands}>
        <BrandCard image1={FatAndMoon1} image2={FatAndMoon2} name="Fat and the moon" />
        <BrandCard image1={NudiGoods1} image2={NudiGoods2} name="Nudi goods" />
        {/* <BrandCard image1={Eyeshadow} image2={Shampoo} name="Phyto Pigment Eyeshadow" /> */}
    </div>

  </section>
)

export default BrandCardParagraph