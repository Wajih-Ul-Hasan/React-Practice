import Title  from "./components/Title"
import AddTodo from "./components/AddTodo"
import TodoItem1 from "./components/TodoItem1"
import "./App.css";
function App() {

  return (
      <center class='todo-container'>
        <Title></Title>
        <AddTodo></AddTodo>
        <TodoItem1></TodoItem1>
        <TodoItem1></TodoItem1>
      </center>
  )
}

export default App
