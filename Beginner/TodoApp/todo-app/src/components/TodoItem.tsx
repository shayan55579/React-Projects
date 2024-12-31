import {Todo} from "../types/todo"

interface Props{
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
    return (
      <div>
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => onToggle(todo.id)}
        >
          {todo.text}
        </span>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    );
  };
  
  export default TodoItem;