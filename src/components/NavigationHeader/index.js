import React from 'react'
import NavigationBar from '../NavigationBar'
import NavigationTop from '../NavigationTop'
import styles from './style.module.css'

const NavigationHeader = ({ activeTab }) => (
  <section className={styles.navigationHeader}>
    <NavigationTop />
    <NavigationBar activeTab={activeTab} />
  </section>
)

export default NavigationHeader