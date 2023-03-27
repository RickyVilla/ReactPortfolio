import React from "react";
import { Outlet } from "react-router-dom";
// 
import SideNav from "./SideNav";
// 
const Layout = () => {
    return (
        <>
        <SideNav />
        <Outlet />
        {/* footer */}
        </>
    )
}
// 
export default Layout;