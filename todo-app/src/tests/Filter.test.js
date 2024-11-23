import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '../components/Filter';

test('changes filter when a filter button is clicked', () => {
  const onFilterChange = jest.fn();
  render(<Filter onFilterChange={onFilterChange} currentFilter="All" />);

  fireEvent.click(screen.getByText('Completed'));
  expect(onFilterChange).toHaveBeenCalledWith('Completed');
});
