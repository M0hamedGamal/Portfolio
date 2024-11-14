import {testimonials} from "../data/dummydata.jsx";
import {FormatQuote} from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
    const settings = {
        dots: false,
        fade: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className='testimonials hero'>
            <div className="container">
                <Slider {...settings}>
                    {testimonials.map((item, i) => (
                        <div className='box' key={i}>
                            <i data-aos="zoom-out-up">
                                <FormatQuote/>
                            </i>
                            <p data-aos="zoom-out-down">{item.text}</p>
                            <div className="img">
                                <img src={item.image} alt="testimonial_img" data-aos="zoom-out-right"/>
                            </div>
                            <h3 data-aos="zoom-out-left">{item.name}</h3>
                            <label data-aos="zoom-out">{item.post}</label>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Testimonials;