import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { workExperience } from "../../data/work-experience";
import { SectionHeader } from "./section-header";
import Link from "next/link";

export const WorkExperience = () => {
    const defaultId = 1;
    return (
        <section id="experience" className="py-30">
            <div className="max-w-3xl w-full mx-auto space-y-8">
                <SectionHeader>Experience</SectionHeader>

                <Tabs defaultValue={defaultId.toString()} orientation="vertical" className="flex flex-row gap-6">
                    <TabsList className="bg-[#151515] space-y-2 flex flex-col w-[30%] shrink-0 h-auto">
                        {workExperience.map((i) => (
                            <TabsTrigger
                                key={i.id}
                                value={i.id.toString()}
                                className="
                                    py-4 w-full
                                    whitespace-normal
                                    text-white text-wrap wrap-break-words
                                    text-left justify-start
                                    data-[state=active]:bg-[#9D00FF]/20
                                    data-[state=active]:text-white
                                    hover:text-white
                                    hover:bg-[#9D00FF]/30
                                    hover:cursor-pointer
                                    transition delay-200
                                "
                            >
                                {i.title} @{i.company}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <div className="w-[70%] min-w-0">
                        {workExperience.map((i) => (
                            <TabsContent key={i.id} value={i.id.toString()} className="mt-0">
                                <div className="w-full">
                                    <h3 className="text-xl text-[#A8A8A8] font-bold wrap-break-words">
                                        {i.title}{" "}
                                        {i.link && (
                                            <Link href={i.link} className="text-[#9D00FF]">
                                                @{i.company}
                                            </Link>
                                        )}
                                    </h3>
                                    <sub className="font-bold">{ i.startDate } { i.endDate && ` - ${i.endDate}`}</sub>
                                    <p className="whitespace-pre-line">
                                        { i.description }
                                    </p>
                                </div>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}