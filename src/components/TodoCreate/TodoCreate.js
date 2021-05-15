
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import './TodoCreate.css';

const ADD_TODO = gql`
  mutation AddTodo($name: String!) {
    insert_todo_list_one(object: {name: $name}) {
      id
      name
    }
  }
`;

export const TodoCreate = ({ refetchTodoList }) => {
  const [todoText, setTodoText] = useState('')
  const [addTodo, { data }] = useMutation(ADD_TODO);

  return (
    <div className="todo-create">
      <input placeholder="Detalii todo"
        value={todoText}
        onChange={event => {
          setTodoText(event.target.value)
        }}
      />
      <button onClick={async () => {
        await addTodo({ variables: { name: todoText } });
        refetchTodoList()
      }}>Adauga</button>
    </div>
  )
}