// Animation variants for Dashboard component

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
        }
    }
};

export const itemVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { type: "spring" as const, stiffness: 50 } 
    }
};

export const imageVariants = {
    hidden: { opacity: 0, x: 50, rotate: 0 },
    visible: { 
        opacity: 1, 
        x: 0, 
        rotate: 3, 
        transition: { duration: 0.8, type: "spring" as const } 
    }
};

export const floatAnimation = {
    y: [0, -15, 0], 
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
    }
};

export const typewriterConfig = {
    words: [
        "UI UX Design Enthusiast",
        "Android Development",
        "Front End Development",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
};

// Animation variants for Project component

export const projectContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

export const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 100, damping: 12 }
    }
};

export const projectHeaderVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
    }
};

export const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { delay: 0.5 }
    }
};
