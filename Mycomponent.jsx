import React, {useState} from 'react';
function Mycomponent(){

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployee, setisEmploye] = useState(false);

    const updateName = ()=>{
        setName("Kul");
    }

    const updateAge =()=>{
        setAge(age+1);
    }

    const employeStat = ()=>{
        setisEmploye(true);
    }
    return(<div>
        <p>Name : {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age : {age}</p>
        <button onClick={updateAge}>Set Age</button>

        <p>Employement : {isEmployee ? 'yes':'No'}</p>
        <button onClick={employeStat}>Employement </button>
    </div>);

    

}
export default Mycomponent