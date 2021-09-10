import React, {useEffect, useState} from 'react';
import {Todo} from "@getstrong/dtos";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo: Todo) => {
        todos.forEach(todo => todo.active = false);
        setTodos([...todos, {...newTodo, active: true}]);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Todos</h1>
        <ul className="list-group mb-5">
          {todos.map((t) => (
            <li className={t.active ? 'list-group-item active' : 'list-group-item'} key={t.title}>{t.title}</li>
          ))}
        </ul>
        <button id={'add-todo'} onClick={addTodo} className="btn btn-primary">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default App;
