import React from "react";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <div>
      Tienes {completedTodos} de {totalTodos} tareas realizadas!
    </div>
  );
}

export { TodoCounter };
