import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, googleSignIn, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <div>
            {!user ? <div>
                <h2>Please Login</h2>
                <button className="btn btn-warning" onClick={googleSignIn}>Google Sign In</button>
            </div> : <h2>Hello {user?.displayName}</h2>}
        </div>
    );
};

export default Login;