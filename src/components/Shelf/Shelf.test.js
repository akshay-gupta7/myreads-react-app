import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Shelf from './Shelf';

describe('<Shelf />', () => {
  test('it should mount', () => {
    render(<Shelf />);
    
    const shelf = screen.getByTestId('Shelf');

    expect(shelf).toBeInTheDocument();
  });
});