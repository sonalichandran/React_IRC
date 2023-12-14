import Nav from './Components/Nav'
import Login from './Components/Login'
import Home from './Components/Home'
import {Route,Routes} from 'react-router-dom'
import Register from './Components/Register'



function App() {
  return (
    <div>
    
   
   
  
   
    <Home/>
   <Nav/>  
   
    <Routes><Route path="/Register" element={<Register/>}/></Routes>
    <Routes><Route path="/Login" element={<Login/>}/></Routes> 
    

    {/* <div className="content1">
            <h1>ChApTeRvIsTa
                </h1>
    </div>  */}



    

  
    </div>
  
  );
}

export default App;
