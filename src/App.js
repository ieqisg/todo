import { useState, useEffect } from "react";
import './App.scss'
import DateTime from './date'



function App({ completedList, setCompletedList }) {
  
  
  let [input, setInput] = useState(""); 
  let [todo,setTodo] = useState(() => {
  const saved = localStorage.getItem("savedTodoList"); //gets the saved item from localStorage
    if (saved) { 
      return JSON.parse(saved) 
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todo)); //saved the todo into localStorage
  }, [todo]) 

  let submit = (e) => { // when clicked, triggers the submit function
    if (input === "") {
      alert("You can't put an empty shit"); 
      } else {
        setTodo(todo => [...todo, input]) //stores the inputted values to todo
        setInput("") // sets the placeholder empty after submitting
      }
    e.preventDefault(); // prevents reloading when submitting (or enter)
  }

  

  const remove = (index, item, e ) => { //when clicked, triggers the remove function
    setTodo(todo => todo.filter((_, i) =>  i !== index)); //removes the element that matches with the index
    const prevFinished = JSON.parse(localStorage.getItem('FINISHED_TASKS')) || [];
    const newFinished = [...prevFinished, item];
    setCompletedList(newFinished);
    localStorage.setItem('FINISHED_TASKS', JSON.stringify(newFinished));
    e.preventDefault();
    }

  
  
  return (
    
    <div class="pt-3 m-3">
    
      <div className="DateTime"> 
        <DateTime/>
      </div>
      <div>
        <form class="d-flex justify-content-center gap-5" onSubmit={submit}>
          <input
            className="input-todo"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your todo task"
          ></input>
          
        </form>
      </div>

      <div>
          
          <h1 className="todo-list">TODO LIST:</h1>
          <div className="todo-container">
            {todo.map((item, index) => (
              <h6 className="list" key={index}>
                <span className="list-item">{item}</span>
                <button className="remove-button" onClick={(e) => remove(index, item, e)}>
                  <i className="bi bi-check-circle-fill"></i>
                </button>
              </h6>
            ))}
          </div>
      </div>
    
    </div>
  );
}

export default App;
