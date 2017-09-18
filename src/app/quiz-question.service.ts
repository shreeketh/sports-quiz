import { Injectable } from '@angular/core';

@Injectable()
export class QuizQuestionService {

  constructor() { }

  getQuestions(){
    return {"sports": [{
			"question": "Which was the 1st non Test playing country to beat India in an international match?",
			"options": ["Canada", "Sri Lanka", "Zimbabwe", "East Africa"],
			"answer": "Sri Lanka",
		},
		{
			"question": "Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?",
			"options": ["Two", "Three", "Four", "Eight"],
			"answer": "Four",
		},
		{
			"question": "Which county did Ravi Shastri play for?",
			"options": ["Glamorgan", "Leicestershire", "Gloucestershire", "Lancashire"],
			"answer": "Glamorgan",
		},
		{
			"question": "Who is the first Indian woman to win an Asian Games gold in 400m run?",
			"options": ["M.L.Valsamma", "P.T.Usha", "Kamaljit Sandhu", "K.Malleshwari"],
			"answer": "Kamaljit Sandhu",
		},
    ]
    }
  }

}
