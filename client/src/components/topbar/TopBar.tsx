import React from 'react'
import styles from './TopBar.module.css'
import { Link } from 'react-router-dom'
const TopBar = () => (
    <div className={styles.container}>
        <Link to="/">  <h1>Zschool</h1></Link>

    </div>
)


export default TopBar