import React, {useState} from "react"

function Arrayofobjects(){

    const [cars,setCars]= useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake,setMake]  = useState("");
    const [carModel,setModel]  = useState("");



    function handleAddcar(){
        const newCar= {year : carYear, model : carModel, make:carMake};
        setCars(c=>[...c,newCar]);

    }

    function removeCar(index){
       setCars(c=>c.filter(( _ , i) => i !== index));

    }

    function handleYearchange(event){
        setYear(event.target.value);


    }

    function handleMakeChange(event){
        setMake(event.target.value);

 
   }

   function handleModelchange(event){
    setModel(event.target.value);

   }

   return(<div>
    <h2> List of Car Objects</h2>
    <ul> 
        {
        cars.map((car,index)=> <li key={index} onClick={()=>removeCar(index)}>
            {car.year} {car.make} {car.model}
            </li>)}
        
    </ul>

    <input type="number" value={carYear} onChange={handleYearchange}/><br/>
    <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/><br/>
    <input type="text" value={carModel} onChange={handleModelchange} placeholder="Enter car Model"/><br/>
    <button onClick={handleAddcar} > Add Car</button>


    
   </div>)

}


export default Arrayofobjects