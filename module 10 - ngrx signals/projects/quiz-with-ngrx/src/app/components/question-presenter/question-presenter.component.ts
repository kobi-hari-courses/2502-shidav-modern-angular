import { Component, inject, signal } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuizStore } from '../../store/quiz.store';

@Component({
  selector: 'app-question-presenter',
  imports: [],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.scss'
})
export class QuestionPresenterComponent {
  readonly store = inject(QuizStore);
}
