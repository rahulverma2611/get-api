import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((list) =>
      list.json().then((data) => {
        // console.log("result", data);
        setValue(data);
      })
    );
  });
  console.log(value);

  return (
    <div className="App">
      <div>
        <h2>Get API Method</h2>
      </div>
      <table border="1">
        <tr>
          <th>User</th>
          <th>Title</th>
          <th>Status</th>
        </tr>

        {value.slice(1, 20).map((item) => {
          return (
            <tr>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "completed" : "notcompleted"}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
