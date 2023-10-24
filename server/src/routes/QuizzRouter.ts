import { Router } from "express";
import { addQuizz, deleteQuizz, getQuizz, getQuizzById, updateQuizz } from "../controllers/QuizzController";

const quizRouter = Router();

quizRouter.get('/', getQuizz);
quizRouter.get('/:id', getQuizzById);
quizRouter.post('/', addQuizz);
quizRouter.patch('/:id', updateQuizz);
quizRouter.delete('/:id', deleteQuizz);

export default quizRouter;