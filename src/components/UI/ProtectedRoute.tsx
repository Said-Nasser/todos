import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Profile from './Profile';

interface propsType { path: string, loggedIn: boolean }
const ProtectedRoute = (props: propsType) => {
    return (
        <Route path={props.path} render={(routerProps: any) => (props.loggedIn ? (
            <Profile />
        ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: routerProps.location }
                    }}
                />
            ))
        }
        />
    );
}

export default ProtectedRoute;
