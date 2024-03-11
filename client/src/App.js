import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import './App.css';

function App() {
  return (
    <div className="App bg-blue-100">
      <Navbar />
      <AddTodo />
    </div>
  );
}

export default App;
