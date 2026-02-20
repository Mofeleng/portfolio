interface WorkExperience {
    id: number,
    title: string;
    company: string;
    link?: string;
    description?: string;
    bulletPoints?: string[];
    startDate: string;
    endDate?:string;
    skills: string[];
}