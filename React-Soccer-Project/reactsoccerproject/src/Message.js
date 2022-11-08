import React from "react";
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import BootForm from "./BootForm";


const Message = ({test}) => {  
    return (
        <Router>
          <Routes>
           
             
            
             
             <Route path= "/bootform"  element={<BootForm />} />
            
            
             
             
          
          </Routes>
          
       
        </Router>
        
    )
}

export default Message;