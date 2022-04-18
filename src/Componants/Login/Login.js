
import { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Form, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';


const Login = () => {

    const [login, setLogin] = useState([true])

    const [confirmError, setConfirmError] = useState('');

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPass: ''
    })

    //ইউজার তৈরি করার জন্য
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    // লগইন করার জন্য
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //লগইন চেক করার জন্য
    const [
        loginUser,
        loginLoading,
        loginError
    ] = useAuthState(auth);

    const handleFormInput = (event) => {
        userInfo[event.target.name] = event.target.value;
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        if (!login) {

            if (userInfo.password !== userInfo.confirmPass) {
                setConfirmError("password cna't match");
                return;
            }
            setConfirmError("")
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }
        else {
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
        }
    }

    let navigate = useNavigate();
    let location = useLocation();
    // let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

    if (loginUser) {
        navigate(from, { replace: true });
    }

    return (
        <>
            <div className='container'>
                <Form className='w-50 mx-auto' onSubmit={handleSubmit}>

                    <h2 className='text-3xl text-center my-2'>
                        {login ? "Login" : "Register"}
                    </h2>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={(event) => handleFormInput(event)} type="text" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={(event) => handleFormInput(event)} type="password" className="form-control" name='password' id="exampleInputPassword1" />
                    </div>

                    {
                        !login && <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                            <input onBlur={(event) => handleFormInput(event)} type="password" className="form-control" name='confirmPass' id="exampleInputPassword1" />
                        </div>
                    }

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() => setLogin(!login)} />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me for Registe or Login</label>
                    </div>

                    <Button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</Button>
                    <p className='text-danger'>{confirmError}</p>
                    {
                        createError && <p className='text-danger'>{createError.message}</p>
                    }
                    {
                        createUser && <p className='text-primaryr'>User Create Successfully</p>
                    }
                    {
                        user && <p className='text-success'>User Login Successfully</p>
                    }
                </Form>
            </div>
        </>
    );
};

export default Login;