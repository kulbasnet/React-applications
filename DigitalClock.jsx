import React, {useState,useEffect} from 'react';

function DigitalClock(){

    const [time,setTime] = useState(new Date());


    useEffect(()=>{

      const intervalID =  setInterval(()=>{
        setTime(new Date());

        },1000);

        return()=>{
            clearInterval(intervalID);
        }

    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridium= hours >= 12 ?'PM' : 'AM';

        hours = hours % 12 || 12;


        return `${hours}: ${minutes}:${seconds} ${meridium}`;


    }


    


    return(<div>

        <span> {formatTime()}</span> 
    </div>)

}



export default DigitalClock