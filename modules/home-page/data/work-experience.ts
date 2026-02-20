
export const workExperience:WorkExperience[] = [
    {
        id: 1,
        title: "Full-stack Software Engineer",
        company: "Quicklycv",
        link: "https://quicklycv.com/",
        description: `
            A full-stack product built to take the friction out of job applications. The main site lets users build and manage ATS-compliant resumes through a rich resume editor with profile management so your details travel with you across applications. AI generation is handled via the Gemini SDK. 

            The companion Chrome extension, published on the Chrome Web Store, lets users copy and paste job descriptions directly from whatever page they're on, no tab switching, no losing focus.

            What it involved: A multi-surface product: full Next.js web app with a React-based resume editor using Zustand for state management, AI pipeline via Gemini SDK, user profile management, and a published browser extension that integrates with the main platform. Closed source, but the Chrome extension is live and publicly verifiable on the Web Store.
        `,
        startDate: "April 2025",
        endDate: "Present",
        skills: ["Typescript", "Next.js", "React", "Figma", "UI/UX design" ,"AI SDK", "Gemini SDK", "Authentication","Zustand", "Chrome Extensions API", "CI/CD"]
    },
    {
        id: 2,
        title: "Freelance Website Developer",
        company: "The Visionists",
        link: "https://visionists.co.za/",
        description: `
            Designed, built, and deployed a production website for a consulting firm. Handled the full delivery: Next.js development, Vercel deployment via GitHub CI/CD, custom domain configuration, and business email setup through GoDaddy.
        `,
        startDate: "September 2025",
        skills: ["Next.js", "Figma", "UI/UX design", "DNS Management", "Email management", "CI/CD"]
    }
]