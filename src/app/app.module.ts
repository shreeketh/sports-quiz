import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizQuestionService } from './quiz-question.service'

import { AppComponent } from './app.component';
import { GraphComponentComponent } from './graph-component/graph-component.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { QuestionSectionComponent } from './question-section/question-section.component'

@NgModule({
  declarations: [
    AppComponent,
    GraphComponentComponent,
    QuestionSectionComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  providers: [QuizQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
