
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  hoverImage: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}
