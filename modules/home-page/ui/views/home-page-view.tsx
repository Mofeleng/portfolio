import { About } from "../components/about"
import { WorkExperience } from "../components/experience"
import { Hero } from "../components/hero"
import { Navbar } from "../components/navbar"
import { Projects } from "../components/projects"

export const HomePageView = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <WorkExperience />
            <Projects />
        </main>
    )
}