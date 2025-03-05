import { Component, inject } from '@angular/core';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-question-presenter',
  imports: [],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.scss'
})
export class QuestionPresenterComponent {
  readonly exam = inject(ExamService);
  readonly question = this.exam.currentQuestion;
}
