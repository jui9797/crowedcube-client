import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import Swal from 'sweetalert2'

const Login = () => {

    const { userlogin,setUser, googleLogin } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const loginUser = { email, password }
        console.log(loginUser)

        userlogin(email, password)
            .then(res => {
                const user = res.user
                setUser(user)
                
                Swal.fire({
                    title: "Congrates",
                    text: "login successful",
                    icon: "success"
                  });
                console.log(user)

            })
            .catch(err => {
           console.log(err.message)
        
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "error"
          });

        })

    
    }
     // google login
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(res=>{
            console.log(res)
            Swal.fire({
                title: "Great",
                text: "Google login successful",
                icon: "success"
              });
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>  New to this website? Please<Link to='/register' className='text-red-600 font-bold'>Register</Link></p>
                        <button onClick={handleGoogleLogin} className='btn m-4 bg-slate-400'>Sign with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;