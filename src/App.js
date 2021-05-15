import { TodoList } from './components/TodoList';
import { TodoCreate } from './components/TodoCreate';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo list App</h1>
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;
