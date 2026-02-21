import Link from "next/link"

export const Hero = () => {
    return (
        <section id="hero" className="py-15 md:py-30 px-8">
            <div className="max-w-3xl xl:max-w-6xl w-full mx-auto">
                <label htmlFor="name" className="text-[#9D00FF]">Hi, my name is</label>
                <h1 className="text-3xl sm:text-5xl font-black">Mofeleng Shadow Mokgope</h1>
                <sub className="text-[#A8A8A8] text-xl font-semibold">A backend focused developer building real world solutions.</sub>
                <p className="mt-3 max-w-xl">
                    I build full-stack applications with a deliberate move into .NET and C#. Currently shipping with TypeScript and Next.js, learning to do more of it server-side.
                </p>
                <Link href="#projects">
                    <button className="mt-5 border border-[#9D00FF] bg-transparent text-[#9D00FF] px-4 py-1 hover:cursor-pointer hover:text-[#d085ff] hover:border-[#d085ff] transition-all delay-150">
                        See my work
                    </button>
                </Link>
            </div>
        </section>
    )
}