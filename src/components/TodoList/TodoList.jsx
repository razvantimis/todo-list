
import { TodoItem } from '../TodoItem';
import './TodoList.css'

export const TodoList = ({ loading, error, data }) => {

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