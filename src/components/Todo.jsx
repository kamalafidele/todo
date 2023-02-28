import { useState } from 'react';
import '../styles/Todo.css';
import { toast } from 'react-toastify';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (text === '') {
            toast.error('Please enter the todo description');
            return;
        }
        const temp = [{ description: text, isCompleted: false, _id: todos.length + 1 }]
        setTodos([...todos, ...temp]);

        setText('');
    }

    const handleComplete = (todoId) => {
        todos.forEach((todo) => {
            if (todo._id === todoId) todo.isCompleted = true;
        });

        setTodos([...todos]);
    }

    const deleteTodo = (id) => {
        const result = todos.filter((todo) => todo._id !== id);
        setTodos([...result]);
    }

    return (
        <div className='container'>
            <div className="middle">
                <div className="row">
                    <input type="text" placeholder='Add new todo.....' value={text} onChange={(e) => setText(e.target.value)} />
                    <button onClick={addTodo}><i className="fa fa-plus" aria-hidden="true"></i></button>
                </div>
            </div>
            <div className="todos">
                {
                    todos.map((todo, index) =>
                        <div key={index} className='todo' style={{ borderLeft: todo.isCompleted ? '7px solid green' : '7px solid red' }}>
                            <p>{todo.description}</p>
                            <di className="icons">
                                <i className="fa fa-check check" aria-hidden="true" onClick={() => handleComplete(todo._id)}></i>
                                <i className="fa fa-trash delete" aria-hidden="true" onClick={() => deleteTodo(todo._id)}></i>
                            </di>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Todo;