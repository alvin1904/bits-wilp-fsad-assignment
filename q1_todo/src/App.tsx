import { useEffect, useState } from "react";
import TodoWrapper from "./components/todo/TodoWrapper";
import { Trash2Icon } from "lucide-react";

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const saved = localStorage.getItem("my-todos");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("saved-todos", JSON.stringify(todos));
  }, [todos]);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = newTodo.trim();
    if (!text) return;

    const todo: TodoType = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, todo]);
    setNewTodo("");
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="main">
      <TodoWrapper heading="FSAD ToDo App">
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            aria-label="New todo"
          />
        </form>

        <div className="todo-content">
          {todos.length === 0 ? (
            <p>{todos.length === 0 && "No todos yet. Add one above!"}</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  onClick={() => {
                    handleToggleTodo(todo.id);
                  }}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    aria-label={`Mark "${todo.text}" as ${
                      todo.completed ? "active" : "completed"
                    }`}
                  />
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      opacity: todo.completed ? 0.6 : 1,
                      margin: "0 8px",
                    }}
                  >
                    {todo.text}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteTodo(todo.id);
                    }}
                  >
                    <Trash2Icon size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {todos.length > 0 && (
            <div>
              <span>
                {activeCount > 0
                  ? `${activeCount} ${activeCount === 1 ? "item" : "items"} left`
                  : "All tasks done!"}
              </span>
            </div>
          )}
        </div>
      </TodoWrapper>
    </div>
  );
}

export default App;
