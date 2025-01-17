import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import Swal from 'sweetalert2'
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json"
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const location =useLocation()
    const navigate =useNavigate()

    const { userlogin,setUser, googleLogin } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const loginUser = { email, password }
        

        userlogin(email, password)
            .then(res => {
                const user = res.user
                setUser(user)
                
                Swal.fire({
                    title: "Congrates",
                    text: "login successful",
                    icon: "success"
                  });
                  navigate(location?.state? location.state:'/')
                

            })
            .catch(err => {
          
        
        Swal.fire({
            title: "Sorry",
            text: "Invalid credential",
            icon: "error"
          });

        })

    
    }
     // google login
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(res=>{
            
            Swal.fire({
                title: "Great",
                text: "Google login successful",
                icon: "success"
              });
              navigate(location?.state? location.state:'/')
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                        Welcome back! Access your account to continue exploring endless opportunities. Enter your credentials to enjoy a seamless experience. Don,t have an account yet? Sign up today and join our community!
                        </p>
                        {/* lottie */}
                        <div style={{ width: 300, height: 300 }}>
                        <Lottie animationData={groovyWalkAnimation} />

                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-500 text-white">Login</button>
                            </div>
                        </form>
                        <p className='ml-2'>  New to this website? Please<Link to='/register' className='text-pink-700 font-bold ml-2'>Register</Link></p>
                        <button onClick={handleGoogleLogin} className='btn m-4 bg-slate-200 text-blue-800'><span className='text-xl'><FcGoogle /></span>
                            Sign with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;