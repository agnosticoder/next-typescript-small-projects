// Credit for the trivia questions go to: https://www.funtrivia.com/
export interface Question{
    id: number;
    text: string;
    answer: string;
    wrongAnswers: string[];
};

const questions: Question[] = [
    {
        id: 1,
        text: 'What is the full birth name of Boy George?',
        answer: "George Alan O'Dowd",
        wrongAnswers: ['George Phillips', 'Johnny Cash', 'Bill Freud'],
    },
    {
        id: 2,
        text: 'According to legend, which plant screams when the root is dug up?',
        answer: 'Mandrake',
        wrongAnswers: ['Daisy', 'Potato', 'Jasmine'],
    },
    {
        id: 3,
        text: 'What fruit appears on the first screen in the original "Pac-Man" arcade game?',
        answer: 'Cherry',
        wrongAnswers: ['Apple', 'Kiwi', 'Banana'],
    },
];

export default questions;