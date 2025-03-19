import { patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { initialQuizSlice } from './quiz.slice';
import { computed, inject } from '@angular/core';
import { buildQuizViewModel } from './quiz.view-model';
import { answerCurrentQuestion, resetQuiz, setBusy, setIdle, startNewQuiz } from './quiz.updaters';
import { generateQuiz } from '../logic/exam.helper';
import { QuizGeneratorService } from '../services/quiz-generator.service';
export const QuizStore = signalStore(
    {providedIn: 'root'},
    withState(initialQuizSlice),
    withProps(store => ({
        _generator: inject(QuizGeneratorService)
    })),  
    withComputed(store => ({
        vm: computed(() => buildQuizViewModel(store.questions(), store.answers()))
    })),
    withMethods(store => ({
        resetQuiz: () => {
            patchState(store, resetQuiz());
        }, 
        startNewQuiz: async () => {
            patchState(store, setBusy());
            const questions = await store._generator.generateQuiz(5);
            patchState(store, startNewQuiz(questions), setIdle());
        },
        answerCurrentQuestion: (index: number) => {
            patchState(store, answerCurrentQuestion(index));
        },
    })), 
    withHooks(store => ({
        onInit: () => store.startNewQuiz()
    }))
)