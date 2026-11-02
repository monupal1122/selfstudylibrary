export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'Study Hall' | 'Cabin Seats' | 'Amenities' | 'Environment';
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}

