import { useState } from "react";
import { Input } from "../UI/Input";
import { FormButton } from "../UI/FormButton";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../stores/todoSlice";
import { v4 as uuidv4 } from "uuid";

interface ITodoState {
	todos: ITodo[];
}

const TodoForm = () => {
	const [titleInput, setTitleInput] = useState<string>("");
	const [descriptionInput, setDescriptionInput] = useState<string>("");

	const dispatch = useDispatch();
	const todos = useSelector((state: ITodoState) => state.todos);

	return (
		<div className="flex gap-2 border border-blue-950 text-blue-950 p-2">
			<Input
				type="string"
				onChange={(e) => {
					setTitleInput(e.target.value);
				}}
				value={titleInput}
				placeholder="Title"
			/>
			<Input
				type="string"
				onChange={(e) => {
					setDescriptionInput(e.target.value);
				}}
				value={descriptionInput}
				placeholder="Description"
			/>
			<FormButton
				onClick={() => {
					dispatch(
						addTodo({
							id: uuidv4(),
							title: titleInput,
							description: descriptionInput,
                            isDone:false
						})
					);
				}}>
				Save
			</FormButton>
			<FormButton
				onClick={() => {
					console.log(todos);
				}}>
				Log the list
			</FormButton>
		</div>
	);
};

export default TodoForm;
