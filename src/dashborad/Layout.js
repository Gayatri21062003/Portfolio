import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "./Dashboard";

function Layout() {
    return (
        <div>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
