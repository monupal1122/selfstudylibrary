import { Facility, GalleryImage, WhyChooseItem, NavItem } from '@/types';

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://selfstudylibrary.com';
}

export const BUSINESS_INFO = {
  name: 'Self Study Library',
  tagline: 'Your Dedicated Space for Focused Study in Jalandhar',
  phone: '+91 81959 74627',
  phoneRaw: '+918195974627',
  whatsappUrl: 'https://wa.me/918195974627?text=Hello%20Self%20Study%20Library,%20I%20would%20like%20to%20inquire%20about%20seat%20availability%20and%20timings.',
  telUrl: 'tel:+918195974627',
  address: {
    line1: 'Gate 3, Bus Stand',
    line2: 'Near Headmasters Academy, Outside, Jawahar Nagar',
    city: 'Jalandhar',
    state: 'Punjab',
    postalCode: '144001',
    country: 'India',
    fullFormatted: 'Gate 3, Bus Stand, Near Headmasters Academy, Outside, Jawahar Nagar, Jalandhar, Punjab 144001, India.',
  },
  openingHours: 'Open 24 Hours, 7 Days a Week',
  hoursShort: 'Open 24/7',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.2838706324835!2d75.57861937617327!3d31.323577756858055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5bb49bb77ec1%3A0x6bce50ad5c20ebfa!2sShaheed%20e%20Azam%20Sardar%20Bhagat%20Singh%20Inter%20State%20Bus%20Terminal%20Jalandhar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Gate+3,+Bus+Stand,+Jawahar+Nagar,+Jalandhar,+Punjab+144001',
  googleMapsPlaceUrl: 'https://www.google.com/maps/search/?api=1&query=Gate+3+Bus+Stand+Jawahar+Nagar+Jalandhar+Punjab+144001',
  canonicalUrl: 'https://selfstudylibrary.com',
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

export const FACILITIES: Facility[] = [
  {
    id: 'seats',
    title: 'Comfortable Study Seats',
    description: 'Ergonomic, cushioned seating designed for long study hours without fatigue.',
    icon: 'Armchair',
    tag: 'Ergonomic',
  },
  {
    id: 'quiet',
    title: 'Peaceful Environment',
    description: 'Pin-drop silence and strict noise-free etiquette ensuring zero study distractions.',
    icon: 'VolumeX',
    tag: '100% Silent',
  },
  {
    id: 'desk',
    title: 'Individual Study Space',
    description: 'Spacious personal partition cabins offering privacy and ample desk area for books and laptop.',
    icon: 'BookOpen',
    tag: 'Private Cabins',
  },
  {
    id: 'ac',
    title: 'Air Conditioning',
    description: 'Fully climate-controlled study halls maintaining a pleasant temperature in all seasons.',
    icon: 'Wind',
    tag: 'Climate Controlled',
  },
  {
    id: 'wifi',
    title: 'High-Speed Wi-Fi',
    description: 'Fast, stable fiber internet connectivity for streaming video lectures and online tests.',
    icon: 'Wifi',
    tag: 'High Speed',
  },
  {
    id: 'cctv',
    title: 'CCTV Security & Safety',
    description: '24/7 high-definition surveillance providing safe and secure environment, especially for late hours.',
    icon: 'ShieldCheck',
    tag: 'Safe & Secure',
  },
  {
    id: 'power',
    title: 'Individual Charging Points',
    description: 'Dedicated electric power sockets at each desk for uninterrupted phone and laptop charging.',
    icon: 'Zap',
    tag: 'At Every Desk',
  },
  {
    id: 'water',
    title: 'Clean Drinking Water',
    description: 'Hygienic RO purified fresh drinking water readily available for all library members.',
    icon: 'Droplets',
    tag: 'RO Purified',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'location',
    title: 'Convenient Location Near Bus Stand',
    description: 'Located right at Gate 3 of Jalandhar Bus Stand in Jawahar Nagar. Easy to reach whether you live in Jalandhar or commute by bus daily.',
    icon: 'MapPin',
  },
  {
    id: '24hours',
    title: 'Open 24 Hours, 7 Days a Week',
    description: 'No strict fixed closing time. You can pick morning, afternoon, evening, or night shifts based on your study routine.',
    icon: 'Clock',
  },
  {
    id: 'exam-ready',
    title: 'Ideal for Competitive Exams',
    description: 'Built specifically for students preparing for UPSC, Punjab PCS, SSC, Banking, Police exams, IELTS / PTE, and college degrees.',
    icon: 'GraduationCap',
  },
  {
    id: 'focused',
    title: '100% Focused & Silent Atmosphere',
    description: 'Everyone in the library is there to study seriously, which helps you stay disciplined and avoid phone or home distractions.',
    icon: 'Sparkles',
  },
  {
    id: 'budget',
    title: 'Flexible Monthly & Shift Plans',
    description: 'Affordable seat plans for day shifts, night shifts, and full 24-hour access so you only pay for what you need.',
    icon: 'BadgeCheck',
  },
  {
    id: 'well-lit',
    title: 'Eye-Friendly Reading Lights',
    description: 'Clean LED lighting and individual desk lights so you can read books and use laptops for hours without eye strain.',
    icon: 'Sun',
  },
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'g1',
    src: '/images/gallery-study-hall-1.svg',
    alt: 'Self Study Library individual study cubicles in Jalandhar',
    caption: 'Quiet Individual Study Cubicles with Personal LED Lighting',
    category: 'Study Hall',
  },
  {
    id: 'g2',
    src: '/images/gallery-study-hall-2.svg',
    alt: 'Spacious air-conditioned study hall near Jalandhar Bus Stand',
    caption: 'Air-Conditioned Spacious Reading Hall with Ergonomic Chairs',
    category: 'Study Hall',
  },
  {
    id: 'g3',
    src: '/images/gallery-cabin-seats.svg',
    alt: 'Personal desk with charging ports and high partition panels',
    caption: 'Private Study Pod with Power Points & Book Storage',
    category: 'Cabin Seats',
  },
  {
    id: 'g4',
    src: '/images/gallery-night-study.svg',
    alt: '24 Hours night study environment at Self Study Library Jalandhar',
    caption: '24/7 Night Shift Study Atmosphere for Dedicated Aspirants',
    category: 'Environment',
  },
  {
    id: 'g5',
    src: '/images/gallery-amenities.svg',
    alt: 'RO purified drinking water and charging points',
    caption: 'Clean RO Water Dispenser and Power Facilities',
    category: 'Amenities',
  },
  {
    id: 'g6',
    src: '/images/gallery-books-student.svg',
    alt: 'Student revising for competitive exams in silent reading room',
    caption: 'Focused Competitive Exam Aspirant Revision Area',
    category: 'Environment',
  },
];

export const FAQS = [
  {
    q: 'What are the operating hours of Self Study Library in Jalandhar?',
    a: 'Self Study Library is open 24 hours a day, 7 days a week. You can study during day shifts, night shifts, or flexible full-day passes according to your routine.',
  },
  {
    q: 'Where is Self Study Library located?',
    a: 'We are situated at Gate 3, Bus Stand, Near Headmasters Academy, Outside Jawahar Nagar, Jalandhar, Punjab 144001. Our location is less than a 2-minute walk from the Jalandhar Interstate Bus Terminal.',
  },
  {
    q: 'What facilities are provided to students?',
    a: 'We provide comfortable cushioned chairs, individual study partitions, air-conditioned rooms, high-speed Wi-Fi, 24/7 CCTV surveillance, individual charging points at each desk, and clean RO drinking water.',
  },
  {
    q: 'How can I reserve a seat or check availability?',
    a: 'You can directly call us at +91 81959 74627 or message us on WhatsApp. You are also welcome to visit Gate 3, Bus Stand, Jawahar Nagar for a quick walkthrough and seat selection.',
  },
  {
    q: 'Is the library suitable for girls and late-night study?',
    a: 'Yes, absolutely. We prioritize safety with 24/7 CCTV surveillance, well-lit surroundings near Bus Stand Gate 3, and a disciplined, respectful student environment.',
  },
];
