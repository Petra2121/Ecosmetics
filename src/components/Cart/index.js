import React from 'react'
import styles from './style.module.css'
import {BsTrash} from '@react-icons/all-files/bs/BsTrash'
import shampoo from '../../images/products/artisan-soap1.jpg'

const Cart = ({showModalCart, setShowModalCart}) => {
    return (
        <>
        {showModalCart?(
  <section className={styles.cart} showModalCart={showModalCart}>
    <div className={styles.brownTop}></div>
    <div className={styles.wrapper}>
        <div className={styles.whiteBottom}>
            <span className={styles.myBag}>My bag (1)</span>
            <hr className={styles.line}></hr>
            <div className={styles.product}>
                <img className={styles.productImg} src={shampoo}/>
                <div className={styles.rightOfImg}>
                    <span className={styles.productName}>Artisan soap</span>
                    <div className={styles.productInfo}>
                        <span className={styles.productPrice}>9$</span>
                        <div className={styles.qtyIcon}>
                            <span className={styles.productQty}>1</span>
                            <BsTrash className={styles.icon}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={styles.line}></hr>
            <div className={styles.promoCodeDiv}>
                <span className={styles.promoCode}>Promo code</span>
                <div className={styles.promoCodeLine}></div>
                <button className={styles.promoCodeBtn}>Add</button>
            </div>
            <hr className={styles.line}></hr>
            <span className={styles.total}>Total 9$</span>
            <button className={styles.paymentBtn}>Proceed to payment</button>
        </div>
    </div>
  </section>
    ): null}
    </>
)}

export default Cart