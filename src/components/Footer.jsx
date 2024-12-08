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
    <a className="link link-hover text-md lg:text-2xl"><FaFacebook /></a>
    <a className="link link-hover text-md lg:text-2xl"><FaGoogle /></a>
    <a className="link link-hover text-md lg:text-2xl"><FaGithub /></a>
    <a className="link link-hover text-md lg:text-2xl"><FaTwitter /></a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Refund policy</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
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
  </form>
</footer>
        </div>
    );
};

export default Footer;