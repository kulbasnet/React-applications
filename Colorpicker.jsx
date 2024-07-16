import React, {useState} from 'react';
function Colorpicker(){
    const [color , setColor] = useState('#FFFFFF');

   function colorchange (event){
    setColor(event.target.value)
   }




    return(<div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor : color}}>
            <p> Selected Color : {color}</p>
            <input type='color' value={color} onChange={colorchange}/> 

        </div>
        
    </div>);
 

}

export default Colorpicker