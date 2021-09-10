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
    <div className="container mt-5">
      <div className="row mb-5">
        <h1>Powerlifting Tracker</h1>
      </div>
      <form>

        <div className="form-group row mb-5">
          <label htmlFor="exerciseSelect" className="col-sm-2 col-form-label">Exercise</label>
          <div className="col-sm-10">
            <select className="form-control form-control-lg col-sm-10" id="exerciseSelect">
              <option>Squat</option>
              <option>Bench</option>
              <option>Deadlift</option>
              <option>Shoulder Press</option>
            </select>
          </div>
        </div>

        <div className="form-group row mb-5">
          <label htmlFor="weight" className="col-2 col-form-label">Weight</label>
          <div className="col-4">
            <input type="number" className="form-control" id="weight" placeholder="10kg"/>
          </div>

          <label htmlFor="reps" className="col-2 col-form-label">Reps</label>
          <div className="col-4">
            <input type="number" className="form-control" id="reps" placeholder="5"/>
          </div>
        </div>
      </form>

      <div className="row">
        <button onClick={addTodo} className="btn btn-primary col-6 offset-3">
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
