import React from 'react'
import styles from './style.module.css'

import ImageLoader from '../ImageLoader'
import {db, TABLE_NAMES} from '../../data/db'

const BrandSpecifics = ({location}) => {

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
        <div className={styles.images}>
          <ImageLoader
            imageName={item.img6}
            className={styles.img6}
            alt={item.alt}
          />
        </div>
        <div className={styles.threeParagraphs}>
          <span className={styles.smallText}>{item.text3}</span>
          <hr className={styles.line}></hr>
          <span className={styles.smallText}>{item.text4}</span>
          <hr className={styles.line}></hr>
          <span className={styles.smallText}>{item.text5}</span>
        </div>
        <div className={styles.images}>
          <ImageLoader
            imageName={item.img7}
            className={styles.img7}
            alt={item.alt}
          />
        </div>
      </div>
    </div>
  )

}

export default BrandSpecifics