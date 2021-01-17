import React, {useState} from 'react'
import LoginModal from "../LoginModal"
import Cart from "../Cart"
import {myLocalStorage} from '../../components/helper'
import styles from './style.module.css'

import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { BsBag } from "@react-icons/all-files/bs/BsBag";
import {IoLogOutOutline} from "@react-icons/all-files/io5/IoLogOutOutline"

const UserMenu = () => {
    const [showModal, setShowModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(!!myLocalStorage.getItem("loggedIn"))
    const [error, setError] = useState(false)

    const[showModalCart, setShowModalCart] = useState(false);
    
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const openModalCart = () => {
        setShowModalCart(prev => !prev);
    };

    const handleIconClick = e => {
        if (loggedIn) {
            e.stopPropagation()
            myLocalStorage.removeItem("loggedIn")
            setLoggedIn(false)
            setError('')
        }
    };

    return (<section className={styles.icons}>
       <button onClick={() => {
            openModal();
          }} className={styles.btn}>
            {!loggedIn 
            ? <FaUser onClick={handleIconClick} className={styles.iconLogin}/>
            : <IoLogOutOutline onClick={handleIconClick} className={styles.iconLogout}/>}
            </button>

        <button onClick={() => {
            openModalCart();
          }} className={styles.btn}>
            <BsBag onClick={!showModalCart ? () => setShowModalCart(true) : () => {}} className={styles.icon2}/>
        </button>

        {/* <BsBag className={styles.icon2}/> */}
        <LoginModal showModal={showModal} setShowModal={setShowModal} setLoggedIn={setLoggedIn} setError={setError} error={error}/>
        <Cart showModalCart={showModalCart} setShowModalCart={setShowModalCart}/>
    </section>
    )
}

export default UserMenu