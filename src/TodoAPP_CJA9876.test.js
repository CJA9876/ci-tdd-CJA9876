import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp_CJA9876 from './TodoAPP_CJA9876';

describe('<TodoApp_CJA9876 />', () => {
    it('renders TodoFrom TodoList', () => {
        const { getByText, getByTestId } = render(<TodoApp_CJA9876 />);
        getByText('등록'); // TodoForm 화면에 있는지 확인
        getByTestId('TodoList'); // TodoList 화면에 있는지 확인
    });
    it('renders two defaults todos', () => {
        const { getByText } = render(<TodoApp_CJA9876 />);
        getByText('TDD 배우기');
        getByText('react-testing-library');
    });
        
});