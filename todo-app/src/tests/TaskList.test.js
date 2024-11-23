import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';

test('deletes a task when the Delete button is clicked', () => {
  const tasks = [{ id: 1, text: 'Task 1', completed: false }];
  const onDelete = jest.fn();
  render(<TaskList tasks={tasks} onDelete={onDelete} />);

  fireEvent.click(screen.getByText('Delete'));
  expect(onDelete).toHaveBeenCalledWith(1);
});
