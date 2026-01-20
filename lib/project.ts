
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Mobile Apps Dicoding Event",
        description: "Create Kotlin Dicoding Event App using Retrofit as API caller for fundamental class submision collection",
        image: "/fundamental.png",
        tags: ["Kotlin", "Retrofit", "MVVM"],
        githubUrl: "https://github.com/atzulf/Event-App",
        featured: true
    },
    {
        id: 2,
        title: "Insect Animals Detection App",
        description: "Creating an Insect Detection Website using Streamlit as a web application assignment collection.",
        image: "/insectdetection.png",
        tags: ["Python", "Streamlit", "Machine Learning","Web App"],
        githubUrl: "https://github.com/atzulf/insectdetection",
        featured: true
    },  
    {
        id: 3,
        title: "Portfolio Website",
        description: "Creating a Portfolio Website using NextJS 13 with TailwindCSS for styling and Framer Motion for animation.",
        image: "/portfolio.png",
        tags: ["TypeScript", "NextJS", "Framer Motion", "TailwindCSS"],
        githubUrl: "https://github.com/atzulf/next-portfolio",
        featured: true
    },
    {
        id: 4,
        title: "Course Story App 2 Android",
        description: "Create an Android Intermediate 2 Course Story Application that has the addition of using the Google Maps API and infinity Scrolling using pagging 3.",
        image: "/intermediate2.png",
        tags: ["Kotlin", "Retrofit", "MVVM","Google Maps","Paging 3"],
        githubUrl: "https://github.com/atzulf/course_story_v2",
        featured: true
    },
    {
        id: 5,
        title: "Notes App MERN",
        description: "Creating a Notes App using the MERN stack (MongoDB, Express, React, Node.js) for managing personal notes.",
        image: "/mern.png",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        githubUrl: "https://github.com/atzulf/mern",
        featured: true
    },
    {
        id: 6,
        title: "PersonaWay Personality App",
        description: "Creating Personality test applications using DISC and the use of Inter ML CC configuration to form Kotlin applications.",
        image: "/personaway.png",
        tags: ["Kotlin", "Retrofit", "Machine Learning"],
        githubUrl: "https://github.com/PersonaWay/Mobile-Development",
        featured: false
    },
    {
        id: 7,
        title: "UNYCraft UI Design",
        description: "Create a UNYCraft UI Design Figma for Decision Making Systems course project.",
        image: "/spkweb.png",
        tags: ["Figma", "UI Design", "UX Design"],
        githubUrl: "https://www.figma.com/design/r4P03oag3gywNRj6UFGkzc/SPK-Website?node-id=0-1&t=I5Jk3jopAddVvwRG-1",
        featured: false 
    },
    {
        id: 8,
        title: "UNYCraft UI Website Design",
        description: "Create a UNYCraft UI Design Website Figma for software project management course",
        image: "/uiunycraft.png",
        tags: ["Figma", "UI Design", "UX Design"],
        githubUrl: "https://www.figma.com/design/6lUstHPeO1N70W8TDkUMQq/UNYCraft-Market?node-id=0-1&t=mSwLxfcHIynvmKo7-1",
        featured: false
    },
    {
        id: 9,
        title: "EcoFash App Design",
        description: "AI application with AR to support sustainable fashion by utilizing environmentally friendly product recycling with educational features, donations, IoT monitoring, and a marketplace.",
        image: "/ecofash.png",
        tags: ["Figma", "UI Design", "UX Design"],
        githubUrl: "https://www.figma.com/design/q0pmlbYM9L2wiyUx1q7kld/EcoFash?node-id=0-1&t=DrUKX6u1p88m15LF-1",
        featured: true
    },
    {
        id: 10,
        title: "OceanCue App Design",
        description: "Application with Internet of Things (IoT)-based smart marine navigation and exploration features that monitors oceanographic data such as sea water temperature, pH, and dissolved oxygen (DO) levels in real time",
        image: "/oceancue.png",
        tags: ["Figma", "UI Design", "UX Design"],
        githubUrl: "https://www.figma.com/design/JEzWmdeiUYddhxhdbVLGFg/OceanCue?node-id=0-1&t=axRTrNVK4kyht7S6-1",
        featured: false
    },
    {
        id: 11,
        title: "MindGarden App",
        description: "Creating a simple chat application using ReactJS and Firebase for real-time messaging features.",
        image: "/mindgarden.png",
        tags: ["Kotlin", "Firebase", "Machine Learning"],
        githubUrl: "https://github.com/MindGardenApp",
        featured: true
    },
    {
        id: 12,
        title: "Admin Dashboard Filament",
        description: "Creating a Admin Dashboard using Filament PHP Laravel for simple project management.",
        image: "/filament.png",
        tags: ["PHP", "Laravel", "Filament"],
        githubUrl: "https://github.com/atzulf/admin-dashboard",
        featured: false
    },
];
