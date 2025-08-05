import './completed.scss'
import { useState, useEffect } from 'react'

function Completed({completedList ,  setCompletedList}) {

    let [finishedTasks = completedList, setFinishedTasks] = useState(() => {
        const savedFinishedTasks = localStorage.getItem("FINISHED_TASKS"); //gets the saved item from localStorage
        if (savedFinishedTasks) { 
            return JSON.parse(savedFinishedTasks) 
        }
        return []
    })
    useEffect(() => {
        
        localStorage.setItem("FINISHED_TASKS", JSON.stringify(finishedTasks)); //saved the todo into localStorage
    }, [finishedTasks]) 

    
    
    return (
        <div>
            <div>
                {finishedTasks.map((item, index) => (
                <h1 key={index}>
                    <span>{item}</span>
                </h1>
                ))}
            </div>
        </div>
        
    )
}

export default Completed