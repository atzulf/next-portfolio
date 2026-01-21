// Contact Information Interface
export interface ContactInfo {
    icon: string;
    title: string;
    value: string;
    link: string;
}

export interface SocialLink {
    icon: string;
    link: string;
    color: string;
}

// Contact Information Data
export const contactInfo: ContactInfo[] = [
    {
        icon: 'https://img.icons8.com/fluency/48/gmail.png',
        title: 'Email',
        value: 'atzulfikar45@gmail.com',
        link: 'mailto:atzulfikar45@gmail.com'
    },
    {
        icon: 'https://img.icons8.com/fluency/48/map-pin.png',
        title: 'Location',
        value: 'Yogyakarta, Indonesia',
        link: '#'
    }
];

// Social Media Links
export const socialLinks: SocialLink[] = [
    { icon: 'https://img.icons8.com/fluency/48/github.png', link: 'https://github.com/atzulf', color: 'hover:bg-gray-700' },
    { icon: 'https://img.icons8.com/fluency/48/linkedin.png', link: 'https://linkedin.com/in/ataka-dzulfikar', color: 'hover:bg-blue-700' },
    { icon: 'https://img.icons8.com/fluency/48/instagram-new.png', link: 'https://instagram.com/atakazulfikar', color: 'hover:bg-pink-600' }
];