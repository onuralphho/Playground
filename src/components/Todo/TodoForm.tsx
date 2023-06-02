import { useState } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../stores/todoSlice";
const TodoForm = () => {
    const [titleInput, setTitleInput] = useState<string>("");
    const [descriptionInput, setDescriptionInput] = useState<string>("");

    const dispatch = useDispatch();

    return (
        <div className="flex gap-2 border p-2">
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
            <Button
                onClick={() => {
                    dispatch(
                        addTodo({
                            title: titleInput,
                            description: descriptionInput,
                        })
                    );
                }}
            >
                Save
            </Button>
        </div>
    );
};

export default TodoForm;
