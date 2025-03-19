import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { generateQuiz } from '../logic/exam.helper';

@Injectable({
  providedIn: 'root'
})
export class QuizGeneratorService {

  generateQuiz(level: number): Promise<Question[]> {
    const questions = generateQuiz(level);
    return new Promise<Question[]>(res => {
      setTimeout(() => res(questions), 3000);
    })
  }

  constructor() { }
}
