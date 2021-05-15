import './TodoItem.css'

export const TodoItem = (props) => {
  const { name } = props;
  return (
    <div className="todo-item">
      {name}
    </div>
  )
}