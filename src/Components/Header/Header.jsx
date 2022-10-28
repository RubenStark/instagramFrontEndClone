import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";


function Header({ profile, userProfile }) {

    const [windowLocation, setwindowLocation] = useState(window.location.pathname);

    const handleWindowLocation = () => {
        setwindowLocation(window.location.pathname);
    }

    return (
        <>
            <header onClick={handleWindowLocation}>
                <div className="th">
                    <NavLink to="/" >
                        <img
                            className='InstaLogo'
                            src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                            alt="React Logo"
                        />
                    </NavLink>
                </div>

                <input
                    className="SearchBar"
                    type="text"
                    placeholder="Search"
                    name="search"
                />
                <div className="icons">

                    <NavLink to="/" >
                        <img
                            className="icon"
                            src={windowLocation === "/" ? "./icons/home-active.svg" : "./icons/home.svg"}
                        />
                    </NavLink>
                    <img
                        className="icon"
                        src="./icons/whatsapp.svg"
                    />
                    <NavLink to="/create" >
                        <img
                            className="icon"
                            src={windowLocation === "/create" ? "./icons/edit-active.svg" : "./icons/edit.svg"}
                        />
                    </NavLink>
                    <NavLink to="/notifications" >
                        <img
                            className="icon"
                            src={windowLocation === "/notifications" ? "./icons/heart-liked.svg" : "./icons/heart.svg"}
                        />
                    </NavLink>
                    {
                        localStorage.getItem('token') ? 
                        <NavLink to="/profile" profile={profile}>
                            <img
                                className="icon-avatar"
                                src={userProfile.avatar}
                            />
                        </NavLink> :
                        <NavLink to="/login" >
                            <img
                                className="icon-avatar"
                                src={profile.avatar}
                            />
                        </NavLink>
                    }


                </div>

            </header>
        </>
    );
}

export default Header;