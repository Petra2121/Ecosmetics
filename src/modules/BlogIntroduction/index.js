import React from 'react'
import styles from './style.module.css'

const text = `This blog is created to not only bring you the latest news 
from eco-cometics but to make it fun and easy to find skincare tips, the 
latest beauty trends, seasonal inspiration ideas, the list is really endless. 
And as always we are completely open to any ideas or suggestions you may have.`


const BlogIntroduction = () => (
  <section className={styles.blogIntro}>
    <span className={styles.headingText}>Blog</span>
    <span className={styles.smallText}>{text}</span>
    <hr className={styles.line}></hr>
  </section>
)

export default BlogIntroduction