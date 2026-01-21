export interface Experience {
    id: number;
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    location: string;
    type: string; // Full-time, Part-time, Internship, Freelance
    description: string[];
    skills: string[];
    current?: boolean;
}

export const experiences: Experience[] = [
    {
        id: 1,
        role: "Software Developer Intern",
        company: "EQUAL System (PT. Kreasi Sinergi Perkasa)",
        companyUrl: "https://equalsystem.io", 
        period: "Nov 2025 - Present",
        location: "Yogyakarta, Indonesia",
        type: "Internship",
        description: [
            "Contributing to the development and maintenance of company software systems using industry standards.",
            "Working collaboratively within the development team to implement new features and system functionalities.",
            "Performing debugging, testing, and code optimization to ensure stable application performance.",
            "Applying clean code practices and version control using Git in daily workflows."
        ],
        skills: ["PHP", "Laravel", "JavaScript", "MySQL", "Git", "Teamwork"],
        current: true
    },
    {
        id: 2,
        role: "Information Media Division Staff",
        company: "Keluarga Muslim Al-Musthofa FT UNY",
        companyUrl: "https://www.instagram.com/km_almusthofa/",
        period: "Feb 2025 - Dec 2025",
        location: "Yogyakarta, Indonesia",
        type: "Organization",
        description: [
            "Managing and producing informational media content for internal and external organizational needs.",
            "Responsible for graphic design, videography, and documentation of organizational activities.",
            "Collaborating with the team to plan effective communication strategies across various media platforms.",
            "Supporting the implementation of organizational events and programs by providing engaging promotional materials."
        ],
        skills: ["Graphic Design", "Photography", "Social Media Management", "Communication", "Collaboration"],
        current: false
    },
    {
        id: 3,
        role: "Mobile Development Cohort",
        company: "Bangkit Academy (Google, Gojek, Tokopedia, Traveloka)",
        companyUrl: "https://grow.google/intl/id_id/bangkit/",
        period: "Sep 2024 - Jan 2025",
        location: "Remote",
        type: "Internship",
        description: [
            "Learning Android application development in depth through Google's industry-standard curriculum.",
            "Developing mobile applications using Kotlin with MVVM architecture implementation and Retrofit.",
            "Collaborating in cross-functional teams (Machine Learning & Cloud Computing) to build Capstone Project applications.",
            "Successfully completed technical and soft skills certifications provided by industry experts."
        ],
        skills: ["Kotlin", "Android Studio", "Geo Location", "Retrofit", "Firebase", "Soft Skills"],
        current: false
    },
    {
        id: 4,
        role: "Creative Media Division Staff",
        company: "GenBI DIY Komisariat UNY",
        companyUrl: "https://www.instagram.com/genbi_uny/", 
        period: "Jul 2024 - Feb 2025",
        location: "Yogyakarta, Indonesia",
        type: "Organization", 
        description: [
            "Managing and producing creative visual content for GenBI DIY Komisariat UNY's social media.",
            "Responsible for digital branding and public dissemination of organizational activities.",
            "Collaborating with the media team to design effective visual communication strategies.",
            "Supporting the implementation of various Bank Indonesia programs in monetary policy education efforts."
        ],
        skills: ["Graphic Design", "Content Creation", "Social Media Management", "Public Relations", "Collaboration"],
        current: false
    },
];

