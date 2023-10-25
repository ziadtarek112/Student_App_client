import React from 'react'
import styles from './TopBar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../store/authSlice'
import { useTranslation } from 'react-i18next';
const TopBar = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state['auth']['isLoggedIn']);
    const logouthandler = () => {
        dispatch(logOut());
        navigate('/');
    }
    return (
        <div className={auth ? styles.containerAuth : styles.container}>
          
            <Link className={auth ? styles.titleAuth : styles.title} to="/">  <h1 >{t('title')}</h1></Link>
            {auth && <div className={styles.buttonContainer}><Button text={t('logout')} clickHandler={logouthandler} /></div>}
        </div>
    )
}


export default TopBar