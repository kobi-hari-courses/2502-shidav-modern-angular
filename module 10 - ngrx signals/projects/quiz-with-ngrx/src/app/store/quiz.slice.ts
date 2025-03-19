import { generateQuiz } from "../logic/exam.helper";
import { Question } from "../models/question.model";

export interface QuizSlice {
    readonly questions: Question[];
    readonly answers: number[];
    readonly isBusy: boolean;
}

export const initialQuizSlice: QuizSlice = {
    isBusy: false,
    questions: [], 
    answers: []
}