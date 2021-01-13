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
        <FaUser className={styles.icon}/>
        <BsBag className={styles.icon}/>   
    </section>
    )
}

export default UserMenu