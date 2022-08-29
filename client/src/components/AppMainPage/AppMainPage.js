import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import AppNavBar from "../AppNavBar/AppNavBar";
import { useSelector } from "react-redux";

/**
 * This will display the Navigation if user logged it, otherwise displays the 
 * login feature.
 * @param {*} param0 
 * @returns 
 */
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