import { aboutMe } from "../../data/sections"
import { SectionHeader } from "./section-header"

export const About = () => {
    return (
        <section id="about" className="py-30 px-8">
            <div className="max-w-3xl xl:max-w-6xl w-full mx-auto space-y-3">
                <SectionHeader>About me</SectionHeader>
                <div className="flex flex-row gap-x-10 flex-wrap">
                    <div className="">
                        <p className="whitespace-pre-line">
                            { aboutMe }
                        </p>
                    </div>
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}