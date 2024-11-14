import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "./layouts/Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import Testimonials from "./components/pages/Testimonials.jsx";
import Blog from "./components/pages/Blog.jsx";
import Contact from "./components/pages/Contact.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/services",
                element: <Services/>,
            },
            {
                path: "/portfolio",
                element: <Portfolio/>,
            },
            {
                path: "/testimonials",
                element: <Testimonials/>,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant='h4'>No such page was found.</Typography>
                </Box>,
            },
        ]
    },
]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
