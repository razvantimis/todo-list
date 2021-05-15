
import { TodoItem } from '../TodoItem';
import { useQuery, gql } from '@apollo/client';
import './TodoList.css'

const TodoListQuery = gql`
  query TodoListQuery {
    todo_list {
      id
      name
    }
}
`;

export const TodoList = () => {
  const { loading, error, data } = useQuery(TodoListQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="todo-list">
      {data.todo_list.map(item => (
        <TodoItem {...item} />
      ))}
    </div>
  )
}