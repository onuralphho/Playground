import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./stores";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
);
