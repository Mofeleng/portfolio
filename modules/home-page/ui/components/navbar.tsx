import Link from "next/link"
import { links } from "../../data/navigation-links"

export const Navbar = () => {
    return (
        <nav className="h-24 flex flex-col justify-center items-center px-8">
            <div className="max-w-5xl xl:max-w-7xl w-full mx-auto flex justify-between items-center gap-x-3">
                <h2 className="font-black --dm-sans">Mofeleng M.</h2>
                <ul className="flex flex-row gap-x-3 items-center list-none">
                    { links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.url}>
                                { link.name }
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/resume.pdf"
                            download
                        >
                            <button
                                className="border border-[#9D00FF] bg-transparent text-[#9D00FF] px-4 py-1 hover:cursor-pointer"
                            >
                                Resume
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}