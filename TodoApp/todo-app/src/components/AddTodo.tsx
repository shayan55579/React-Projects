import { useState } from 'react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  const suggestions = [
    'Take a 5-minute walk 🚶',
    'Drink a glass of water 💧',
    'Do 10 pushups 💪',
    'Write a journal entry 📝',
    'Check your calendar 📅',
    'Stretch your legs 🧘',
    'Plan tomorrow’s goals 🎯',
    'Read for 10 minutes 📚',
    'Organize your workspace 🧹',
  ];

  const handleSuggest = () => {
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    onAdd(random);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        style={{ flexGrow: 1, padding: '8px', fontSize: '1em' }}
      />
      <button type="submit">Add</button>
      <button type="button" onClick={handleSuggest}>✨ Suggest</button>
    </form>
  );
};

export default AddTodo;
