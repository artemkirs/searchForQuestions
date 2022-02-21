import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from './service/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searchForQuestions';
  titleQuestion: string = "";
  questions: any;

  constructor(private http: QuestionService){

  }

  search(){
    this.http.get(this.titleQuestion).subscribe((questions) => {
      this.questions = questions;
      console.log(questions);
    }); 
  }
}
