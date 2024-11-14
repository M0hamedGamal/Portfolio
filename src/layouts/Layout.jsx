import Header from "../components/common/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/common/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function Layout() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
