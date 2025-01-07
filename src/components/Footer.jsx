import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <footer className="footer text-white bg-[#023047] p-4 lg:p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Funding</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <a href="https://www.facebook.com/profile.php?id=100055737878584" className="link link-hover text-md lg:text-2xl"><FaFacebook /></a>
    <a href='https://workspace.google.com/products/docs' className="link link-hover text-md lg:text-2xl"><FaGoogle /></a>
    <a href="https://github.com/jui9797" className="link link-hover text-md lg:text-2xl"><FaGithub /></a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Menu</h6>
    <a href='/allCamp' className="link link-hover">All Campaign</a>
    <a href='/about' className="link link-hover">About Us</a>
    <a href='/myDonation' className="link link-hover">Donation</a>
  </nav>
  <div>
  <h2 className='font-bold text-2xl'>CrowedCube</h2>
  <p>© 2025 CrowdCube. Empowering ideas, one campaign at a time.</p>
  </div>
  {/* <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label>
      <div className="join border-none">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item " />
        <button className="btn bg-pink-500 join-item border-none text-white">Subscribe</button>
      </div>
    </fieldset>
  </form> */}
</footer>
        </div>
    );
};

export default Footer;