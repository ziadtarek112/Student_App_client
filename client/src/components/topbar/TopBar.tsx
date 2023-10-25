import React from 'react'
import styles from './TopBar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../button/button'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/authSlice'
import { useTranslation } from 'react-i18next';
const TopBar = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logouthandler = () => {
        dispatch(logOut());
        navigate('/');
    }
    return (
        <div className={styles.container}>
            <Link to="/">  <h1>{t('title')}</h1></Link>
            <Button text={t('logout')} clickHandler={logouthandler} />
        </div>
    )
}


export default TopBar