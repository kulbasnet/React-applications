import React, {useEffect, useState} from "react"

function UseEffecthook(){
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);



    useEffect(()=>{
        window.addEventListener('resize', handleResixe);
    console.log('Added event added');

    return()=>{
        window.removeEventListener("resize",handleResixe);
        console.log('lost event listerne');
    }
        

    },[]);

    useEffect(()=>{
        document.title= `Size of the Screen ${height} * ${width}`
    })
    


    function handleResixe(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }




    return(<div>

        <p> Window Width : {width}px</p>

        <p> Window Height : {height}px</p>

    </div>)


}
//     
export default UseEffecthook














// const [count, setCount] = useState(0);
//     const [color, setColor] = useState('green');

//     useEffect(()=>{
//         document.title = `Count ${count} ${color}`;
//     },[count, color]);

//     function addCount(){
//         setCount(c=> c+1);

//     }

//     function subsCount(){
//         setCount(c=> c-1);
//     }


//     function changeColor(){
//         setColor(c=> c==='green' ? "red" : 'green');
//     }
//     return(<div>
//         <p style={{color : color}}> Count : {count} </p>
//         <button onClick={addCount} >ADD </button>
//         <button onClick={subsCount} >Substract </button><br/>
//         <button onClick={changeColor}> Chsnge Color</button>


//     </div>)

// 
