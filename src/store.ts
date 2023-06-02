import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./stores/counterSlice";
import todoReducer from "./stores/todoSlice";
export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
    },
});
