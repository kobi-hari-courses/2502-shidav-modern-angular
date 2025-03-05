import { Component, inject } from '@angular/core';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-quiz-status',
  imports: [],
  templateUrl: './quiz-status.component.html',
  styleUrl: './quiz-status.component.scss'
})
export class QuizStatusComponent {
  readonly exam = inject(ExamService);
  readonly answers = this.exam.userAnswers;

}
