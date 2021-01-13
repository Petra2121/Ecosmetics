import React, {useState} from 'react'
import styles from './style.module.css'

import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { BsBag } from "@react-icons/all-files/bs/BsBag";

const UserMenu = () => {
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (<section className={styles.icons}>
        <button onClick={openModal} className={styles.btn}><FaUser className={styles.icon}/></button>
        <BsBag className={styles.icon}/>
        {/* modal za login */}
    </section>
    )
}

export default UserMenu