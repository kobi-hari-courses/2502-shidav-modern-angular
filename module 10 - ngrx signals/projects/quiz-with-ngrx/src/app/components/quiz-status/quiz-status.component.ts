import { Component, inject, signal } from '@angular/core';
import { Answer } from '../../models/answer.model';
import { QuizStore } from '../../store/quiz.store';

@Component({
  selector: 'app-quiz-status',
  imports: [],
  templateUrl: './quiz-status.component.html',
  styleUrl: './quiz-status.component.scss'
})
export class QuizStatusComponent {
  readonly store = inject(QuizStore);

}
