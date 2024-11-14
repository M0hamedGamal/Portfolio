import React from 'react';
import Heading from "../common/Heading.jsx";
import {services} from "../data/dummydata.jsx";

function Services(props) {
    return (
        <section className='services'>
            <div className="container">
                <Heading title='Services'/>
                <div className="content grid3">
                    {services.map((val, i) => (
                        <div className="box" key={i} data-aos="flip-left">
                            <i>{val.icon}</i>
                            <h3>{val.title}</h3>
                            <p>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;