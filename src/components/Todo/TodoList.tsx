import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

interface ITodoState {
	todos: ITodo[];
}

const TodoList = () => {
	const todos = useSelector((state: ITodoState) => state.todos);

	return (
		<div className="grid grid-cols-2 gap-2">
			<div className="flex flex-col gap-1">
				<h2 className="text-xl">Backlog:</h2>

				<ul className="grid grid-cols-1 ">
					{todos
						.slice()
						.reverse()
						.map(
							(e) =>
								e.position === "backlog" && <TodoListItem key={e.id} todoDetails={e} />
						)}
				</ul>
			</div>
			<div className="flex flex-col gap-1">
				<h2 className="text-xl">Actives:</h2>
				<ul className="grid grid-cols-1 ">
					{todos
						.slice()
						.reverse()
						.map(
							(e) =>
								e.position === "active" && <TodoListItem key={e.id} todoDetails={e} />
						)}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
