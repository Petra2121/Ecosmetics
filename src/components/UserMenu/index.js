import React from 'react'
import styles from './style.module.css'

import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { BsBag } from "@react-icons/all-files/bs/BsBag";

const UserMenu = () => 
<section className={styles.icons}>
    <FaUser className={styles.icon}/>
    <BsBag className={styles.icon}/>   
</section>

export default UserMenu