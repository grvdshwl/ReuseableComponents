import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import {
  TodoListButton,
  TodoListContainer,
  TodoListInput,
  TodoListInputContainer,
  TodoListItem,
  TodoListMainContainer,
  TodoListNoItem,
  TodoListTitle,
} from "./ToDoList.styles";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, input]);
    setInput("");
  };

  const handleRemove = (index: number) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter(
        (_, prevIndex) => prevIndex !== index
      );
      return filteredTodos;
    });
  };
  return (
    <TodoListContainer onSubmit={handleSubmit}>
      <TodoListTitle>Todo List</TodoListTitle>
      <TodoListInputContainer>
        <TodoListInput onChange={handleChange} value={input} />
        <TodoListButton type="submit">Submit</TodoListButton>
      </TodoListInputContainer>
      <TodoListMainContainer>
        {todos.length ? (
          todos.map((todo, index) => (
            <TodoListItem key={todo} onClick={handleRemove.bind(null, index)}>
              {todo}
            </TodoListItem>
          ))
        ) : (
          <TodoListNoItem>No Todos !</TodoListNoItem>
        )}
      </TodoListMainContainer>
    </TodoListContainer>
  );
};

export default TodoList;
