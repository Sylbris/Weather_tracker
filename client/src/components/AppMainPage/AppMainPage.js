import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import AppNavBar from "../AppNavBar/AppNavBar";
import { useSelector } from "react-redux";

const AppMainPage = ({ user, setUser }) => {
    
    return (
        <>
        <div style={{backgroundColor: "#CDC2AE"}}>
        {
                        !user ? ( <Login user={user} setUser={setUser} /> ) :
                        (<AppNavBar setUser={setUser}/>)
        }
        </div>
        </>
    );
}

export default AppMainPage;