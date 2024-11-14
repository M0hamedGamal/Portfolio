import React from 'react';
import {about} from "../data/dummydata.jsx";
import Heading from "../common/Heading.jsx";

function About(props) {
    return (
        <section className='about'>
            {about.map((val, i) => (
                <div className="container flex" key={i}>
                    <div className="left" data-aos="fade-down-right">
                        <img src={val.cover} alt="about_img"/>
                    </div>
                    <div className="right" data-aos="fade-down-left">
                        <Heading title='About Me'/>
                        <p>{val.desc}</p>
                        <p>{val.desc1}</p>
                        <button className="">Download CV</button>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default About;