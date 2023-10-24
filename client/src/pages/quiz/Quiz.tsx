import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizzes } from '../../store/quizSlice';
import styles from './Quiz.module.css'
const Quiz = () => {
    const dispatch = useDispatch();
    const quizzes = useSelector((state) => state['quiz']['quizzes']);
    console.log(quizzes);

    useEffect(() => {
        dispatch(fetchQuizzes())
    }, [])

    return (
        <div className={styles.container}>

            <div className={styles.quizzConainer}>
                {quizzes.map((quiz) => quiz.quizzTitle)}

            </div>
        </div>

    )
}

export default Quiz