import React, {useState} from "react"

function Todolist(){
    const [task,settask]= useState([]);
    const [newtask, setnewtask ] = useState('');

    function handleInputchange(event){
        setnewtask(event.target.value);
    }
    function addTask(){
        settask(t=>[...t, newtask])
        setnewtask('');
        

    }
    function removeTask(index){
        
        const updatedTask =(task.filter(( _ , i)=> i !==0));
        settask(updatedTask);

    }
    // function moveupTask(){

    // }
    return(<div className="TOdolist-container">

        <h1> TO DO List</h1>
        <div>


        <input type='text' id="input"  placeholder="Enter a Task" value={newtask} onChange={handleInputchange}/>

        <button onClick={addTask}>Add</button>

        </div>


        <ol>
            {task.map((task , index)=>
                 <li key={index}> 
                
            <span className="text">    {task}  </span>
            <button onClick={()=> removeTask(index)}>
               Delete</button>

            </li>)}
        </ol>
    </div>)

}

export default Todolist