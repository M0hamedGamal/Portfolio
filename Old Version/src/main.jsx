import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "./layouts/Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/pages/About.jsx";

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
