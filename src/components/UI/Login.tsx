import React from 'react';
import { useHistory } from "react-router-dom";
interface propsType {
    loggedIn: boolean,
    onLogin: any
}


const Login = (props: propsType) => {


    let history = useHistory();
    let from = { pathname: "/profile" };



    let _username: any, _password: any;
    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (
            _username.value !== localStorage.getItem("username") ||
            _password.value !== localStorage.getItem("password")
        ) {
            document.querySelector('#warning-message')?.classList.add("visible")
        } else {
            props.onLogin()
            history.replace(from);
        }
    }




    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-xl-4 my-5 bg-light p-3 rounded">
                <h1 className="display-4 text-center mb-3">
                    Login
                </h1>
                <p id="warning-message">Wrong Credentials.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="username" required
                            ref={input => _username = input} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="password" required
                            ref={input => _password = input} 
                        />
                    </div>
                    <button className="btn btn-lg btn-block btn-primary">
                        Sign in
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Login;
