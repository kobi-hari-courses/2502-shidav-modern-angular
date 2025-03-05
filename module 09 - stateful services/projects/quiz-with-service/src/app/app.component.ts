import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionPresenterComponent } from "./components/question-presenter/question-presenter.component";
import { ExamService } from './services/exam.service';
import { QuizDoneComponent } from "./components/quiz-done/quiz-done.component";
import { QuizStatusComponent } from "./components/quiz-status/quiz-status.component";

@Component({
  selector: 'app-root',
  imports: [QuestionPresenterComponent, QuizDoneComponent, QuizStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly exam = inject(ExamService);
}
