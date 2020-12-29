import React from 'react'
import BrandCard from '../../components/BrandCard'

import styles from './style.module.css'

import FatAndMoon1 from '../../images/fat-and-the-moon-1.jpg'
import FatAndMoon2 from '../../images/fat-and-the-moon-2.jpg'
import NudiGoods1 from '../../images/nudi-goods-1.jpg'
import NudiGoods2 from '../../images/nudi-goods-2.jpg'
import SeaWitch1 from '../../images/sea-witch-1.jpg'
import SeaWitch2 from '../../images/sea-witch-2.jpg'
import DabHerb1 from '../../images/dab-herb-1.jpg'
import DabHerb2 from '../../images/dab-herb-2.jpg'
import DirtyHippie1 from '../../images/dirty-hippie-1.jpg'
import DirtyHippie2 from '../../images/dirty-hippie-2.jpg'
import BodyShop1 from '../../images/body-shop-1.jpg'
import BodyShop2 from '../../images/body-shop-2.jpg'


const BrandCardParagraph = () => (

  <section className={styles.brandCards}>

    <div className={styles.brands}>
        <BrandCard image1={FatAndMoon1} image2={FatAndMoon2} name="Fat and the moon" />
        <BrandCard image1={NudiGoods1} image2={NudiGoods2} name="Nudi goods" />
        <BrandCard image1={SeaWitch1} image2={SeaWitch2} name="Sea witch botanicals" />
        <BrandCard image1={DabHerb1} image2={DabHerb2} name="Dab herb make-up" />
        <BrandCard image1={DirtyHippie1} image2={DirtyHippie2} name="Dirty hippie cosmetics" />
        <BrandCard image1={BodyShop1} image2={BodyShop2} name="The body shop" />
    </div>

  </section>
)

export default BrandCardParagraph