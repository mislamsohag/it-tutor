import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/Firebase.init";



const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }

        // setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(userInfo)

        signInWithEmail(userInfo.email, userInfo.password);

    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError, googleError])

    return (
        <div className="container">
            <h2 className='text-3xl text-center my-2'>LOGIN</h2>
            <form className="'w-50 mx-auto" onSubmit={handleLogin}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                    <input type="text" placeholder="Your Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange} />
                </div>

                {errors?.email && <p className="text-danger">{errors.email}</p>}

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                    <input type="password" placeholder="password" className="form-control" id="exampleInputPassword1" onChange={handlePasswordChange} />
                </div>

                {errors?.password && <p className="text-danger">{errors.password}</p>}

                <button className="btn btn-primary">Login</button>

                {/* {error && <p className="error-message">{error}</p> } */}
                {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}

                <ToastContainer />

                <p className="text-danger">Don't have an account? <Link to="/signup"><span className="text-primary">Sign up first </span></Link> </p>
            </form>

            <button className="btn btn-success" onClick={() => signInWithGoogle()}> Sign in Google</button>
        </div>
    );
};

export default Login;