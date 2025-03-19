import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './todo';

afterEach(cleanup);

describe('TodoList Component', () => {
    it('deve adicionar uma nova tarefa', () => {
        render(<TodoList />);
        const input = screen.getByTestId('todo-input');
        const addButton = screen.getByTestId('add-button');

        fireEvent.change(input, { target: { value: 'Nova Tarefa' } });
        fireEvent.click(addButton);

        expect(screen.getByText('Nova Tarefa')).toBeInTheDocument();
    });

    it('deve limpar todas as tarefas', () => {
        render(<TodoList />);
        const input = screen.getByTestId('todo-input');
        const addButton = screen.getByTestId('add-button');
        const taskText = 'Tarefa a ser removida';

        fireEvent.change(input, { target: { value: taskText } });
        fireEvent.click(addButton);
        fireEvent.change(input, { target: { value: 'Outra Tarefa' } });
        fireEvent.click(addButton);

        const clearButton = screen.getByTestId('clear-button');
        fireEvent.click(clearButton);

        expect(screen.queryByText(taskText)).not.toBeInTheDocument();
        expect(screen.queryByText('Outra Tarefa')).not.toBeInTheDocument();
    });

    it('deve excluir uma tarefa', () => {
        render(<TodoList />);
        const input = screen.getByTestId('todo-input');
        const addButton = screen.getByTestId('add-button');

        fireEvent.change(input, { target: { value: 'Tarefa para excluir' } });
        fireEvent.click(addButton);
        const deleteButton = screen.getByText('Excluir');
        fireEvent.click(deleteButton);

        expect(screen.queryByText('Tarefa para excluir')).not.toBeInTheDocument();
    });
});
