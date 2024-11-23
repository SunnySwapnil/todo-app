import { render, screen, fireEvent } from '@testing-library/react';
import AddTask from '../components/AddTask';

test('adds a task when the Add button is clicked', () => {
  const onAdd = jest.fn();
  render(<AddTask onAdd={onAdd} />);

  fireEvent.change(screen.getByPlaceholderText('Add a new task'), {
    target: { value: 'New Task' },
  });
  fireEvent.click(screen.getByText('Add Task'));

  expect(onAdd).toHaveBeenCalledWith('New Task');
});
