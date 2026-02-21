import Link from "next/link"
import { email } from "../../data/social-media"

export const Contact = () => {
    return (
        <section id="contact" className="py-15 md:py-30 px-8">
            <div className="max-w-3xl xl:max-w-6xl w-full mx-auto space-y-8">
                 <h2 className="font-extrabold text-3xl text-[#A8A8A8] text-center"> Get in touch </h2>
                 <p className="max-w-xl text-center mx-auto"> I'm open to backend and full-stack roles, particularly in C# and TypeScript. If you're building something that needs someone who ships end-to-end and thinks beyond the UI, reach out.</p>
                 <div className="w-full flex justify-center">
                    <Link href={`mailto:${email}`}>
                        <button className="mt-5 border border-[#9D00FF] bg-transparent text-[#9D00FF] px-4 py-1 hover:cursor-pointer hover:text-[#d085ff] hover:border-[#d085ff] transition-all delay-150">
                            Send email
                        </button>
                    </Link>
                 </div>
            </div>
        </section>
    )
}