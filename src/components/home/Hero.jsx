import React from 'react';
import {home} from "../data/dummydata.jsx";
import Typewriter from "typewriter-effect";

function Hero(props) {
    return (
        <section className='hero'>
            {home.map((data, i) => (
                <div className='hero-content' key={i}>
                    <h3 data-aos="fade-right">{data.text}</h3>
                    <h1>
                        <Typewriter
                            options={{
                                strings: [data.name, data.work],
                                autoStart: true, loop: true
                            }}
                        />
                    </h1>
                    <p data-aos="fade-left">{data.desc}</p>
                    <button className='primary-btn' data-aos="fade-up-right">Download CV</button>
                </div>
            ))}

        </section>
    );
}

export default Hero;