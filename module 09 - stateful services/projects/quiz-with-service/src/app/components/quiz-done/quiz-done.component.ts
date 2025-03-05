import { Component, inject } from '@angular/core';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-quiz-done',
  imports: [],
  templateUrl: './quiz-done.component.html',
  styleUrl: './quiz-done.component.scss'
})
export class QuizDoneComponent {
  readonly exam = inject(ExamService);

  readonly questionsCount = this.exam.questionsCount;
  readonly correctAnswers = this.exam.correctAnswersCount;
  readonly score = this.exam.score;

}
