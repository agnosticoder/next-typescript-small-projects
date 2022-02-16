import { MouseEventHandler, useState } from "react";
import styles from '../../styles/modules/Todo.module.scss';

interface Todo {
    id: string,
    title: string,
    done: boolean
}

const init:Todo[] = [{title: 'Test', done: false, id: Date.now().toString()}]

const App = () => {
    const [store, setStore] = useState<Todo[]>(init);
    const [todo, setTodo] = useState<string>('');

    const onAddTodo = () => {
        const tempTodo: Todo = {
            id: Date.now().toString(),
            title: todo,
            done: false
        }

        setStore(p => [...p, tempTodo])
        setTodo('');
    }

    const onToggle = (id: string) => {

        setStore(p => {
            return p.map(t => {
                if(t.id === id){
                    return {...t, done: !t.done}
                }
                return t;
            })
        })
    }

    return (
        <div>
            <h1>Todoapp main content</h1>
            <input className={styles.input} type="text" placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.currentTarget.value)} />
            <button onClick={onAddTodo}>Add Todo</button>
            {store.map((todo, i) => {
                return (
                    <div className={styles.todo} key={todo.id}>
                        <pre>{todo.title}</pre>
                        {todo.done ? <div>Completed</div> : <div>Not Completed</div>}
                        <button onClick={() => onToggle(todo.id)}>Toggle</button>
                    </div>
                );
            })}
        </div>
    );
};

export default App;
