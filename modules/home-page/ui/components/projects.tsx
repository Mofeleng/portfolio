import { FolderIcon, LinkIcon } from "lucide-react"
import { projects } from "../../data/projects"
import { SectionHeader } from "./section-header"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export const Projects = () => {
    return (
        <section id="projects" className="py-30">
            <div className="max-w-3xl w-full mx-auto space-y-10">
                <SectionHeader>Projects</SectionHeader>
                <div className="grid sm:grid-cols-2 md:grid-cols-3">
                    {
                        projects.map((i) => (
                            <div key={i.id} className="bg-black px-3 py-2 space-y-3">
                                <div className="flex flex-row justify-between items-center">
                                    <FolderIcon />
                                    <div className="flex gap-x-2">
                                        { i.link && (
                                            <Link href={i.link}>
                                                <LinkIcon className="size-4"/>
                                            </Link>
                                        )}
                                        { i.github && (
                                            <Link href={i.github}>
                                                <FaGithub className="size-4"/>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm">
                                        { i.description }
                                    </p>

                                    <div className="flex flex-row text-xs items-center text-[#A8A8A8] flex-wrap">
                                        { i.skills.map((s, idx) => {
                                            const isLastSkill = idx === (i.skills.length - 1);
                                            return (
                                                <span key={s}>
                                                    &nbsp;{ s }
                                                    { !isLastSkill && <span className="text-sm font-black">{` `} &middot;</span>}
                                                </span>
                                            )
                                        
                                        })}
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}