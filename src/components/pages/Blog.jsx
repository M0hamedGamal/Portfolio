import {blog} from "../data/dummydata.jsx";
import Heading from "../common/Heading.jsx";

function Blog() {
    return (
        <section className='blog'>
            <div className="container">
                <Heading title='Blog'/>
                <div className="content grid3">
                    {
                        blog.map((item, i) => (
                            <div className='box' key={i} data-aos="flip-left">
                                <div className="img" data-aos="flip-up">
                                    <img src={item.cover} alt="blog_img" data-aos="flip-down"/>
                                </div>
                                <div className="text">
                                    <h3 data-aos="flip-right">{item.title}</h3>
                                    <label data-aos="flip-left">By {item.author} {item.date}</label>
                                    <p data-aos="fade-up-right">{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog;