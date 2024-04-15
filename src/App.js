import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
function App() {
  return (
    <div className="App w-screen h-screen overflow-y-scroll  bg-black flex flex-col items-center">
      <TodoContainer />
    </div>
  );
}

export default App;
