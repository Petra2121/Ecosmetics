import React from 'react'
import {myLocalStorage} from '../../components/helper'
 
import styles from './style.module.css'

const LoginModal = ({showModal, setShowModal}) => {    
    return(
    <>
        {showModal?(
            <div className={styles.background}>
                <section className={styles.loginModal}>

                    <section className={styles.field}>
                        <input name="username" placeholder="Username"/>
                    </section>

                    <section className={styles.field}>
                        <input name="password" placeholder="Password"/>
                    </section>

                    <button className={styles.loginButton}> Login
                    </button>

                </section>
                <button className={styles.btn} onClick={() => setShowModal(prev => !prev)}>Close</button>
            </div>
        ):null}
        
    </>
  )}
  
  export default LoginModal