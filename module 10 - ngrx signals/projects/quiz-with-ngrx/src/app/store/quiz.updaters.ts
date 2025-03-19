import { PartialStateUpdater } from "@ngrx/signals";
import { QuizSlice } from "./quiz.slice";
import { Question } from "../models/question.model";

export function resetQuiz(): PartialStateUpdater<QuizSlice> {
    return _ => ({
        answers: []
    })
}

export function startNewQuiz(questions: Question[]): PartialStateUpdater<QuizSlice> {
    return _ => ({
        answers: [], 
        questions
    })
}

export function answerCurrentQuestion(userAnswer: number): PartialStateUpdater<QuizSlice> {
    return state => ({
        answers: [...state.answers, userAnswer]
    })
}

export function setBusy(): PartialStateUpdater<QuizSlice> {
    return _ => ({
        isBusy: true
    })
}

export function setIdle(): PartialStateUpdater<QuizSlice> {
    return _ => ({
        isBusy: false
    })
}