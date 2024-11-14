import React from 'react';
import {home} from "../data/dummydata.js";
import Typewriter from "typewriter-effect";

function Hero(props) {
    return (
        <section className='hero'>
            {
                home.map((val, i) => (
                    <div className='heroContent'>
                        <h3>{val.text}</h3>
                        <h1>
                            <Typewriter options={{
                                strings: [val.name, val.work],
                                autoStart: true, loop: true
                            }}/>
                        </h1>
                        <p>{val.desc}</p>
                        <button className='primaryBtn'>Download CV</button>
                    </div>
                ))
            }
        </section>
    );
}

export default Hero;