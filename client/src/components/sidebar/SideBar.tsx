import React from 'react'
import { Link } from 'react-router-dom'; 
import styles from './SideBar.module.css'
import { useTranslation } from 'react-i18next';
const SideBar = () => {
    const{t} = useTranslation();
    return (
        <div className={styles.sidebar}>
            <Link to="/Announcements" className={styles.sidebarLink}>{t('announcements')}</Link>
            <Link to="/Quizzes" className={styles.sidebarLink}>{t('quizzes')}</Link>
        </div>
    )
}

export default SideBar