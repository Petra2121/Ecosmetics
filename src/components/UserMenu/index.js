import React, {useState} from 'react'
import LoginModal from "../LoginModal"
import {myLocalStorage} from '../../components/helper'
import styles from './style.module.css'

import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { BsBag } from "@react-icons/all-files/bs/BsBag";
import {IoLogOutOutline} from "@react-icons/all-files/io5/IoLogOutOutline"

const UserMenu = () => {
    const [showModal, setShowModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(!!myLocalStorage.getItem("loggedIn"))
    
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (<section className={styles.icons}>
        <button onClick={() => {
            openModal();
          }} className={styles.btn}>
            {loggedIn ? 
            <FaUser className={styles.icon}/> : <IoLogOutOutline onClick={loggedIn ? () => myLocalStorage.removeItem('loggedIn') : () => {}} className={styles.icon}/>}
            </button>
        <BsBag className={styles.icon}/>

        <LoginModal showModal={showModal} setShowModal={setShowModal} setLoggedIn={setLoggedIn}/>
    </section>
    )
}

export default UserMenu