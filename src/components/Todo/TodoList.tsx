import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

interface ITodoState {
    todos: ITodo[];
}

const TodoList = () => {
    const todos = useSelector((state: ITodoState) => state.todos);

    return (
        <ul className="grid grid-cols-2 gap-2">
            {todos.map((e) => (
                <TodoListItem key={e.id} todoDetails={e} />
            ))}
        </ul>
    );
};

export default TodoList;
