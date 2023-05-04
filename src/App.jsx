import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { CreateTodoButton } from "./components/CreateTodoButton.jsx";
import { TodoItem } from "./components/TodoItem";

const defaultTodos = [
  { text: "primer Todo", completed: true },
  { text: "segundo Todo", completed: false },
  { text: "tercer Todo", completed: false },
  { text: "cuarto Todo", completed: false },
];

function App() {
  return (
    <>
      <h1>TODO'S App</h1>
      <TodoCounter totalTodos={5} completedTodos={3} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
