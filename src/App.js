import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import UserList from "./UserList";

function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get("http://movie-app-gmc.herokuapp.com/api/movies")
      .then((res) => console.log(setMovieList(res.data)));
  }, []);

  const [listOfUSer , setListOfUSer ] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(setListOfUSer(res.data)));
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <h1>Checkpoint API</h1>
      {listOfUSer.map((el) => (
        <UserList user={el} />
      ))}
    </div>
  );
}

export default App;
