export interface ProjectFAQ {
    question: string;
    answer: string;
}

export interface ProjectDetail {
    problem: string;
    solution: string;
    features: string[];
    faq: ProjectFAQ[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    images?: string[];
    tags: string[];
    githubUrl: string;
    featured: boolean;
    details?: ProjectDetail;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "EarlyTension App",
        description: "Create Website Hypertension Risk Detection for daily health analysis and monitoring using Retrieval Augmented Generation (RAG), Gemini AI Model LLM, Huggingface for Model Embeddings, Langchain, FastAPI for backend and NextJS and Typescript for frontend",
        image: "/rag.png",
        images: ["/rag.png", "/rag2.png"],
        tags: ["Nextjs", "FastAPI", "Typescript", "LLM", "RAG", "AI"],
        githubUrl: "https://www.earlytension.my.id",
        featured: true,
        details: {
            problem: "Hypertension is a non-communicable disease with high prevalence whose management is often delayed because health screening systems remain reactive, waiting for symptoms to appear, convensional chatbot can halucination and not accurate for health analysis",
            solution: "Create an EarlyTension as Hypertension Risk Detection Website for daily health analysis and monitoring using Retrieval Augmented Generation (RAG) to help people to detect their hypertension risk and get the best treatment ",
            features: ["Identify Hypertension Risk", "Get The Best Treatment", "Daily Health Analysis and Monitoring", "chatbot AI Monitoring","History Chatbot and Analysis","AI Analysis and Treatment Recommendations"],
            faq: [
                { question: "Why EarlyTension?", answer: "Because EarlyTension can help people to detect their hypertension risk and get the best treatment " },
                { question: "What is the best treatment for hypertension?", answer: "The best treatment for hypertension is to consult with a doctor and get the best treatment" },
                { question: "How to use EarlyTension?", answer: "You can use EarlyTension by visiting the website and following the instructions" },
                { question: "Can EarlyTension diagnose hypertension?", answer: "EarlyTension can help you to detect your hypertension risk but it cannot diagnose hypertension. You should consult with a doctor for diagnosis" },
                { question: "What is RAG?", answer: "Retrieval Augmented Generation (RAG) is a technique that combines the power of large language models (LLMs) with a retrieval system to provide more accurate and relevant responses." },
                { question: "What is the best treatment for hypertension?", answer: "The best treatment for hypertension is to consult with a doctor and get the best treatment" }
            ]
        }
    },
    {
        id: 2,
        title: "Retro Arcade Daily Tracker",
        description: "Creating a Retro Arcade Daily Tracker Website Retro 8-bit arcade habit tracker built with SvelteKit & TypeScript. Features: daily habits, streak combos, XP & leveling system, Pomodoro timer, quest calendar, and achievement system. Life is an RPG.",
        image: "/retro.png",
        tags: ["StelveKit", "TailwindCSS", "Typescript"],
        githubUrl: "https://retro-arcade-daily-tracker.vercel.app/",
        featured: true,
        details: {
            problem: "Users wanted to track their daily habits and stay motivated, but there was no platform that provided a fast, easy-to-use interface with complete features.",
            solution: "Built a SvelteKit application using React and TailwindCSS for styling and Framer Motion for animation. It features a clean, intuitive interface that allows users to easily track their daily habits and stay motivated.",
            features: ["Daily Habits", "Streak Combos", "XP & Leveling System", "Pomodoro Timer", "Quest Calendar", "Achievement System"],
            faq: [
                { question: "Why SvelteKit?", answer: "SvelteKit provides excellent performance through hybrid static & server rendering, and incredible developer experience." },
                { question: "How are the animations handled?", answer: "All animations, including scroll reveals and hover effects, are powered by Framer Motion." }
            ]
        }
    },
    {
        id: 3,
        title: "ATS Tracking Website",
        description: "Build an ATS Tracking Website using Angular CLI Framework and Python FastAPI for backend API.",
        image: "/ats.png",
        tags: ["AngularJS", "FastAPI", "API", "Fullstack App"],
        githubUrl: "https://ats-dashboard-zoulv.vercel.app", 
        featured: true,
        details: {
            problem: "ATS Tracking is a system for tracking job applications. Users can create an account and track their applications. They can also view their application history and progress.",
            solution: "Built a fullstack app ATS Tracking Website by using Angular JS for frontend and Python FastAPI for backend API.",
            features: ["Users can create an account","Users can view their application status","Users can view their application history and progress","Admin can track job applications"],
            faq: [
                { question: "Why Angular JS?", answer: "Angular JS provides excellent performance and incredible developer experience." },
                { question: "How are the animations handled?", answer: "All animations, including scroll reveals and hover effects, are powered by Framer Motion." }
            ]
        }
    },
    {
        id: 4,
        title: "Baca Al-Qur'an App",
        description: "Create Al-Qur'an App using NextJS and TailwindCSS for styling use API Qur'an Indonesia.",
        image: "/quran.png",
        tags: ["NextJS", "TailwindCSS", "API"],
        githubUrl: "https://bacaqur-an.vercel.app",
        featured: true,
        details: {
            problem: "Users wanted to read the Al-Qur'an online, but there was no platform that provided a fast, easy-to-use interface with complete features.",
            solution: "Built a Next.js application using React and TailwindCSS for styling and Framer Motion for animation. It features a clean, intuitive interface that allows users to easily navigate through the Al-Qur'an and enjoy a seamless reading experience.",
            features: ["Clean & Minimalist Design", "Smooth Animations", "Responsive Layouts"],
            faq: [
                { question: "Why NextJS?", answer: "NextJS provides excellent performance and incredible developer experience." },
                { question: "How are the animations handled?", answer: "All animations, including scroll reveals and hover effects, are powered by Framer Motion." }
            ]
        }
    },
    {
        id: 5,
        title: "KuyFood App Delivering Design",
        description: "Creating a UI/UX Design for an application that can fulfill the needs of Users for ordering food online.",
        image: "/kuy.png",
        tags: ["Figma", "UI/UX Design"],
        githubUrl: "https://www.figma.com/proto/Z6iAysWgWq7RNfj2yWADiL/Kuy-Food?node-id=58-4131&p=f&viewport=-1080%2C-155%2C0.29&t=4RJDJh8ePGWbfJE7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=58%3A4131&page-id=0%3A1",
        featured: false,
        details: {
            problem: "Many people want to order food online, but there is no platform that provides a fast, easy-to-use interface with complete features.",
            solution: "Creating a UI/UX Design for an application that can fulfill the needs of Users for ordering food online.",
            features: ["Clean & Minimalist Design", "Smooth Animations", "High Fidelity"],
            faq: [
                { question: "Why use Figma?", answer: "Figma provides a fast, easy-to-use interface with complete features." },
                { question: "How are the animations handled?", answer: "All animations, including scroll reveals and hover effects, are powered by Framer Motion." }
            ]
        }
    },
    {
        id: 6,
        title: "Muslimah Hijab Marketplace App Design",
        description: "This project is a UI/UX Design for an application that can fulfill the needs of Users for ordering muslimah hijab online.",
        image: "/red.png",
        tags: ["Figma", "UI/UX Design"],
        githubUrl: "https://www.figma.com/proto/5bCPUshLKbUti2cKDJ0QeG/Nourae-Veil?node-id=11-297&p=f&viewport=40%2C192%2C0.21&t=zzVdq3OSZ6FsN9P5-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A250&page-id=0%3A1",
        featured: false,
        details: {
            problem: "Muslimah hijab marketlace have a problem with their ui/ux design and need to redesign and fixing it.",
            solution: "Redesign and Fixing UI/UX Design for muslimah hijab marketlace.",
            features: ["Complete Design","Fixing the bugs","Improve User Experience","High Fidelity"],
            faq: [
                { question: "Why use Figma?", answer: "Figma provides a fast, easy-to-use interface with complete features." },
                { question: "How are the animations handled?", answer: "All animations, including scroll reveals and hover effects, are powered by Framer Motion." }
            ]
        }
    },
    {
        id: 7,
        title: "Mobile Apps Dicoding Event",
        description: "Create Kotlin Dicoding Event App using Retrofit as API caller for fundamental class submision collection",
        image: "/fundamental.png",
        tags: ["Kotlin", "Retrofit", "MVVM"],
        githubUrl: "https://github.com/atzulf/Event-App",
        featured: false,
        details: {
            problem: "Participants often missed event updates because information was scattered across different platforms.",
            solution: "Built a centralized Android app that fetches and displays event schedules reliably from a unified API.",
            features: ["Clean MVVM Architecture", "Asynchronous API calls via Retrofit", "Responsive UI"],
            faq: [
                { question: "Why use Retrofit?", answer: "Retrofit provides a type-safe HTTP client that seamlessly integrates with Kotlin Coroutines for clean networking code." }
            ]
        }
    },
    {
        id: 8,
        title: "Insect Animals Detection App",
        description: "Creating an Insect Detection Website using Streamlit as a web application assignment collection.",
        image: "/insectdetection.png",
        tags: ["Python", "Streamlit", "Machine Learning","Web App"],
        githubUrl: "https://github.com/atzulf/insectdetection",
        featured: false,
        details: {
            problem: "Farmers and biology students struggle to rapidly identify local insect species in the field.",
            solution: "Developed an AI-powered web app using Streamlit to classify insects from uploaded images instantly.",
            features: ["Image Upload & Processing", "Machine Learning Model Integration", "Interactive Data Visualization"],
            faq: [
                { question: "What framework is used for the web interface?", answer: "Streamlit was used to rapidly prototype and deploy the data-centric machine learning web application in Python." }
            ]
        }
    },  
    {
        id: 9,
        title: "Portfolio Website",
        description: "Creating a Portfolio Website using NextJS 13 with TailwindCSS for styling and Framer Motion for animation.",
        image: "/portfolio.png",
        tags: ["TypeScript", "NextJS", "Framer Motion", "TailwindCSS"],
        githubUrl: "https://github.com/atzulf/next-portfolio",
        featured: true,
        details: {
            problem: "Needed a performant and highly interactive platform to showcase development and design projects.",
            solution: "Designed and developed a Next.js application leveraging Server Components and Framer Motion for a smooth UX.",
            features: ["Dark/Light Mode", "Framer Motion Micro-interactions", "Responsive Grid Layouts"],
            faq: [
                { question: "Why Next.js?", answer: "Next.js provides excellent performance through hybrid static & server rendering, and incredible developer experience." },
                { question: "How are the animations handled?", answer: "All animations, including scroll reveals and hover effects, are powered by Framer Motion." }
            ]
        }
    },
    {
        id: 10,
        title: "Course Story App 2 Android",
        description: "Create an Android Intermediate 2 Course Story Application that has the addition of using the Google Maps API and infinity Scrolling using pagging 3.",
        image: "/intermediate2.png",
        tags: ["Kotlin", "Retrofit", "MVVM","Google Maps","Paging 3"],
        githubUrl: "https://github.com/atzulf/course_story_v2",
        featured: true,
        details: {
            problem: "Users needed a way to share location-based stories seamlessly, but handling infinite scroll and maps simultaneously was challenging.",
            solution: "Implemented Paging 3 for smooth, resource-efficient infinite scrolling and integrated Google Maps API for interactive location tagging.",
            features: ["Google Maps Integration", "Infinite Scrolling (Paging 3)", "Clean Architecture (MVVM)"],
            faq: [
                { question: "Why Paging 3?", answer: "It efficiently loads and displays small chunks of data at a time, significantly reducing network and system resource usage." }
            ]
        }
    },
    {
        id: 11,
        title: "Notes App MERN",
        description: "Creating a Notes App using the MERN stack (MongoDB, Express, React, Node.js) for managing personal notes.",
        image: "/mern.png",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        githubUrl: "https://github.com/atzulf/mern",
        featured: true,
        details: {
            problem: "Students and professionals needed a simple, fast, and reliable way to capture, organize, and access their notes across different devices.",
            solution: "Built a full-stack MERN application that allows users to create, edit, search, and delete notes with real-time synchronization and secure authentication.",
            features: ["User Authentication (JWT)", "CRUD Operations", "Search & Filtering", "Responsive Design"],
            faq: [
                { question: "What inspired the design?", answer: "The clean, minimalist design was inspired by the simplicity and efficiency of Google Keep." },
                { question: "Is the data persistent?", answer: "Yes, all notes are stored in a MongoDB database and are tied to the user's account." }
            ]
        }
    },
    {
        id: 12,
        title: "PersonaWay Personality App",
        description: "Creating Personality test applications using DISC and the use of Inter ML CC configuration to form Kotlin applications.",
        image: "/personaway.png",
        tags: ["Kotlin", "Retrofit", "Machine Learning"],
        githubUrl: "https://github.com/PersonaWay/Mobile-Development",
        featured: false,
        details: {
            problem: "Existing personality tests lack personalized, real-time insights and often feel outdated and static.",
            solution: "Created an interactive Android app using a custom Machine Learning model to evaluate DISC personality traits accurately.",
            features: ["Machine Learning Integration", "DISC Personality Assessment", "Real-time Result Processing"],
            faq: [
                { question: "How is ML used here?", answer: "We integrated a TensorFlow Lite model directly into the Kotlin application to process user inputs and classify personality types on-device." }
            ]
        }
    },
    {
        id: 13,
        title: "UNYCraft UI Design",
        description: "Create a UNYCraft UI Design Figma for Decision Making Systems course project.",
        image: "/spkweb.png",
        tags: ["Figma", "UI Design", "UX Design"],
        githubUrl: "https://www.figma.com/design/r4P03oag3gywNRj6UFGkzc/SPK-Website?node-id=0-1&t=I5Jk3jopAddVvwRG-1",
        featured: false,
        details: {
            problem: "Local crafters at UNY lacked a dedicated, user-friendly digital marketplace to showcase and sell their custom creations, relying heavily on inefficient manual messaging.",
            solution: "Designed 'UNYCraft', a sleek and intuitive marketplace interface that bridges the gap between buyers and artisans with streamlined ordering and browsing.",
            features: ["Artisan Profile Showcases", "Custom Order Negotiation Flow", "Clean, Earthy UI Palette"],
            faq: [
                {
                    question: "What was the core design philosophy?",
                    answer: "The design focuses on a warm, earthy aesthetic using terracotta and soft greens to evoke a sense of handmade craftsmanship, while maintaining modern usability standards."
                },
                {
                    question: "How was the UX research conducted?",
                    answer: "We interviewed students and local crafters to understand their pain points. The biggest finding was the friction in negotiating custom orders, which led to a dedicated 'Custom Request' feature."
                },
                {
                    question: "What Figma features were utilized heavily?",
                    answer: "Auto Layout for responsive card grids, Interactive Components for button states and dropdowns, and Variables for consistent theming."
                }
            ]
        }
    },
    {
        id: 14,
        title: "UNYCraft UI Website Design",
        description: "Create a UNYCraft UI Design Website Figma for software project management course",
        image: "/uiunycraft.png",
        tags: ["Figma", "UI Design", "UX Design"],
        githubUrl: "https://www.figma.com/design/6lUstHPeO1N70W8TDkUMQq/UNYCraft-Market?node-id=0-1&t=mSwLxfcHIynvmKo7-1",
        featured: false,
        details: {
            problem: "The previous UNYCraft mobile design needed to be adapted into a comprehensive, responsive web platform to accommodate desktop users and complex admin dashboards.",
            solution: "Expanded the design system to a full desktop web experience, emphasizing larger product imagery and advanced filtering capabilities.",
            features: ["Responsive Grid System", "Advanced Search & Filtering", "Admin Dashboard Design"],
            faq: [
                {
                    question: "How does the web design differ from the mobile app?",
                    answer: "The web version utilizes the expanded screen real estate to introduce mega-menus, sidebar filters, and a more expansive dashboard for artisans to manage their inventory."
                },
                {
                    question: "What challenges were faced during the design?",
                    answer: "Ensuring visual consistency across drastically different screen sizes required a highly robust token system and strict adherence to a 12-column grid."
                }
            ]
        }
    },
    {
        id: 15,
        title: "EcoFash App Design",
        description: "AI application with AR to support sustainable fashion by utilizing environmentally friendly product recycling with educational features, donations, IoT monitoring, and a marketplace.",
        image: "/ecofash.png",
        tags: ["Figma", "UI Design", "UX Design"],
        githubUrl: "https://www.figma.com/design/q0pmlbYM9L2wiyUx1q7kld/EcoFash?node-id=0-1&t=DrUKX6u1p88m15LF-1",
        featured: true,
        details: {
            problem: "The fast fashion industry contributes significantly to environmental waste, and consumers lack accessible tools to make sustainable clothing choices or recycle old garments.",
            solution: "Designed EcoFash, a multifaceted app that integrates AR virtual try-ons, a marketplace for upcycled clothes, and an educational hub for sustainable practices.",
            features: ["AR Virtual Try-on Interface", "Gamified Recycling Tracker", "Sustainable Marketplace"],
            faq: [
                {
                    question: "What is the role of AR in this design?",
                    answer: "The AR feature allows users to visualize how upcycled clothing will look on them before purchasing, reducing return rates and increasing confidence in sustainable fashion."
                },
                {
                    question: "How did you design for gamification?",
                    answer: "We incorporated a 'Green Points' system where users earn badges and discounts for recycling clothes or reading educational articles. This required designing visually appealing progress trackers and reward modals."
                },
                {
                    question: "What inspired the color palette?",
                    answer: "We chose vibrant yet organic shades of green and teal, paired with clean white whitespace, to communicate eco-friendliness without feeling outdated."
                }
            ]
        }
    },
    {
        id: 16,
        title: "OceanCue App Design",
        description: "Application with Internet of Things (IoT)-based smart marine navigation and exploration features that monitors oceanographic data such as sea water temperature, pH, and dissolved oxygen (DO) levels in real time",
        image: "/oceancue.png",
        tags: ["Figma", "UI Design", "UX Design"],
        githubUrl: "https://www.figma.com/design/JEzWmdeiUYddhxhdbVLGFg/OceanCue?node-id=0-1&t=axRTrNVK4kyht7S6-1",
        featured: false,
        details: {
            problem: "Marine researchers and sailors need a reliable, user-friendly mobile interface to monitor complex real-time IoT oceanographic data.",
            solution: "Created OceanCue, featuring highly legible data dashboards, real-time alerts, and interactive map visualizations for marine navigation.",
            features: ["Real-time IoT Data Dashboard", "Interactive Marine Map", "Critical Alert System"],
            faq: [
                {
                    question: "How did you approach data visualization on a small screen?",
                    answer: "We prioritized clarity over decoration. Used clean line charts with distinct contrasting colors for different metrics (pH, temp, DO) and large typography for current values."
                },
                {
                    question: "Why focus heavily on the map interface?",
                    answer: "Navigation is critical at sea. The map acts as the central hub where data points are overlaid geographically, allowing users to see exactly where anomalies are occurring."
                }
            ]
        }
    },
    {
        id: 17,
        title: "MindGarden App",
        description: "Creating a simple chat application using ReactJS and Firebase for real-time messaging features.",
        image: "/mindgarden.png",
        tags: ["Kotlin", "Firebase", "Machine Learning"],
        githubUrl: "https://github.com/atzulf/MindGardenApp",
        featured: true,
        details: {
            problem: "Users wanted a real-time, engaging chat platform focused on mental wellness and community support.",
            solution: "Built a responsive messaging application powered by Firebase Realtime Database with an intuitive interface.",
            features: ["Real-time Messaging", "Firebase Authentication", "Cloud Firestore Storage"],
            faq: [
                { question: "Why Firebase?", answer: "Firebase provides an incredibly fast and scalable real-time database, which is crucial for a smooth chat experience." }
            ]
        }
    },
    {
        id: 18,
        title: "Admin Dashboard Filament",
        description: "Creating a Admin Dashboard using Filament PHP Laravel for simple project management.",
        image: "/filament.png",
        tags: ["PHP", "Laravel", "Filament"],
        githubUrl: "https://github.com/atzulf/admin-dashboard",
        featured: false,
        details: {
            problem: "Managing project data manually was time-consuming and error-prone without a proper graphical interface.",
            solution: "Developed a robust and secure admin dashboard using Laravel and Filament PHP for streamlined project management.",
            features: ["CRUD Operations", "Role-based Access Control", "Beautiful Filament UI"],
            faq: [
                { question: "Why Filament?", answer: "Filament accelerates the development of Laravel admin panels by providing a rich set of pre-built, elegant UI components." }
            ]
        }
    }
];

// ==========================================
// 🚀 TEMPLATE FOR ADDING A NEW PROJECT 🚀
// Copy the block below and paste it inside the `projects` array above.
// ==========================================
/*
    {
        id: 99, // Change to the next sequential ID
        title: "Project Title",
        description: "A short and engaging summary of what the project is about.",
        image: "/placeholder.png", // Image path in the public folder
        tags: ["React", "TailwindCSS", "NextJS"],
        githubUrl: "https://github.com/atzulf/...",
        featured: false, // Set to true to show 'Featured' badge
        details: {
            problem: "What specific problem were the users facing that led to this project?",
            solution: "How did your design/development solve this problem effectively?",
            features: [
                "Key feature or highlight 1",
                "Key feature or highlight 2",
                "Key feature or highlight 3"
            ],
            faq: [
                {
                    question: "What was the biggest technical/design challenge?",
                    answer: "Explain the challenge and how you overcame it here."
                },
                {
                    question: "Why did you choose this tech stack or design style?",
                    answer: "Provide the reasoning behind your decisions."
                }
            ]
        }
    },
*/
