import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    const response = fetch(url).then((res) => {
      res.json().then((data) => {
        // console.log(data);
        setUsers(data);
      });
    });
  }, []);

  console.log(users);

  return <></>;
}

export default App;
