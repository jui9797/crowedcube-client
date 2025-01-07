import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import Loader from "./Loader";


const Navbar = () => {
    
    const { user, logOut ,loading} = useContext(AuthContext)
    
    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-[#023047] bg-white hover:text-[#023047] hover:bg-white py-2 px-4 text-center rounded" : "text-white py-2 px-4 text-center rounded"}>Home</NavLink>
        <NavLink to="/allCamp" className={({ isActive }) => isActive ? "text-[#023047] bg-white hover:text-[#023047] hover:bg-white py-2 px-4 text-center rounded" : "text-white py-2 px-4 text-center rounded"}>All Campaign</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#023047] bg-white hover:text-[#023047] hover:bg-white py-2 px-4 text-center rounded" : "text-white py-2 px-4 text-center rounded"}>About Us</NavLink>
        {
            user && <NavLink to="/newCamp" className={({ isActive }) => isActive ? "text-[#023047] bg-white hover:text-[#023047] hover:bg-white py-2 px-4 text-center rounded" : "text-white py-2 px-4 text-center rounded"}>Add New Campaign</NavLink>
        }
        
        {
            user && <NavLink to={`/myCamp`} className={({ isActive }) => isActive ? "text-[#023047] bg-white hover:text-[#023047] hover:bg-white py-2 px-4 text-center rounded" : "text-white py-2 px-4 text-center rounded"}>My Campaign</NavLink>
        }
        {
            user && <NavLink to={`/myDonation`} className={({ isActive }) => isActive ? "text-[#023047] bg-white hover:text-[#023047] hover:bg-white py-2 px-4 text-center rounded" : "text-white py-2 px-4 text-center rounded"}>My Donation</NavLink>
        }
        
    </>

    return (
        <div className=" text-white">
            <div className="navbar bg-[#023047] fixed top-0 z-10 w-[91.666%] mx-auto ml-4 md:ml-8 lg:ml-16">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#023047] rounded-box z-[1] mt-3 w-52 p-2 shadow items-center gap-4">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">CrowdCube</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                {loading ? (
                        <div className="flex items-center">
                            <Loader></Loader>
                        </div>
                    ) : user ? (
                        <>
                            <div className="relative inline-block group">
                                {/* User Image */}
                                <img
                                    className="w-16 h-16 rounded-full object-cover border-2"
                                    src={user?.photoURL || 'default-avatar-url.jpg'}
                                    alt="user photo"
                                />

                                {/* Dropdown */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg w-40 p-4 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none transition-opacity duration-300 -mb-8">
                                    <p className="text-center text-gray-800 font-medium">{user?.displayName || 'User'}</p>
                                    <button
                                        onClick={logOut}
                                        className="w-full bg-[#023047] text-white text-sm py-2 rounded "
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login"><button className="btn mr-4">Login</button></NavLink>
                            <NavLink to="/register"><button className="btn">Register</button></NavLink>
                        </>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Navbar;