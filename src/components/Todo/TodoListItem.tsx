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
			<h2 className="text-2xl font-semibold first-letter:uppercase">
				{todoDetails.title}
			</h2>
			<p>{todoDetails.description}</p>
			<div className="flex justify-end gap-2">
				<select
					onChange={(e: ChangeEvent<HTMLSelectElement>) => {
						dispatch(
							changeStatus({
								id: todoDetails.id,
								status: e.target.value as StatusTypes,
							})
						);
					}}
					defaultValue={todoDetails.status}
					className="w-max self-end rounded">
					{statusData.map((e, i) => (
						<option key={i} value={e}>
							{e.charAt(0).toUpperCase() + e.slice(1)}
						</option>
					))}
				</select>
				<button
					type="button"
					onClick={() => {
						dispatch(removeTodo(todoDetails.id));
					}}
					className="rounded px-2 bg-white">
					Complete
				</button>
			</div>
		</li>
	);
};

export default TodoListItem;
