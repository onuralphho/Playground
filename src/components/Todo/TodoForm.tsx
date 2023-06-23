import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../stores/todoSlice";
import { FormButton } from "../UI/FormButton";
import { v4 as uuidv4 } from "uuid";

interface ITodoState {
	todos: ITodo[];
}

interface IFormValues {
	title: string;
	description: string;
}

const TodoForm = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state: ITodoState) => state.todos);

	const initialValues = {
		title: "",
		description: "",
	} as IFormValues;

	const handleSubmit = (
		values: IFormValues,
		formikHelpers: FormikHelpers<IFormValues>
	) => {
		dispatch(
			addTodo({
				id: uuidv4(),
				title: values.title,
				description: values.description,
				isDone: false,
				status: "todo",
				position:"backlog"
			})
		);
		formikHelpers.resetForm();
	};

	const validateSchema = Yup.object({
		title: Yup.string().required("Name is required"),
		description: Yup.string().required("Description is required"),
	});

	return (
		<div className="flex  gap-2 border border-blue-950 text-blue-950 p-2">
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validateSchema}>
				<Form className="flex w-full max-md:flex-col gap-2 flex-wrap">
					<div className="flex flex-col  gap-1">
						<Field
							type="text"
							name="title"
							placeholder="Title"
							className=" p-1 border border-blue-950"
						/>
						<ErrorMessage
							name="title"
							component="span"
							className="error text-red-500"
						/>
					</div>

					<div className="flex flex-col flex-1 gap-1">
						<Field
							type="text"
							name="description"
							placeholder="Description"
							className=" p-1 border border-blue-950"
						/>
						<ErrorMessage
							name="description"
							component="span"
							className=" text-red-500"
						/>
					</div>

					<FormButton type="submit" className=" h-max">
						Save
					</FormButton>
				</Form>
			</Formik>

			<FormButton
				onClick={() => {
					console.log(todos);
				}}
				className="button h-max absolute top-0 right-0">
				Log the list
			</FormButton>
		</div>
	);
};

export default TodoForm;
