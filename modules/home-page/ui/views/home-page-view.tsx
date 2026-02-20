import { About } from "../components/about"
import { Contact } from "../components/contact"
import { WorkExperience } from "../components/experience"
import { Footer } from "../components/footer"
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
            <Contact />
            <Footer />
        </main>
    )
}