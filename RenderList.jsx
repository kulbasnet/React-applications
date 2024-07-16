
import React from "react";

function RenderList(props){
    const cate = props.cate;
    const itemsList = props.items;




    
    // const fruits= [{id:1,name:"apple", calories:44},
    // {id:2,name:"bannnana", calories:55},
    // {id:3,name:"mango", calories: 100},
    // {id:4,name:"coconut", calories: 1200}];

    //fruits.sort((a,b)=> a.name.localeCompare(b.name));//alpahbetelcal
    //fruits.sort((a,b) => b.name.localeCompare(a.name));//reversal 
    // fruits.sort((a,b)=> a.calories-b.calories);//Numeric 

   // const highCalFruits= fruits.filter(fruit=> fruit.calories>=100);
    const listitem = itemsList.map(item => <li key={item.key}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b></li>);
    return(
    <>
    <h3 className="head"> {cate}</h3>
    <ol className="listitem"> {listitem}</ol>

    </>);

}
RenderList.defaultProps={
    cate:'category',
    items:[],
}

export default RenderList