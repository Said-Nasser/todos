import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="mt-5">
            <h1 className="display-3 text-center mb-3 mt-5">
                WELCOME
                </h1>

            <Link to="/tasks" className="text-center d-block" >
                <button className="btn btn-lg btn-light">
                    Go To Board!
                </button>
            </Link>
        </div>
    );
}

export default Home;
