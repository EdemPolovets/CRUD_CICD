import React, { useState } from 'react';
import { Button } from './UI/Button';
import { Input } from './UI/Input';

interface TodoFormProps {
  onAddTodo: (title: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo..."
          fullWidth
        />
        <Button type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};
