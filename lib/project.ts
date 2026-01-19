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
        title: "Crawling X Data with Streamlit",
        description: "Creating a X Data Crawling Website using Streamlit for Web Application project.",
        image: "/projects/ecommerce.jpg",
        tags: ["Python", "Streamlit", "Data Analytic"],
        githubUrl: "#",
        featured: false
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and drag-and-drop functionality.",
        image: "/projects/taskapp.jpg",
        tags: ["React", "Node.js", "MongoDB"],
        githubUrl: "#",
        featured: false
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Modern portfolio website with smooth animations, dark mode support, and responsive design.",
        image: "/projects/portfolio.jpg",
        tags: ["Next.js", "Tailwind", "Framer"],
        githubUrl: "#",
        featured: true
    },
    {
        id: 4,
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media metrics with interactive charts and data visualization.",
        image: "/projects/dashboard.jpg",
        tags: ["React", "Chart.js", "API"],
        githubUrl: "#",
        featured: false
    },
    {
        id: 5,
        title: "Weather App",
        description: "Real-time weather application with location-based forecasts and interactive maps.",
        image: "/projects/weather.jpg",
        tags: ["React", "Weather API", "CSS"],
        githubUrl: "#",
        featured: false
    },
    {
        id: 6,
        title: "Blog CMS",
        description: "Content management system for blogging with markdown support and SEO optimization.",
        image: "/projects/blog.jpg",
        tags: ["Laravel", "Vue.js", "MySQL"],
        githubUrl: "#",
        featured: true
    }
];
