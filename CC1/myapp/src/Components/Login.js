import '../Assets/Css/Login.css'
import img1 from '../Assets/Image/book4.jpeg'
import {Link} from 'react-router-dom'
import Home from '../Components/Home'
function Login()
{
    return(
        <form className="login-wrapper">
            <div >
                 <div className="image-wrapper">

                <img src={img1} alt="Book" className="book-image" /> 
                 </div>
            </div>
            <div className="left">
                
              
              
            <div className="container-wrapper">
                <h3 className="h">Login Page</h3>
                <label htmlFor="username">Username</label>
            
                <input type="text" name="username" id="username" className="input" />

                <label htmlFor="pw">Password</label>
                <input type="password" name="pw" id="pw" className="input" />
                <div className="hello">
                    <button type="submit" className="bb">
                        LOGIN
                    </button>
         
            <Link to='/Home'><button className="back">Back</button></Link>
            </div>
                </div>
                    
                </div>
        
        </form>
    )
}
export default Login;