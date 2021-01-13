import React from 'react'
import {myLocalStorage} from '../../components/helper'
 
import styles from './style.module.css'

const LoginModal = ({showModal, setShowModal}) => {    
    return(
    <>
        {showModal?(
            <section className={styles.loginModal}>
                Login
            </section>
        ):null}
        
    </>
  )}
  
  export default LoginModal