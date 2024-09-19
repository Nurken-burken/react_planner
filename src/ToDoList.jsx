import React, {useState} from 'react' 
function ToDoList(){


    const [tasks, setTasks] = useState(["eat" , "shit" ,"fihgt"]);
    const[ newTask, setNewTask] = useState("");
    

    function HandleInputChange(event){
        setNewTask(event.target.value);
    }
    function ToAddTask(){
        if (newTask.trim() !== ""){setTasks(t=> [... t, newTask]);
            setNewTask("");

        }
       
    }
    function DeleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function MoveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function MoveTaskdown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input 
                placeholder='Enter some text...'
                type="text" 
                value={newTask}
                onChange={HandleInputChange}/>
                <button className='add-button'
                onClick={ToAddTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index) => 
                <li key = {index}>
                    <span className='Text'>{task}</span>
                    <button className='delete-button ' onClick={() => DeleteTask(index)}>Delete</button>
                    <button className='moveup-button ' onClick={() => MoveTaskUp(index)}>Move up</button>
                    <button className='movedown-button ' onClick={() => MoveTaskdown(index)}>Move down</button>
                </li>
                )}
            </ol>


        </div>
    );
}
export default ToDoList