import style from './App.module.css'
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import NavBar from './components/NavBar';
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const API_ENDPOINT = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/todo_api`;


function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //GET
  useEffect(() => {
    fetch(`${API_ENDPOINT}?sort[0][field]=Title&sort[0][direction]=asc`, {
      method: "GET",
      headers:{
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        
      },
    })
    .then((response)=>response.json())
    .then((result) => {

      setTodoList([...result.records]);
      setIsLoading(false);
    })
    
  .catch((error) => console.error(error)); 
},[]);

//POST

const addTodo = function (newTodo) {
  fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Title: newTodo.title,
            Completed: newTodo.completed,
          },
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      setTodoList([...todoList, result.records[0]]);
   
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// DELETE

const removeTodo = function (id) {

      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);

      fetch(`${API_ENDPOINT}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

}

  useEffect(() => {
    if(!isLoading){
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    } 
  }, [todoList, isLoading]);

  // const removeTodo = (id) => {
  //   const newTodoList = todoList.filter((todo) => todo.id !== id);
  //   setTodoList(newTodoList);
  // };

  

  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"}
        element={
          <>
               <h1>Welcome</h1>
               <p>Hola esta es mi todo app, es mi proyecto final para coe the dream</p>
               <NavBar/>
          </>
        }
      />

      <Route path={"/todo-list"}
      element={
       <div className={style.container}>
      <h1>TO-DO List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <p>{TodoList}</p>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      )}
      </div>
    }
      />
      <Route path={"/code"} element={<h1>New Todo List</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
