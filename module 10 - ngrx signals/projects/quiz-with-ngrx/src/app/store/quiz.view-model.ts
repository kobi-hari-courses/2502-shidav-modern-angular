import { Answer } from "../models/answer.model";
import { Question } from "../models/question.model";
import { QuizSlice } from "./quiz.slice";

export interface QuizViewModel {
    readonly currentQuestionIndex: number;
    readonly currentQuestion: Question;
    readonly questionsCount: number;
    readonly isQuizDone: boolean;
    readonly userAnswers: Answer[];
    readonly correctAnswersCount: number;
    readonly score: number;
}

export function buildQuizViewModel(questions: Question[], answers: number[]): QuizViewModel {
    const currentQuestionIndex = answers.length;
    const currentQuestion = questions[currentQuestionIndex];
    const questionsCount = questions.length;
    const isQuizDone = currentQuestionIndex >= questionsCount;
    const userAnswers = answers.map<Answer>((ans, index) => ({
        userAnswserIndex: ans, 
        isCorrect: ans === questions[index].correctAnswerIndex
      }));

    const correctAnswersCount = userAnswers.filter(ans => ans.isCorrect).length;
    const score = correctAnswersCount / questionsCount * 100;

    return {
        currentQuestionIndex,
        currentQuestion,
        questionsCount,
        isQuizDone,
        userAnswers,
        correctAnswersCount,
        score
    }


}