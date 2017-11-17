import React from 'react';
import AddTodo from './components/addTodo';
import Header from './components/base_components/header'

const App = () => (
  <div>
    <Header />
    My App
    <AddTodo submitTodo={() => { }} />
  </div>
);

export default App;
