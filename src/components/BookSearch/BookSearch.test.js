import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookSearch from './BookSearch';

describe('<BookSearch />', () => {
  test('it should mount', () => {
    render(<BookSearch />);
    
    const bookSearch = screen.getByTestId('BookSearch');

    expect(bookSearch).toBeInTheDocument();
  });
});