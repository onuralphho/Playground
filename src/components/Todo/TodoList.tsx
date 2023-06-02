import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

interface ITodoState {
    todos: ITodo[];
}

const TodoList = () => {
    const todos = useSelector((state: ITodoState) => state.todos);

    return (
        <ul>
            {todos.map((e, i) => (
                <TodoListItem key={i} todoDetails={e} />
            ))}
        </ul>
    );
};

export default TodoList;
