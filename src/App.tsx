import { Button } from "./components/UI/Button";
import { Card } from "./components/UI/Card";
import { Input } from "./components/UI/Input";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./stores/counterSlice";
import { useState } from "react";
import TodoList from "./components/Todo/TodoList";
import TodoForm from "./components/Todo/TodoForm";

interface RootState {
    counter: {
        value: number;
    };
}

function App() {
    const [inputValue, setInputValue] = useState<number>(0);

    const counter = useSelector((state: RootState) => state.counter);

    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center p-2 gap-2 ">
            <Card>
                <span className="text-3xl">{counter.value}</span>
                <div className="flex gap-2">
                    <Button onClick={() => dispatch(decrement())}>-</Button>
                    <Button onClick={() => dispatch(increment())}>+</Button>
                </div>
                <div className="flex gap-2">
                    <Input
                        type="number"
                        placeholder="Amount"
                        onChange={(e) => {
                            setInputValue(parseInt(e.target.value));
                        }}
                        value={inputValue}
                        
                    />
                    <Button
                        onClick={() => {
                            console.log(typeof inputValue);
                            dispatch(incrementByAmount(inputValue));
                        }}
                    >
                        Send
                    </Button>
                </div>
            </Card>
            <div className="flex flex-col container max-w-6xl gap-2">
                <TodoForm />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
