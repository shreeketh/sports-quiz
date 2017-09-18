import { Component, OnInit } from '@angular/core';
import { QuizQuestionService } from '../quiz-question.service'

@Component({
	selector: 'app-question-section',
	templateUrl: './question-section.component.html',
	styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit {
	questionClass: any = false;
	answers: any = [];
	disableBtn: boolean = true;
	validated: boolean = false;
	statistics = [2, 3];
	questionData: any = {};
	// questionData: any = {
	// 	"sports": [{
	// 		"question": "what is your name?",
	// 		"options": ["x", "keth", "mani", "unknown"],
	// 		"answer": "keth",
	// 	},
	// 	{
	// 		"question": "what is your name1?",
	// 		"options": ["shree2", "keth", "mani", "unknown"],
	// 		"answer": "shree",
	// 	},
	// 	{
	// 		"question": "what is your name2?",
	// 		"options": ["shree3", "keth", "mani", "unknown"],
	// 		"answer": "shree",
	// 	},
	// 	{
	// 		"question": "what is your name3?",
	// 		"options": ["shree4", "keth", "mani", "unknown"],
	// 		"answer": "keth",
	// 	},
	// 	]
	//}
	constructor(public questionService: QuizQuestionService) { }

	ngOnInit() {
		this.questionData = this.questionService.getQuestions();
	}
	addTodo() {
		debugger;
		let correctAnser = 0;
		let wrongAnswer = 0;
		this.questionClass = this.questionClass ? false : true;
		this.validated = true;
		for (let temp = 0; temp < this.answers.length; temp++) {
			if (this.answers[temp] == this.questionData.sports[temp].answer) correctAnser++;
		}
		wrongAnswer = this.answers.length - correctAnser;
		this.statistics[1] = correctAnser;
		this.statistics[0] = wrongAnswer;
	}

	answerSelected() {
		this.disableBtn = this.isAllQuestionsAnswered();
	}

	isAllQuestionsAnswered() {
		if (!this.answers || (this.answers.length < this.questionData.sports.length)) return true;
		for (let temp = 0; temp < this.answers.length; temp++) {
			if (!this.answers[temp]) return true;
		}
		return false;
	}

	resetValues() {
		this.answers = [];
		this.disableBtn = true;
	}

}
