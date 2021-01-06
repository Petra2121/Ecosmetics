import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'
import Img from "gatsby-image"

const Post = ({title, author, slug, date, body, fluid}) => {
    return(
    <Link to={slug}>
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