import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};
export const QUESTION_SPORT: Question = {
  label: 'Qui a vole l\'orange du marchand',
  answers: [
    {
      value: 'patoche',
      isCorrect: false,
    },
    {
      value: 'Jason',
      isCorrect: true,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: 'Un',
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Acteur',
        questions: [QUESTION_ACTOR],
    },
    {
        id: 'Deux',
        name: 'Les Sports',
        theme: 'Sport',
        questions: [QUESTION_SPORT],
    }
];
