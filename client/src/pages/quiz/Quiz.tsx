import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizzes } from '../../store/quizSlice';
import styles from './Quiz.module.css'
import Card from '../../components/card/Card';
const Quiz = () => {
    const dispatch = useDispatch();
    const quizzes = useSelector((state) => state['quiz']['quizzes']);

    useEffect(() => {
        dispatch(fetchQuizzes())
    }, [dispatch])

    return (
        <div className={styles.container}>


            {quizzes.map((quiz) => <Card title="Quiz due" >
                <div className={styles.quizContent}>
                    <h2>{quiz.title}</h2>
                    <p>Course : {quiz.courseName}</p>
                    <p>Topic : {quiz.topic}</p>
                    <p>Due to : {new Date(quiz.dueDate).toISOString()}</p>

                </div>

            </Card>)}

        </div>


    )
}

export default Quiz