type StatusTypes = "todo" | "inprogress" |  "done" 



interface ITodo {
    id:string
    title: string;
    description: string;
    isDone: boolean;
    status: StatusTypes,
}