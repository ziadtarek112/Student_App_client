import React from 'react'
import { Link } from 'react-router-dom'; 
import styles from './SideBar.module.css'
const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <Link to="/Announcements" className={styles.sidebarLink}>Announcements</Link>
            <Link to="/Quizzes" className={styles.sidebarLink}>Quizzes</Link>
        </div>
    )
}

export default SideBar