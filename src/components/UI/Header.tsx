import React from 'react';
import { Link } from 'react-router-dom';
interface propsType {
    loggedIn: boolean,
    onLogout: any
}
const Header = (props: propsType) => {
    let logout = () => {
        props.onLogout()
    }
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav justify-content-center w-100">
                            <Link to="/" className="nav-item nav-link">
                                Home
                            </Link>
                            <Link to="/tasks" className="nav-item nav-link">
                                Tasks
                            </Link>
                            <Link to="/login" className={`nav-item nav-link login ${props.loggedIn ? "d-none" : ""}`}>
                                Login
                            </Link>
                            <Link to="/login" onClick={logout} className={`nav-item nav-link logout ${props.loggedIn? "": "d-none"}`}>
                                Logout
                            </Link>
                            <Link to="/profile" className="nav-item nav-link">
                                Profile
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
