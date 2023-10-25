import React from 'react'
import styles from './Button.module.css'
const Button = ({text,clickHandler}) => {
    return (
        <button className={styles.ButtonStyle} onClick={clickHandler}>{text}</button>
    )
}

export default Button