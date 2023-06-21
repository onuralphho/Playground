import { useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../../stores/todoSlice";

const TodoListItem = ({ todoDetails }: { todoDetails: ITodo }) => {
	const dispatch = useDispatch();

	return (
		<li
			onClick={() => {
				dispatch(completeTodo(todoDetails.id));
			}}
			className={`relative flex flex-col rounded text-stone-800 gap-1 border p-2 px-4 hover:opacity-80 transition-all cursor-pointer ${
				todoDetails.isDone ? "bg-green-400" : "bg-red-400"
			}`}>
			<button
				type="button"
				onClick={() => {
					dispatch(removeTodo(todoDetails.id));
				}}
				className="absolute flex justify-center items-center right-1 top-1 w-6 aspect-square font-bold text-red-500 hover:bg-[#ffffff7c] rounded-full">
				X
			</button>
			<h2 className="text-2xl font-semibold first-letter:uppercase">
				{todoDetails.title}
			</h2>
			<p>{todoDetails.description}</p>
		</li>
	);
};

export default TodoListItem;
