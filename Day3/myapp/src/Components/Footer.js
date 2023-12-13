import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram,FaYoutube, FaLinkedinIn, FaCamera} from 'react-icons/fa';
function Footer ()
{
    return(
        <div>

        <div className="foot">
           
            <FaFacebook className="icon"/>
            <FaInstagram className="icon"/>
            <FaTwitter className="icon"/>
            <FaYoutube className="icon"/>
            <FaLinkedinIn className="icon"/>
            <FaCamera className="icon"/>
                
            

        </div>
        <div className="content"><p className="para">Today Everything exists to end in a photograph</p></div>
        </div>

    )
}
export default Footer;