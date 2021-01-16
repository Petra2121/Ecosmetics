import React from 'react'
import styles from './style.module.css'

import ImageLoader from '../ImageLoader'
import {db, TABLE_NAMES} from '../../data/db'


const OneProduct = ({location}) => {

  const query = location.search
  if (query.length === 0) {
    return <div>
      No product selected
    </div>
  }
  const btnId = query.split('?')[1].split("=")[1] // radi samo ako je jedan query parametar
  const item = db.getSingleObjectWhere(TABLE_NAMES.PRODUCTS, el => el.btn === btnId)

  return (
    <div className={styles.adjHeight}>
        <div className={styles.wrapper}>
          <div className={styles.maindiv}>
            <div className={styles.pictures}>
              <div className={styles.twopictures}>
                <ImageLoader
                  imageName={item.img2}
                  className={styles.img2}
                  alt={item.alt}
                />

                <ImageLoader
                  imageName={item.img3}
                  className={styles.img3}
                  alt={item.alt}
                />
              </div>

              <div className={styles.rightpicture}>
                <ImageLoader
                  imageName={item.img}
                  className={styles.img1}
                  alt={item.alt}
                />
              </div>
            </div>

            <div className={styles.informationpart}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.number}>{item.price}$</span>
              <button className={styles.btn}>Add to bag</button>
            </div>
          </div>

          <div className={styles.about}>
            <div className={styles.details}>
              <span className={styles.heading}>Details</span>
              <div className={styles.text}>{item.details}</div>
            </div>

            <div className={styles.ingredients}>
              <span className={styles.heading}>Ingredients</span>
              <div className={styles.text}>{item.ingredients}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

  export default OneProduct
