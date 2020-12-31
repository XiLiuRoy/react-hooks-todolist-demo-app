import React from 'react';
import { TodoInput } from './Components/TodoInput';
import { TodoList } from './Components/TodoList';

function App() {

  return (
    <div className="container">
      <section>
        <h1>A Todo list demo with react, redux, react-hooks, redux-thunk</h1>
      </section>
      <section>
        <div className="row justify-content-md-center">
          <TodoInput />
          <TodoList />
        </div>
      </section>
    </div>
  );
}

export default App;
