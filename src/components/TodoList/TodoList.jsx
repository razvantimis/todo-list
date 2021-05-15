
import { TodoItem } from '../TodoItem';
import './TodoList.css'
const todoList = [
  {
    id: 1,
    name: 'Fa curat'
  },
  {
    id: 2,
    name: 'Fa cumparaturi'
  },
  {
    id: 3,
    name: 'Gateste'
  }
]

export const TodoList = () => {
  return (
    <div className="todo-list">
      {todoList.map(item => (
        <TodoItem {...item} />
      ))}
    </div>
  )
}