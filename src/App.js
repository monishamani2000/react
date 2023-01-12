import logo from './logo.svg';
import './App.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import{Home} from'./component/Home/Home';
// import {Super} from './component/superover/super';
// import {Congr} from './component/congrats/cong';
// import {Social} from './component/social/social';
// import {Notify} from './component/notifcation/notify';
// import {Login}from './component/login/login';
// import {Technology} from './component/technology/tech';
// import { Menu } from './component/menu/menu';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//     <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/super' element={<Super/>}/>
//     <Route path='/cong' element={<Congr/>}/>
//     <Route path='/social' element={<Social/>}/>
//     <Route path='/notify' element={<Notify/>}/>
//     <Route path='/login' element={<Login/>}/>
//     <Route path='/tech' element={<Technology/>}/>
//     <Route path='/menu' element={<Menu/>}/>

//     </Routes>
//        </BrowserRouter>  
//     </> 
  
//   );
// }


// import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import{Overall} from'./Responsive/Home1';

// function App(){
//   return(
//     <>
//     <Overall/>
//     </>
//   );
// }
// export default App;



import React from "react";

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home1 } from "./Responsive/Home1";
import { Work} from "./Responsive/Work";
import { Form } from "./Responsive/Form";
import{About} from"./Responsive/About";
import{Testimonial} from "./Responsive/Testimonial";
import { Products } from './Responsive/Products';
import {Conclusion} from "./Responsive/Conclusion";
// import {State} from "./Responsive/state";




function App(){
  return(
    <>

     {/* <BrowserRouter>
     <Routes>
         <Route path='/' element={<Home1/>}/>
         <Route path='/Work' element={<Work/>}/>
         <Route path='/Form' element={<Form/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Testimonial' element={<Test/>}/>
         <Route path='/Products' element={<Products/>}/>
         <Route path='/Conclusion' element={<Conclusion/>}/>
         <Route path='/Menu1' element={<Menu1/>}/>

        </Routes>
        </BrowserRouter>    */}
          <Home1/>
        <Work/>
        <Form/>
        <About/>
        <Testimonial/>
        <Products/>
        <Conclusion/>
         
         {/* <State/>  */}
    </>
  );
}
export default App;
