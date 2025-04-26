import { useState } from 'react';
import { motion } from 'framer-motion';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = () => {
    if (editText.trim() === '') return;
    onEdit(todo.id, editText.trim());
    setIsEditing(false);
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}
    >
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditSubmit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleEditSubmit();
          }}
          autoFocus
          style={{
            flexGrow: 1,
            marginRight: '10px',
            padding: '5px',
            fontSize: '1em',
          }}
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          onClick={() => onToggle(todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
            flexGrow: 1,
          }}
        >
          {todo.text}
        </span>
      )}
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </motion.li>
  );
};

export default TodoItem;
