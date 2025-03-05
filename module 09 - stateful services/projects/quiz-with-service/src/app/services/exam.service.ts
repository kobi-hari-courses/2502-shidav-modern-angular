import { computed, Injectable, signal } from '@angular/core';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { generateQuiz } from '../logic/exam.helper';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  readonly #questions = signal<Question[]>(generateQuiz(5));

  readonly #userAnswers = signal<number[]>([]);

  readonly questions = this.#questions.asReadonly();
  readonly userAnswers = computed(() => this.#userAnswers().map<Answer>((ans, index) => ({
    userAnswserIndex: ans, 
    isCorrect: ans === this.#questions()[index].correctAnswerIndex
  })));
  readonly currentQuestionIndex = computed(() => this.#userAnswers().length);
  readonly currentQuestion = computed(() => this.#questions()[this.currentQuestionIndex()]);
  readonly questionsCount = computed(() => this.#questions().length);
  readonly isQuizDone = computed(() => this.#userAnswers().length === this.questionsCount());
  readonly correctAnswers = computed(() => this.userAnswers().filter(ans => ans.isCorrect));
  readonly correctAnswersCount = computed(() => this.correctAnswers().length);
  readonly score = computed(() => Math.round(this.correctAnswersCount() / this.questionsCount() * 100));

  resetQuiz() {
    this.#userAnswers.set([]);
  }

  answerCurrentQuestion(answerIndex: number) {
    this.#userAnswers.update(answers => [...answers, answerIndex]);
  }

  startNewQuiz() {
    this.#questions.set(generateQuiz(5));
    this.resetQuiz();
  }
}
