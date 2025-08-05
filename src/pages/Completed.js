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

    
    const clearTasks = () => {
        localStorage.removeItem('FINISHED_TASKS')
        setFinishedTasks([])
    }
    
    
    return (
        <div >
            <div className='header'>
                <button style={{position: 'absolute', right: '5rem', padding:'2rem' }} onClick={() => clearTasks()}>Tite</button>
                <h1>Completed Tasks:</h1>
            </div>
            <div className='body'>
            {finishedTasks.map((item, index) => ( <h1 key={index}> {item} </h1>
                ))}
            </div>
        </div>
        
    )
}

export default Completed