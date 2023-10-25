import React from 'react'
import styles from './Card.module.css'
const Card = ({title, children, cont }) => {
    return (
        <div  className={cont ? styles.containerAnnoucement : styles.containerQuiz}>
            <div className={styles.topbar}>
                <h1>{title}</h1>
                <h4>All</h4>
            </div>
            <div className={styles.cardContent}>
                {children}
            </div>
        </div>
    )
}

export default Card