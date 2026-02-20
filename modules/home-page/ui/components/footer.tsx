import Link from "next/link"
import { links } from "../../data/social-media"

export const Footer = () => {
    return (
        <footer className="py-16 bg-black px-8">
            <div className="max-w-3xl xl:max-w-6xl w-full mx-auto space-y-8 text-center">
                <h3 className="font-black --dm-sans">Mofeleng M.</h3>
                <div className="flex flex-row justify-center">
                    { links.map((i) => 
                        (
                            <div className="flex flex-row gap-x-4 items-center">
                                { i.facebook && <Link href={ i.facebook.link }><i.facebook.logo className={i.facebook.className ?? ""}/></Link>}
                                { i.twitter && <Link href={ i.twitter.link }><i.twitter.logo className={i.twitter.className ?? ""}/></Link>}
                                { i.instagram && <Link href={ i.instagram.link }><i.instagram.logo className={i.instagram.className ?? ""}/></Link>}
                                { i.linkedIn && <Link href={ i.linkedIn.link }><i.linkedIn.logo className={i.linkedIn.className ?? ""}/></Link>}
                                { i.email && <Link href={ i.email.link }><i.email.logo className={i.email.className ?? ""}/></Link>}
                            </div>
                        )
                        
                    )}
                </div>
            </div>
        </footer>
    )
}