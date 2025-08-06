import { useState, useEffect, useRef } from "react";
import './App.scss'
import DateTime from './date'



function App({ completedList, setCompletedList }) {
  
  
  let [input, setInput] = useState(""); 
  let [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem("savedTodoList");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  // Track which items are being added for animation
  const [addingIndexes, setAddingIndexes] = useState([]);

  // Track which items are being removed for animation
  const [removingIndexes, setRemovingIndexes] = useState([]);

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todo)); //saved the todo into localStorage
  }, [todo]) 

  let submit = (e) => { // when clicked, triggers the submit function
    if (input === "") {
      alert("You can't put an empty shit"); 
    } else {
      setTodo(todo => {
        const newTodos = [...todo, input];
        setAddingIndexes((prev) => [...prev, newTodos.length - 1]);
        setTimeout(() => {
          setAddingIndexes((prev) => prev.filter((i) => i !== newTodos.length - 1));
        }, 400); // Match the CSS transition duration
        return newTodos;
      });
      setInput("");
    }
    e.preventDefault(); // prevents reloading when submitting (or enter)
  }

  

  const remove = (index, item, e) => {
    setRemovingIndexes((prev) => [...prev, index]);
    setTimeout(() => {
      setTodo((todo) => todo.filter((_, i) => i !== index));
      setRemovingIndexes((prev) => prev.filter((i) => i !== index));
      const prevFinished = JSON.parse(localStorage.getItem('FINISHED_TASKS')) || [];
      const newFinished = [...prevFinished, item];
      setCompletedList(newFinished);
      localStorage.setItem('FINISHED_TASKS', JSON.stringify(newFinished));
    }, 400); // Match the CSS transition duration
  };

  
  
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
            {todo.map((item, index) => {
              const isRemoving = removingIndexes.includes(index);
              const isAdding = addingIndexes.includes(index);
              return (
                <h6 className={`list${isRemoving ? ' removing' : ''}${isAdding ? ' adding' : ''}`} key={index}>
                  <span className="list-item">{item}</span>
                  <button className="remove-button" onClick={(e) => remove(index, item, e)} disabled={isRemoving}>
                    <i className="bi bi-check-circle-fill"></i>
                  </button>
                </h6>
              );
            })}
          </div>
      </div>
    
    </div>
  );
}

export default App;
