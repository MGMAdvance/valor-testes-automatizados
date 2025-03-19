'use client';

import { useEffect, useState } from 'react';
import Button from './button';

const LOCAL_STORAGE_KEY = 'todo_list';

type TodoItem = {
    id: number;
    text: string;
};

export default function TodoList() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (!input.trim()) return;
        setTodos([...todos, { id: Date.now(), text: input.trim() }]);
        setInput('');
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearTodos = () => {
        setTodos([]);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-xl font-bold mb-4">ToDo List</h1>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                placeholder="Adicionar tarefa"
                data-testid="todo-input"
            />
            <Button
                onClick={addTodo}
                className="bg-blue-500 text-white p-2 rounded w-full mb-2"
                data-testid="add-button"
            >
                Adicionar
            </Button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="flex justify-between items-center p-2 border-b">
                        {todo.text}
                        <Button onClick={() => removeTodo(todo.id)} className="text-red-500">
                            Excluir
                        </Button>
                    </li>
                ))}
            </ul>
            {todos.length > 0 && (
                <Button
                    onClick={clearTodos}
                    className="bg-red-500 text-white p-2 rounded w-full mt-2"
                    data-testid="clear-button"
                >
                    Limpar Tudo
                </Button>
            )}
        </div>
    );
}
