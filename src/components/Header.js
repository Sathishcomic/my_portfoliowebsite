import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between items-center px-5 py-3 bg-orange-600 fixed top-0 left-0 w-full z-50 shadow-lg">
            <a className="font-extrabold text-white text-2xl hover:text-black transition duration-300" href="#">
                SATHISH COMIC
            </a>
            <nav className="hidden md:block">
                <ul className="flex space-x-8 text-white">
                    <li><a className="font-semibold hover:text-black transition duration-300" href="/">Home</a></li>
                    <li><a className="font-semibold hover:text-black transition duration-300" href="/#about">About</a></li>
                    <li><a className="font-semibold hover:text-black transition duration-300" href="/#projects">Projects</a></li>
                    <li><a className="font-semibold hover:text-black transition duration-300" href="/#resume">Resume</a></li>
                    <li><a className="font-semibold hover:text-black transition duration-300" href="/#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && (
                <nav className="block md:hidden absolute top-full left-0 w-full bg-orange-600 shadow-lg">
                    <ul
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className="flex flex-col text-white text-center py-5 space-y-3"
                    >
                        <li><a className="font-semibold hover:text-black transition duration-300" href="#">Home</a></li>
                        <li><a className="font-semibold hover:text-black transition duration-300" href="#about">About</a></li>
                        <li><a className="font-semibold hover:text-black transition duration-300" href="#projects">Projects</a></li>
                        <li><a className="font-semibold hover:text-black transition duration-300" href="#resume">Resume</a></li>
                        <li><a className="font-semibold hover:text-black transition duration-300" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
            <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="block md:hidden"
            >
                <Bars3Icon className="text-white h-7 w-7" />
            </button>
        </header>
    );
}
