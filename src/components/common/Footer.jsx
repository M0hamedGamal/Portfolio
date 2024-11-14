import {social} from "../data/dummydata.jsx";

function Footer() {
    return (
        <footer className='footer'>
            {social.map((item, i) => (
                <i key={i} data-aos="zoom-in-left">{item.icon}</i>
            ))}
            <p data-aos="zoom-in-right">All rights Reserved 2024</p>
        </footer>
    );
}

export default Footer;