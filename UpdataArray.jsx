import React, {useState} from "react"
function UpdateArray(){

    const [food,setFood] = useState(['Aplle','orange','bannana']);

    function handleAddfood(){
        const newfood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';
        setFood(f =>[...f,newfood]);

        

    }

    function removeFood(index){
        setFood(food.filter((_,i)=> i !== index));


    }

    return(<div>
        <h2> List of Foods</h2>
        <ul>
            {food.map((food,index )=> 
            <li key={index} onClick={() => removeFood(index)}>
                {food}
            </li>)}
        </ul>
        <input placeholder="add food" type="text" id='foodInput'/>
        <button onClick={handleAddfood}>Add Food</button>

    </div>)


   
}

export default UpdateArray










 // const [food , setFood] = useState(['Aplle','orange','bannana']);

    // function handleFood(){
    //     const newFood = document.getElementById('foodInput').value;
    //     document.getElementById('foodInput').value ="";
    //     setFood(f=>[...f,newFood]);
    // } 


    // return(<div>
    //     <h2>List of Food </h2>
    //     <ul>
    //         {food.map((food,index)=> <li key={index}> {food} </li>)}
    //     </ul>
    //     <input type="text" id="foodInput" placeholder="Enter Food name"/>
    //     <button onClick={handleFood}>Add Food</button>

    // </div>)
