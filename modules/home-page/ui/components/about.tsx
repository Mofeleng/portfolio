import Image from "next/image"
import { aboutMe } from "../../data/sections"
import { SectionHeader } from "./section-header"

export const About = () => {
    return (
        <section id="about" className="py-15 md:py-30 px-8">
            <div className="max-w-3xl xl:max-w-6xl w-full mx-auto space-y-8">
                <SectionHeader>About me</SectionHeader>
                <div className="grid grid-cols md:grid-cols-2 gap-5">
                    <div className="">
                        <p className="whitespace-pre-line text-sm">
                            { aboutMe }
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/assets/about-cover-photo.jpg"
                            width={720}
                            height={720}
                            alt="Cover photo"
                            className="w-60 h-60 object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}