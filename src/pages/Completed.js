import '../App.scss'
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

    // NEW: track when clearing animation should run
    const [isClearing, setIsClearing] = useState(false);

    const clearTasks = () => {
        // Start animation
        setIsClearing(true);

        // Wait for animation to finish before removing from storage/state
        const duration = 420; // match/ slightly exceed CSS 400ms
        setTimeout(() => {
            localStorage.removeItem('FINISHED_TASKS')
            setFinishedTasks([])
            setIsClearing(false)
        }, duration)
    }

    const [removingIndexes, setRemovingIndexes] = useState();
    
    
    return (
        <div >
            <div className='header'>
                <h1 className='todo-list' >Completed Tasks:</h1>
            </div>
            <div className='todo-container'>
            {finishedTasks.map((item, index) => (
                <h1
                  className={`list ${isClearing ? 'slide-out' : ''}`}
                  style={{padding:'1.5rem'}}
                  key={index}
                >
                  {item}
                </h1>
            ))}
            </div>
            <div>
                <button className='floating-button' onClick={() => clearTasks()}>Remove Tasks</button>
            </div>
        </div>
        
    )
}

export default Completed
