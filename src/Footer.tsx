
import {  Instagram, Mail, ArrowUp, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-16 relative">
            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className="absolute -top-5 right-8 bg-emerald-500 p-2 rounded-full shadow-lg hover:bg-emerald-600 transition-colors duration-300 group"
                aria-label="Scroll to top"
            >
                <ArrowUp className="text-white group-hover:animate-pulse" size={20} />
            </button>

            <div className="max-w-6xl mx-auto">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
                    {/* Brand section */}
                    <div className="flex flex-col md:items-start items-center">
                        <h3 className="text-xl font-bold mb-4">Antonio Cárdenas</h3>
                        <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
                            Creating digital experiences that blend creativity with functionality.
                        </p>
                    </div>


                    {/* Contact section */}
                    <div className="flex flex-col md:items-start items-center">
                        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                        <div className="flex items-center mb-2">
                            <Mail size={16} className="mr-2 text-gray-400" />
                            <a href="mailto:contacto@antoniocardenas.tech" className="!text-cyan-400 hover:text-white transition-colors duration-200">
                                contacto@antoniocardenas.tech
                            </a>
                        </div>

                        {/* Social icons */}

                    </div>

                    <div className="flex flex-col md:items-start items-center">
                        <div >
                            <h4 className="text-lg font-medium mb-3">Follow me</h4>
                            <div className="flex space-x-4">
                           
                                <a
                                    href="https://www.instagram.com/ccardenasg/" target='_blank'
                                    aria-label="Instagram"
                                    className="!text-purple-400  hover:animate-pulse duration-200"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://github.com/cgomezc" target='_blank'
                                    aria-label="Github"
                                    className="!text-white hover:animate-pulse duration-200"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ccardenasg/" target='_blank'
                                    aria-label="LinkedIn"
                                    className="!text-blue-400 hover:animate-pulse duration-200"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright section */}
                <div className="flex md:flex-row items-center justify-between pt-4">
                    <p className="text-sm text-gray-400 mx-auto">
                        &copy; {currentYear} Antonio Cárdenas. All rights reserved.
                    </p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;