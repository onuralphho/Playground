import { createSlice } from "@reduxjs/toolkit";

// Redux store'a verileri kaydetmek için bir yardımcı fonksiyon
const saveStateToLocalStorage = (state: ITodo[]) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("todos", serializedState);
	} catch (error) {
		// Hata durumunda hata yönetimini burada yapabilirsiniz
	}
};

// Redux store'dan verileri localStorage'den geri almak için bir yardımcı fonksiyon
const loadStateFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem("todos");
		if (serializedState === null) {
			return undefined; // Eğer localStorage'de veri yoksa undefined döndür
		}
		return JSON.parse(serializedState);
	} catch (error) {
		return undefined; // Hata durumunda undefined döndür
	}
};

// Redux store'unun başlangıç durumu (initialState) yerine localStorage'den verileri al
const persistedState = loadStateFromLocalStorage() as ITodo[];

export const todoSlice = createSlice({
	name: "todo",
	initialState: persistedState,
	reducers: {
		addTodo: (state, action: { payload: ITodo }) => {
			state.push(action.payload);
			saveStateToLocalStorage(state);
		},
		completeTodo: (state, action: { payload: string }) => {
			const todo = state.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.isDone = !todo.isDone;
				saveStateToLocalStorage(state);
			}
		},
		removeTodo: (state, action: { payload: string }) => {
			const filteredTodos = state.filter((todo) => todo.id !== action.payload);
			saveStateToLocalStorage(filteredTodos);
			return filteredTodos;
		},
		changeStatus: (
			state,
			action: { payload: { id: string; status: StatusTypes } }
		) => {
			const todo = state.find((todo) => todo.id === action.payload.id);

			if (todo) {
				todo.status = action.payload.status;
				saveStateToLocalStorage(state);
			}
		},
	},
});

export const { addTodo, completeTodo, removeTodo, changeStatus } =
	todoSlice.actions;

export default todoSlice.reducer;
