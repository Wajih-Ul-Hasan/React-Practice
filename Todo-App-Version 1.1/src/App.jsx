import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";  // Updated to use TodoItems
import "./App.css";

function App() {
    return (
        <center className='todo-container'>
            <Title />
            <AddTodo />
            <TodoItems /> {/* Renders all TodoItems */}
        </center>
    );
}

export default App;
