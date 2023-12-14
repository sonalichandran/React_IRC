import Nav from './Components/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes><Route path="/About" element={<About/>}></Route>
     <Route path="/Home" element={<Home/>}></Route>
     <Route path="/Contact" element={<Contact/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
