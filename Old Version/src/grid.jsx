import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import img8 from './images/8.jpg'
import img9 from './images/9.jpg'
import img10 from './images/10.jpg'
import img11 from './images/11.jpg'
import img12 from './images/12.jpg'
import {ImageList, ImageListItem} from "@mui/material";
import Typewriter from 'typewriter-effect';

function ImgsGrid() {
    const itemData = [
        {
            img: img1,
            title: 'Breakfast',
            rows: 2,
        },
        {
            img: img2,
            title: 'Burger',
        },
        {
            img: img3,
            title: 'Camera',
        },
        {
            img: img4,
            title: 'Coffee',
        },
        {
            img: img5,
            title: 'Hats',
        },
        {
            img: img6,
            title: 'Honey',
            rows: 2,
        },
        {
            img: img7,
            title: 'Basketball',
        },
        {
            img: img8,
            title: 'Fern',
        },
        {
            img: img9,
            title: 'Mushrooms',
            rows: 2,
        },
        {
            img: img10,
            title: 'Tomato basil',
        },
        {
            img: img11,
            title: 'Sea star',
        },
        {
            img: img12,
            title: 'Bike',
        },
    ];
    return (
        <>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Love YOU <3')
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                }}
                options={{
                    strings: ['Hey', 'Nemo', 'I'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'typeWriterText',
                    cursorClassName: 'typeWriterCursor',
                }}
            />
        <ImageList
            variant="quilted"
            cols={2}
            // gap={0}
            rowHeight={121}>
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        srcSet={`${item.img}`}
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
        </>
    );
}

export default ImgsGrid;