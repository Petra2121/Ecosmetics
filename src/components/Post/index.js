import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'
import Img from "gatsby-image"

const Post = ({title, author, path, date, body, fluid}) => {
    return(
    <Link to={path}>
    <div className={styles.blogCard}>

    <Img 
        className={styles.blogImg}
        fluid={fluid}
    />
    
    <div className={styles.cardBottom}>
        <span className={styles.blogName}>{title}</span>
        <hr className={styles.line}></hr>
        <span className={styles.blogAuthor}>Author: {author}</span>
        <span className={styles.blogAuthor}>{date}</span>
    </div>
    </div>
    </Link>

    )

}

export default Post