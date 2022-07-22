import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//pages
import HomePage from "../src/pages/dashboard";
 
function App() {
   return (
       <BrowserRouter >
           <Routes>
            <Route path='/' element={<HomePage/>}/>
           </Routes>
       </BrowserRouter>
   );
}
 
export default App
