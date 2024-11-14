import Hero from "./Hero.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import Counter from "../pages/Counter.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Testimonials from "../pages/Testimonials.jsx";
import Blog from "../pages/Blog.jsx";
import Contact from "../pages/Contact.jsx";

function Home(props) {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Counter />
            <Portfolio />
            <Testimonials />
            <Blog />
            <Contact />

        </div>
    );
}

export default Home;