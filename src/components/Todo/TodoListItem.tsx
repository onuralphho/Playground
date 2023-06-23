import { useDispatch } from "react-redux";
import {
	completeTodo,
	removeTodo,
	changeStatus,
	changePosition,
} from "../../stores/todoSlice";
import { ChangeEvent, useState } from "react";
import {
	statusColors,
	statusData,
	positionData,
} from "../../constants/StatusConstants";

const TodoListItem = ({ todoDetails }: { todoDetails: ITodo }) => {
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	const dispatch = useDispatch();

	const statusColor = statusColors[todoDetails.status];

	return (
		<li
			onClick={() => {
				setIsDetailsOpen((prev) => !prev);
			}}
			className={`relative group overflow-hidden flex flex-col justify-center rounded shadow-md text-stone-800 h-max  border p-1 px-2  hover:bg-slate-100 transition-all cursor-pointer `}>
			<div className="flex justify-between items-center ">
				<div className="flex items-center gap-2">
					<div className={`${statusColor} w-3 aspect-square rounded-full `}></div>
					<h2 className="text-xl font-semibold first-letter:uppercase">
						{todoDetails.title}
					</h2>
				</div>
				<div className="flex justify-end gap-2">
					<select
						onClick={(e) => {
							e.stopPropagation();
						}}
						defaultValue={todoDetails.position}
						className="w-max self-end rounded border"
						onChange={(e: ChangeEvent<HTMLSelectElement>) => {
							dispatch(
								changePosition({
									id: todoDetails.id,
									position: e.target.value as PositionTypes,
								})
							);
						}}>
						{positionData.map((e,i) => (
							<option key={i} value={e}>{e.charAt(0).toUpperCase() + e.slice(1)}</option>
						))}
					</select>
					<select
						onClick={(e) => {
							e.stopPropagation();
						}}
						onChange={(e: ChangeEvent<HTMLSelectElement>) => {
							dispatch(
								changeStatus({
									id: todoDetails.id,
									status: e.target.value as StatusTypes,
								})
							);
						}}
						defaultValue={todoDetails.status}
						className="w-max self-end rounded border">
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
						className="rounded px-2 bg-white border">
						Complete
					</button>
				</div>
			</div>
			<div className={`${isDetailsOpen ? "h-max" : "h-0"}`}>
				<p className="text-md  ">{todoDetails.description}</p>
			</div>
		</li>
	);
};

export default TodoListItem;
