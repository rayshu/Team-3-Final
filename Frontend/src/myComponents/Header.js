import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../RBS-logo.png';
import profile from '../profile.png';

export class Header extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="col text-left">
                        <img id="pro" src={logo} alt="profile" height="40px" ></img>                    
                        <Link to="/home">
                        <button className="btn btn-sm btn-outline-dark ml-2" type="button">Home</button>
                        </Link> <br></br>
                    </div>    
                    <div className="col text-right">  
                        <img id="pro" src={profile} alt="profile" height="40px"></img>
                        <span className="btn btn-sm btn-dark mr-3"><b>Welcome</b></span>                                       
                        <Link to="/">
                        <button className="btn btn-sm btn-outline-secondary" type="submit">Sign Out</button>
                        </Link>
                    </div>
                    
                </nav>

          

            </div>
        );
    }
}


export default Header;