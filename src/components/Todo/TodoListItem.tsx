import { useDispatch } from "react-redux";
import { completeTodo } from "../../stores/todoSlice";

const TodoListItem = ({ todoDetails }: { todoDetails: ITodo }) => {
	const dispatch = useDispatch();

	return (
		<li
			onClick={() => {
				
				dispatch(completeTodo(todoDetails.id));
			}}
			className={`relative flex flex-col rounded-xl text-stone-800 gap-1 border p-2 px-4 hover:opacity-80 transition-all cursor-pointer ${todoDetails.isDone ?"bg-green-400":"bg-red-400"}`}>
			
            <h2 className="text-2xl font-semibold first-letter:uppercase">{todoDetails.title}</h2>
			<p>{todoDetails.description}</p>
		</li>
	);
};

export default TodoListItem;
