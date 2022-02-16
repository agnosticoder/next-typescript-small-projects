import questions from "../../lib/questions";
import useQuiz from "./hooks/useQuiz";

const App = () => {

    const { answers, correct, option, question, showScore, onStartAgain, onSubmit, setOption } = useQuiz({ questions });

    return (
        <div>
            <h1>Quiz App</h1>
            {showScore ? (
                <div>
                    Here is your score: {correct}
                    <button onClick={onStartAgain}>Start Again</button>
                </div>
            ) : (
                <div>
                    {!question && <button onClick={onSubmit}>Start Quiz</button>}
                    {question && (
                        <div>
                            <div>{question}</div>
                            <select value={option} onChange={(e) => setOption(e.currentTarget.value)}>
                                {answers.map((answer, i) => (
                                    <option value={answer} key={i}>
                                        {answer}
                                    </option>
                                ))}
                            </select>
                            <button onClick={onSubmit}>Submit</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
