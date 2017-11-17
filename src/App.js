import React from 'react';
import AddTodo from './components/addTodo';
import Header from './components/base_components/header';
import TodoList from './components/todoList';
import data from './assets/data.json'

const App = () => (
  <div>
    <Header />
    My App
    <AddTodo submitTodo={() => { }} />
    <TodoList records={data.records} />
  </div>
);

export default App;
