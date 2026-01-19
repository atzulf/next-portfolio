// Project data for Portfolio

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
        title: "Course Story App 1 Android",
        description: "Creating an Android Intermediate 1 Course Story Application that uses the Auth API and user upload features using the gallery and camera.",
        image: "/intermediate1.png",
        tags: ["Kotlin", "Retrofit", "MVVM","Camera"],
        githubUrl: "https://github.com/atzulf/course_story",
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
        title: "Crawling Data Twitter with Streamlit",
        description: "Creating a Twitter Data Crawling Website using Streamlit for Web Application project.",
        image: "/crawlingtwitter.png",
        tags: ["Python", "Streamlit", "Web Scraping","API"],
        githubUrl: "https://github.com/atzulf/Crawlingdatatwitter",
        featured: false
    },
    {
        id: 6,
        title: "PersonaWay Personality App",
        description: "Creating Personality test applications using DISC and the use of Inter ML CC configuration to form Kotlin applications.",
        image: "/personaway.png",
        tags: ["Kotlin", "Retrofit", "Machine Learning"],
        githubUrl: "https://github.com/PersonaWay/Mobile-Development",
        featured: true
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
        title: "Personal Portfolio Website",
        description: "Creating a Personal Portfolio Website using ReactJS and NextJS to showcase my projects and skills.",
        image: "/portfolio.png",
        tags: ["ReactJS", "NextJS", "TypeScript","TailwindCSS"],
        githubUrl: "https://github.com/atzulf/portfolio",
        featured: true
    },
    {
        id: 10,
        title: "Simple Chat Application",
        description: "Creating a simple chat application using ReactJS and Firebase for real-time messaging features.",
        image: "/simplechat.png",
        tags: ["ReactJS", "Firebase", "Real-time"],
        githubUrl: "https://github.com/atzulf/simplechat",
        featured: true
    },
    {
        id: 11,
        title: "Simple Chat Application",
        description: "Creating a simple chat application using ReactJS and Firebase for real-time messaging features.",
        image: "/simplechat.png",
        tags: ["ReactJS", "Firebase", "Real-time"],
        githubUrl: "https://github.com/atzulf/simplechat",
        featured: true
    },
    {
        id: 12,
        title: "Simple Chat Application",
        description: "Creating a simple chat application using ReactJS and Firebase for real-time messaging features.",
        image: "/simplechat.png",
        tags: ["ReactJS", "Firebase", "Real-time"],
        githubUrl: "https://github.com/atzulf/simplechat",
        featured: true
    },
];
