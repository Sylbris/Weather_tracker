import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import AppNavBar from "../AppNavBar/AppNavBar";
import { useSelector } from "react-redux";

const AppMainPage = () => {
    const [user, setUser]  = useState(JSON.parse(localStorage.getItem('profile')));
    
    useEffect( () => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);
    
    return (
        <>
        <div style={{backgroundColor: "#CDC2AE"}}>
        {
                        !user ? ( <Login user={user} setUser={setUser} /> ) :
                        (<AppNavBar />)
        }
        </div>
        </>
    );
}

export default AppMainPage;