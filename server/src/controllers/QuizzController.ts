import  express  from 'express';
import Quizz from "../models/QuizzModel"

export const getQuizz = async (req :express.Request, res : express.Response, next :express.NextFunction) => {
    try {
        const quizzes = await Quizz.find();
        res.status(200).json(quizzes)
    }
    catch (error : any) {
        res.status(500).json({ error: error.message })
    }
}


export const getQuizzById = async (req :express.Request, res : express.Response, next :express.NextFunction) => {
    try {
        const quizz = await Quizz.findById(req.params.id);
        if (!quizz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        res.status(200).json(quizz);
    }
    catch (error : any) {
        res.status(500).json({ error: error.message })
    }
}
export const updateQuizz = async (req :express.Request, res : express.Response, next :express.NextFunction) => {
    try {
        const updatedQuizz = await Quizz.findByIdAndUpdate(req.params.id);
        if (!updatedQuizz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        res.status(200).json(updatedQuizz);
    }
    catch (error : any) {
        res.status(500).json({ error: error.message })
    }
}

export const addQuizz = async (req :express.Request, res : express.Response, next :express.NextFunction) => {
    try {
        const newQuiz =await Quizz.create(req.body);
        res.status(201).json(newQuiz);
    }
    catch (error : any) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteQuizz = async (req :express.Request, res : express.Response, next :express.NextFunction) => {
    try {
        const deletedQuizz = await Quizz.findByIdAndDelete(req.params.id);
        if (!deleteQuizz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        res.status(204).json({
            status : 'sucsses',
            data : null
        });
    }
    catch (error : any) {
        res.status(500).json({ error: error.message })
    }
}
