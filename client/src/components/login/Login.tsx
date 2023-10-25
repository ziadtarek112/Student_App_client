import React from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/authSlice';
import Button from '../button/Button';
import { useTranslation } from 'react-i18next';


const Login = () => {
    const{t} = useTranslation();
    const dispatch = useDispatch();

    const handelLogin = () => {
        dispatch(logIn());
    }

    return (
        <div className={styles.homePage}>
            <h1 className={styles.title}>{t('welcomeMessage')}</h1>
            <p className={styles.paragraph}>{t('welcomeDescription')}</p>
            <Button text={t('loginButton')} clickHandler={handelLogin}/>
        </div>
    )
}
export default Login
