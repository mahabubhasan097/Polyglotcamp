import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/polyglot.png'
import { BsFacebook, BsFillEnvelopeAtFill, BsFillGeoAltFill, BsLinkedin, BsTelephoneFill, BsTwitter, BsWhatsapp } from "react-icons/bs";
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content text-base place-items-center md:place-items-start">
                <div className='center-sm'>
                    <Link to='/'><img src={logo} className='w-3/5 inl-block center-sm' alt="" /></Link>
                    <p className='font-nunito my-4 md:my-8 font-13'>Thank you for visiting our website, the premier destination for Foreign Language Learning School. <br /> At our summer camp, we are dedicated to providing a transformative language learning experience for students of all ages. </p>
                    <div className='mx-auto md:m-0'>
                        <div className='flex text-2xl md:text-4xl text-[#e81e63]'>
                            <BsFacebook className='cursor-pointer hover:text-white mr-8'></BsFacebook>
                            <BsTwitter className='cursor-pointer hover:text-white mr-8'></BsTwitter>
                            <BsWhatsapp className='cursor-pointer hover:text-white mr-8'></BsWhatsapp>
                            <BsLinkedin className='cursor-pointer hover:text-white '></BsLinkedin>
                        </div>
                    </div>
                </div>
                <div className='smFlex'>
                    <h2 className="text-[#e81e63] font-bold md:text-2xl">SERVICES</h2>
                    <a className="font-13">Language Training</a>
                    <a className="font-13">Educational Tour</a>
                    <a className="font-13">Cultural Function</a>
                    <a className="font-13">Language Research</a>
                </div>
                <div className='smFlex'>
                    <h2 className="text-[#e81e63] font-bold md:text-2xl">SUPPORT</h2>
                    <a className="font-13">Meet Our Team</a>
                    <a className="font-13">Contact Foram</a>
                    <a className="font-13">Report Abuse</a>
                    <a className="font-13">Event News</a>
                </div>
                <div className='smFlex'>
                    <h2 className="text-[#e81e63] font-bold md:text-2xl mb-4">LOCATION</h2>
                    <span className='flex mb-4 font-13'><BsFillGeoAltFill className='text-[#e81e63] text-2xl mr-2 md:mr-3'></BsFillGeoAltFill><span> 5 Main Street, Australia</span></span>
                    <h2 className="text-[#e81e63] font-bold md:text-2xl mb-4">CONTACT</h2>
                    <span className='flex mb-3 font-13'><BsFillEnvelopeAtFill className='text-[#e81e63] text-2xl mr-2 md:mr-3'></BsFillEnvelopeAtFill><span> polyglotcamp@gmail.com</span></span>
                    <span className='flex font-13'><BsTelephoneFill className='text-[#e81e63] text-2xl mr-2 md:mr-3'></BsTelephoneFill><span> +61784883748</span></span>
                </div>
            </footer>
            <div className="text-center bg-slate-600 py-3 text-white">
                <p className="mb-0 font-12">&copy; {new Date().getFullYear()} <span className='color-one'>POLYGLOTCAMP</span>. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;