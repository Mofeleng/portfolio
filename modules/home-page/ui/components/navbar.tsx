"use client"

import { useState } from "react"
import Link from "next/link"
import { links } from "../../data/navigation-links"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="h-24 flex items-center px-6">
            <div className="max-w-5xl xl:max-w-7xl w-full mx-auto flex justify-between items-center">
                
                <h2 className="font-black --dm-sans text-lg">
                    Mofeleng M.
                </h2>

                {/* Desktop Menu */}
                <ul className="hidden md:flex flex-row gap-x-5 items-center list-none">
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className="hover:cursor-pointer hover:underline transition-all"
                        >
                            <Link href={link.url}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/assets/Mofeleng_Mokgope_Software_Engineer_Resume.pdf" download>
                            <button className="border border-[#9D00FF] bg-transparent text-[#9D00FF] px-4 py-1 hover:text-[#d085ff] hover:border-[#d085ff] transition-all">
                                Resume
                            </button>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul className="absolute top-24 z-50 left-0 w-full bg-[#1A1A1A] flex flex-col items-center gap-y-4 py-6 shadow-md md:hidden">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.url}
                                onClick={() => setIsOpen(false)}
                                className="hover:underline"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/assets/Mofeleng_Mokgope_Software_Engineer_Resume.pdf"
                            download
                            onClick={() => setIsOpen(false)}
                        >
                            <button className="border border-[#9D00FF] bg-transparent text-[#9D00FF] px-4 py-1 hover:text-[#d085ff] hover:border-[#d085ff] transition-all">
                                Resume
                            </button>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}