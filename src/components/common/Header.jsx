import React, {useState} from 'react';
import logo from '../data/images/logo.png'
import {navLink} from "../data/dummydata.jsx";
import {Link} from "react-router-dom";
import {Menu} from "@mui/icons-material";

function Header(props) {
    const [responsive, setResponsive] = useState(false)
    return (
        <header>
            <div className='container flexsb'>
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                    {/*<h3>Mohamed Gamal Al-Doctor</h3>*/}
                </div>
                <div className={responsive ? 'mobile-menu' : "nav"}>
                    {navLink.map((val, i) => (
                        <Link to={val.url} key={i}>{val.text}</Link>
                    ))}
                </div>
                <button className='toggle' onClick={() => {
                    setResponsive(!responsive)
                }}>
                    <Menu className='icon'/>
                </button>
            </div>
        </header>
    );
}

export default Header;