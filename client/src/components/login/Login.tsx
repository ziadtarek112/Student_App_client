import React from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.homePage}>
            <h1 className={styles.title}>Welcome to Our Website</h1>
            <p className={styles.paragraph}>Discover a world of endless possibilities as you explore our website. Whether you're seeking inspiration, information, or a touch of entertainment, we've got you covered. Our mission is to provide you with valuable content and resources that make your online journey enjoyable and informative</p>
            <button onClick={() => {navigate('/Quizzes') }} className={styles.loginButton}>Log In</button>
        </div>
    )
}
export default Login
