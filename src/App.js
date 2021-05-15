import { TodoList } from './components/TodoList';
import { TodoCreate } from './components/TodoCreate';
import { useQuery, gql } from '@apollo/client';

import './App.css';
const TodoListQuery = gql`
  query TodoListQuery {
    todo_list(order_by: {created_at: desc}) {
      id
      name
    }
}
`;

function App() {

  const { loading, error, data, refetch } = useQuery(TodoListQuery);
  return (
    <div className="App">
      <h1>Todo list App</h1>
      <TodoCreate refetchTodoList={() => refetch()} />
      <TodoList loading={loading} error={error} data={data} />
    </div>
  );
}

export default App;
