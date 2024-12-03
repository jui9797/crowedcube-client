import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import auth from './Firebase/firebase.config';
import { updateProfile } from "firebase/auth";

const Register = () => {

    const {createNewUser, setUser} =useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault()
        const form =e.target
        const name =form.name.value
        const email =form.email.value
        const photo =form.photo.value
        const password =form.password.value
        const newUser ={name, email, photo, password}
        console.log(newUser)

        createNewUser(email, password)
        .then(result =>{
            const user =result.user
            console.log(user)
            updateProfile(auth.currentUser, {displayName:name, photoURL:photo})
        .then(()=>{
          
          setUser({...auth.currentUser, displayName:name, photoURL:photo})
          
        })
        .catch(err =>{
          console.log(err.message)
          
        })
        })
        .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>  Already register ? Please<Link to='/login' className='text-red-600 font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;