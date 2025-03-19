import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Button from './button';

afterEach(cleanup);

describe('Buttom component', () => {
    test('deve apresentar o conteúdo dentro do botão', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Deve apresentar algo aqui!</Button>);

        const button = screen.getByText('Deve apresentar algo aqui!');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('deve aplicar corretamente a className', () => {
        const handleClick = jest.fn();
        render(
            <Button onClick={handleClick} className="bg-red-500">
                Deve esta em vermelho
            </Button>,
        );

        const button = screen.getByText('Deve esta em vermelho');
        expect(button).toHaveClass('bg-red-500');
    });
});
