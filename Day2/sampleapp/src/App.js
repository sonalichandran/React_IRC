import React from 'react';
import { FaEnvelope, FaGoogle } from 'react-icons/fa';
import './Assets/Css/Styl.css';

// Assuming img is the correct import for your image
import img1 from './Assets/Images/book4.jpeg'

function App() {
    return (
        <form>
            <div>
                <h1>Until I feared I would lose it, I never loved to read....</h1>

                <img src={img1} alt="Book" className="book-image" />
            </div>
            <div className="left">
                
              
            <div className="container">
                <h3 className="h">Login Page</h3>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" className="input" />

                <label htmlFor="pw">Password</label>
                <input type="password" name="pw" id="pw" className="input" />
                <div className="hello">
                    <button type="submit" className="bb">
                        LOGIN
                    </button>
            <button className="back"> Back</button>
            </div>
                </div>
            </div>
        </form>
    );
}

export default App;
