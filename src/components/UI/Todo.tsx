import React from 'react';
import { Button } from './UI/Button';


type FilterType = 'all' | 'active' | 'completed';


interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  completedCount: number;
  onClearCompleted: () => void;
}


export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
  completedCount,
  onClearCompleted
}) => {
  return (
    <div className="flex justify-between items-center mt-4 pb-4">
      <div className="space-x-2">
        <Button
          onClick={() => onFilterChange('all')}
          variant={currentFilter === 'all' ? 'primary' : 'secondary'}
          size="lg"
        >
          All
        </Button>
        <Button
          onClick={() => onFilterChange('active')}
          variant={currentFilter === 'active' ? 'primary' : 'secondary'}
          size="lg"
        >
          Active
        </Button>
        <Button
          onClick={() => onFilterChange('completed')}
          variant={currentFilter === 'completed' ? 'primary' : 'secondary'}
          size="lg"
        >
          Completed
        </Button>
      </div>
     
      {completedCount > 0 && (
        <Button
          onClick={onClearCompleted}
          variant="danger"
          size="lg"
        >
          Clear Completed
        </Button>
      )}
    </div>
  );
};

