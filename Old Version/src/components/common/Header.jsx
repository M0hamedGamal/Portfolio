import logo from '../data/images/logo.png'
import {navLink} from "../data/dummydata.js";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Button} from "@mui/material";
import {Menu} from "@mui/icons-material";

const Header = () => {
    const [responsive, setResponsive] = useState(false)
    return (
        <header>
            <div className="container flexsb">
                <div className='logo'>
                    <img src={logo} alt="Logo"/>
                </div>
                <div className={responsive? 'mobileMenu' : "nav"}>
                    {navLink.map((link, i) => (
                        <Link to={link.url} key={i}>{link.text}</Link>
                    ))}
                </div>
                <button className='toggle' onClick={() => {setResponsive(!responsive)}}>
                    <Menu className='icon'/>
                </button>
            </div>
        </header>
    );
}

export default Header;