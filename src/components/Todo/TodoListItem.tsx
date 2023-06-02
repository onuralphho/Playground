const TodoListItem = ({ todoDetails }: { todoDetails: ITodo }) => {
    return (
        <li className="flex flex-col gap-2 border p-2 hover:bg-slate-100 transition-all">
            <h2 className="text-2xl font-semibold">{todoDetails.title}</h2>
            <p>{todoDetails.description}</p>
        </li>
    );
};

export default TodoListItem;
