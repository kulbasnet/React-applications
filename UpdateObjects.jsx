import React, {useState} from "react"
function UpdateObjects(){

    const [car, setCar] = useState({year: 2032,
                                    make : "MERCEDES",
                                    model : "Slr"
    })

    function handleMake(event){
        setCar(c =>({...c, make: event.target.value}));

    }

    function handleYear(event){
        setCar(c =>({...c, year: event.target.value}));

    } 
    
    function handleModel(event){
        setCar(c=>({...c,model:event.target.value}));

    }


    return(<div>
        <p> My favourite Car is {car.model} It was made in {car.year} and {car.make} does the production</p>
        <input type="number" value={car.year} onChange={handleYear}/><br/>
        <input type="text"  value={car.make} onChange={handleMake}/><br/>
        <input type="text" value={car.model}  onChange={handleModel}/><br/>

    </div>)
}

export default UpdateObjects