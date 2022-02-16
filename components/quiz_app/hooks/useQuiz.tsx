import { useEffect, useState } from 'react';
import { Question } from '../../../lib/questions';

interface UseQuizProps {
    questions: Question[];
}

const useQuiz = ({ questions }: UseQuizProps) => {
    const [index, setIndex] = useState<number>(0);
    const [question, setQuestion] = useState<string>('');
    const [option, setOption] = useState<string>();
    const [answers, setAnswers] = useState<string[]>([]);
    const [showScore, setShowScore] = useState<boolean>(false);
    const [correct, setCorrect] = useState<number>(0);

    const onSubmit = (): void => {
        if (option) {
            if (option === questions[index - 1].answer) {
                setCorrect(correct + 1);
            }
        }

        if (index >= questions.length) {
            setShowScore(true);
            return;
        }

        setQuestion(questions[index].text);
        setAnswers([questions[index].answer, ...questions[index].wrongAnswers]);
        setIndex(index + 1);
    };

    useEffect(() => {
        if (answers.length > 0) {
            setOption(answers[0]);
        }
    }, [answers]);

    const onStartAgain = (): void => {
        setIndex(0);
        setQuestion('');
        setOption(undefined);
        setAnswers([]);
        setShowScore(false);
        setCorrect(0);
    };

    return {question, answers, option, showScore, correct, onStartAgain, onSubmit, setOption}

};

export default useQuiz;
