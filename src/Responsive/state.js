import {React,useStae, useState} from "react";

// import { BrowserRouter,Routes,Route} from 'react-router-dom';

// import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export function State(){
    const[count,setCount]=useState(0)

    function add(){
        setCount(count+1)               // java script use to create function function name to increase values to click button                          
    }


    return(    
                                                                         //react js use to create function component name to increase values to click button                          
        <>
        <h1>{count}</h1>
        <input type="button" value=" Decrese  " onClick={add}/>  <br/>

        {/* <input type="button" value="  Increse  " onClick={()=>setCount(count+1)}/>  <br/> */}
        <input type="button" value=" Decrese  " onClick={()=>setCount(count-1)}/>  <br/>
        <input type="button" value=" Reset  " onClick={()=>setCount(count*0)}/>

        </>
    );
}