import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/addTask";
import ShowTask from "./components/showTask";

function App() {
  const [tasklist, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taslist")) || [] //access to localstorage so we can store our tasks.
  );
  const [task, setTask] = useState({});

  //Everytime we update our tasklist we this info in our localstorage.
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);
  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
