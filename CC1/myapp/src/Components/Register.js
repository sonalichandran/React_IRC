import '../Assets/Css/Register.css'
import img1 from '../Assets/Image/book4.jpeg'
function Register()
{
    return( <form>
        <div>
            

            <img src={img1} alt="Book" className="book-image" />
        </div>
        <div className="left">
            
          
        <div className="container1">
            <h3 className="h">Registration Page</h3>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" className="input" />
            <label htmlFor="username">Email</label>
            <input type="email" name="username" id="username" className="input" />

            <label htmlFor="pw">Password</label>
            <input type="password" name="pw" id="pw" className="input" />
            <label htmlFor="pw">Confirm Password</label>
            <input type="password" name="pw" id="pw" className="input" />
            <label htmlFor="username">Favourite Journal</label>
            <input type="text" name="username" id="username" className="input" />
            <div className="hello">
                <button type="submit" className="bb">
                    Register
                </button>
       
        </div>
            </div>
        </div>
    </form>)
}
export default Register;