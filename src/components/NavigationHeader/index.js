import React from 'react'
import NavigationBar from '../NavigationBar'
import NavigationTop from '../NavigationTop'
import styles from './style.module.css'

const NavigationHeader = () => (
  <section className={styles.navigationHeader}>
    <NavigationTop />
    <NavigationBar />
  </section>
)

export default NavigationHeader