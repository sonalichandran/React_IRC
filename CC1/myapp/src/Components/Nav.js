import '../Assets/Css/Nav.css'
import {Link} from 'react-router-dom'
function Nav()
{
 return(

    <div className="nav">
      <div className="content1">
            <h1>ChApTeRvIsTa
                </h1>
        </div> 
    <div className="navBar">
        
        <Link to='/Login'><button className="navbutton">Login</button></Link>
        <Link to='/Register'><button className="navbutton">Register</button></Link>
       
        <Link to ='/Home'><button className="navbutton">Home</button></Link>
       
       
    </div>
        <div className="search">
      <input type="text" placeholder="Search your favourite books"  className="searchbar"/>
      <button className="searchbutton">Search</button>
    </div>
   
    </div>
 )
}
export default Nav;