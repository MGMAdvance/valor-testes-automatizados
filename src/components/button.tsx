import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    testid?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className, testid }) => {
    return (
        <button onClick={onClick} className={className} data-testid={testid}>
            {children}
        </button>
    );
};

export default Button;
