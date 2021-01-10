import React from 'react'
import styles from './style.module.css'

import ImageLoader from '../ImageLoader'
import {db, TABLE_NAMES} from '../../data/db'

const BrandIntroduction = ({location}) => {

  const query = location.search
  if (query.length === 0) {
    return <div>
      No product selected
    </div>
  }
  const btnId = query.split('?')[1].split("=")[1] // radi samo ako je jedan query parametar
  const item = db.getSingleObjectWhere(TABLE_NAMES.BRANDS, el => el.btn === btnId)

  
  return (
    <div className={styles.adjHeight}>
      <div className={styles.wrapper}>
        <section className={styles.brandIntro}>
          <span className={styles.headingText}>{item.name}</span>
          <span className={styles.smallText1}>{item.text1}</span>
          <span className={styles.smallText2}>{item.text2}</span>
        </section>
        <div className={styles.threeImages}>
          <ImageLoader
            imageName={item.img3}
            className={styles.img3}
            alt={item.alt}
          />
          <ImageLoader
            imageName={item.img4}
            className={styles.img4}
            alt={item.alt}
          />
          <ImageLoader
            imageName={item.img5}
            className={styles.img5}
            alt={item.alt}
          />
        </div>
      </div>
    </div>
  )

}

export default BrandIntroduction