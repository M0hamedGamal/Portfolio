import Heading from "../common/Heading.jsx";
import {contact} from "../data/dummydata.jsx";

function Contact() {

    return (
        <div className='contact'>
            <div className="container">
                <Heading title='Keep In Touch'/>
                <div className="content flexsb">
                    <div className="right">
                        <form>
                            <div className="flex">
                                <input type="text" placeholder='Name' data-aos="zoom-in-down"/>
                                <input type="email" placeholder='Email' data-aos="zoom-in-up"/>
                            </div>
                            <input type="text" placeholder='Subject' data-aos="zoom-in-up"/>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Message' data-aos="zoom-in-down"/>
                            <button type='submit' data-aos="zoom-in-down">Submit</button>
                        </form>
                    </div>
                    <div className="left">
                        {contact.map((item, i) => (
                            <div className="box" key={i} data-aos="zoom-in-down">
                                <i>{item.icon}</i>
                                <p>{item.text1}</p>
                                <p>{item.text2}</p>
                            </div>

                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;