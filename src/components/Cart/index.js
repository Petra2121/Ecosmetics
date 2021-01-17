import React from 'react'
import styles from './style.module.css'

const Cart = () => (
  <section className={styles.cart}>
    <div></div>
    <div>
        <span>My bag (1)</span>
        <hr className={styles.line}></hr>
        <div>
            <img/>
            <div>
                <span>Strawberry glossing shampoo</span>
                <div>
                    <span>16$</span>
                    <div>
                        <span>1</span>
                        {/* ikona */}
                    </div>
                </div>
            </div>
        </div>
        <hr className={styles.line}></hr>
        <div>
            <span>Promo code</span>
            <div></div>
            <button></button>
        </div>
        <hr className={styles.line}></hr>
        <span>Total 500$</span>
        <button>Proceed to payment</button>
    </div>
  </section>
)

export default Cart