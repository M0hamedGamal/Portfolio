import {useState} from 'react';
import {portfolio} from "../data/dummydata.jsx";
import {Visibility} from "@mui/icons-material";
import Heading from "../common/Heading.jsx";

function Portfolio() {
    const allCategory = ['all', ...new Set(portfolio.map(item => item.category))]
    const [list, setList] = useState(portfolio)
    const [categories, setCategories] = useState(allCategory)

    const filterItems = (category) => {
        if (category === 'all') {
            setList(portfolio)
            return
        }
        const newItems = portfolio.filter(item => item.category === category)
        setList(newItems)
    }
    return (
        <article>
            <div className="container">
                <Heading title='Potfolio'/>
                <div className="cat-btn">
                    {categories.map((category, i) => (
                        <button className='primary-btn' 
                                onClick={() => filterItems(category)}
                                key={i} data-aos="zoom-out-down">{category}</button>
                    ))}
                </div>
                <div className="content grid3">
                    {list.map((item, i) => (
                        <div className="box" key={i} data-aos="fade-up">
                            <div className="img">
                                <img src={item.cover} alt="img"/>
                            </div>
                            <div className="overlay">
                                <h3>{item.title}</h3>
                                <span>{item.name}</span>
                                <Visibility/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default Portfolio;