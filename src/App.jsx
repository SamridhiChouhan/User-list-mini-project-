import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserList from "./Components/UserList";
import SearchBar from "./Components/Searchbar";
import Flash from "./includes/flash";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [desiredResult, setDesiredResult] = useState("");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    const response = fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error");
        }
        return res.json();
      })

      .then((data) => setUsers(data), setLoading(false))
      .catch((err) => setError(true));
  }, []);

  let loadMsg = "Loading...";
  let errMsg = "Something went wrong...";

  let filteredUsers = users;

  // function filter() {}
  function onChange(e) {
    console.log(e.target.value);
    setDesiredResult(e.target.value);
  }

  function onClick(e) {
    e.preventDefault();
    console.log(desiredResult);
    // setDesiredResult("");
  }

  return (
    <>
      <div className="img min-h-dvh min-w-full bg-amber-400 p-3 m-0  flex flex-col items-center">
        {loading ? <Flash message={loadMsg} /> : ""}
        {error ? <Flash message={errMsg} /> : ""}
        <SearchBar
          onChange={onChange}
          value={desiredResult}
          onClick={onClick}
        />
        <UserList usersData={users} />
      </div>
    </>
  );
}

export default App;
