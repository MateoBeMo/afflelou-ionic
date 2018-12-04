import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../../shared/services/quiz.service';
import { HelperService } from '../../../shared/services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../../../shared/classes/index';
import { Route } from '@angular/router/src/config';
import { RespuestaService } from '../../../shared/services/respuesta.service';
import { Respuesta } from '../../interfaces/respuesta';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent implements OnInit {

  respuestas: Respuesta[] = [];
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': false,
    'allowReview': false,
    'autoMove': true,  // if true, it will move to next question automatically when answered.
    'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(private quizService: QuizService, private router: Router, private respuestaService: RespuestaService) { }

  ngOnInit() {
    if (!this.respuestaService.seleccionado) {
      this.router.navigate(['quiz/approval-quiz']);
    } else {
      this.quizes = this.quizService.getAll();
      this.quizName = this.quizes[0].id;
      this.loadQuiz(this.quizName);
    }
  }

  loadQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
    });
    this.mode = 'quiz';
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    //  if (question.questionTypeId === 1) {
    //    question.options.forEach((x) => { if (x.id !== option.id) { x.selected = false; } });
    //  }
    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    } else {
      const answers = [];
      this.quiz.questions
      .forEach(x => answers.push({'idPregunta': x.id, 'namePregunta': x.name, 'idRespuesta': x.options.find( o => o.selected).id, 'nameRespuesta': x.options.find( o => o.selected).name }));
      answers.forEach( a => {
        a.visto = false;
        if ( a.idRespuesta === 1055 || a.idRespuesta === 1056 || a.idRespuesta === 1057 ) {
          a.valoracion = 'Negativa';
        } else {
          a.valoracion = 'Positiva';
        }
      });
      const date = new Date().toLocaleString();
      // console.log(date.getMonth());
      console.log(answers);
      this.respuestaService.upload2( date, answers);
      this.mode = 'result';
    }
  }

  // isAnswered(question: Question) {
  //   return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  // }

  onSubmit() {
    const answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.quiz.questions);
    // const respuesta = this.quiz.questions.filter(q => q.options = q.options. );
    this.mode = 'result';
  }
  salir(): void {
    this.router.navigate(['/quiz']);
  }
}

