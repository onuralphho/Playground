import { useDispatch } from "react-redux";
import { completeTodo, removeTodo, changeStatus } from "../../stores/todoSlice";
import { ChangeEvent } from "react";

const TodoListItem = ({ todoDetails }: { todoDetails: ITodo }) => {
	const dispatch = useDispatch();

	const statusColors = {
		todo: "bg-stone-400",
		inprogress: "bg-blue-400",
		done: "bg-green-400",
	};
	const statusData = ["todo", "inprogress", "done"];

	const statusColor = statusColors[todoDetails.status];

	return (
		<li
			
			className={`relative flex flex-col rounded text-stone-800 gap-1 border p-2 px-4 hover:opacity-80 transition-all ${statusColor}`}>
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
			<select
				onChange={(e: ChangeEvent<HTMLSelectElement>) => {
					dispatch(
						changeStatus({
							id: todoDetails.id,
							status: e.target.value as StatusTypes,
						})
					);
				}}
				className="w-max p-0.5 self-end rounded cursor-pointer">
				{statusData.map((e, i) => {
					if (todoDetails.status === e) {
						return (
							<option key={i} value={e} selected>
								{e.charAt(0).toUpperCase() + e.slice(1)}
							</option>
						);
					} else {
						return (
							<option key={i} value={e}>
								{e.charAt(0).toUpperCase() + e.slice(1)}
							</option>
						);
					}
				})}
			</select>
		</li>
	);
};

export default TodoListItem;
