type StatusTypes = "todo" | "inprogress" | "done";

type PositionTypes = "active" | "backlog";

interface ITodo {
	id: string;
	title: string;
	description: string;
	isDone: boolean;
	status: StatusTypes;
	position: PositionTypes;
}
