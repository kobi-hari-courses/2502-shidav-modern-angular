import { Component, inject, signal } from '@angular/core';
import { QuestionPresenterComponent } from "./components/question-presenter/question-presenter.component";
import { QuizDoneComponent } from "./components/quiz-done/quiz-done.component";
import { QuizStatusComponent } from "./components/quiz-status/quiz-status.component";
import { QuizStore } from './store/quiz.store';

@Component({
  selector: 'app-root',
  imports: [QuestionPresenterComponent, QuizDoneComponent, QuizStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly store = inject(QuizStore);
}
