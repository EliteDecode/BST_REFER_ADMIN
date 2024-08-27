// Navbar Types

export type NavbarLinksProps = {
  title: string;
};

export type NavbarMiniLinksProps = {
  title: string;
  path: string;
};

//Testimonials types

export type TestimonialsProps = {
  name: string;
  position: string;
  testimonial: string;
  companyName: string;
  aboutProject: string;
  companyLocation: string;
  image: string;
};

//How it Works Types
export type HowItWorksProps = {
  title: string;
  description: string;
  image: string;
};

//Faqa
export type FaqProps = {
  question: string;
  answer: string;
};

//Services Rendered
export type ServicesProps = {
  title: string;
  description: string;
  icon: string;
  abbr?: string;
};

//Dashboard Navbar Props
export type DashboardNavbarProps = {
  setIsSidebar: (value: boolean) => void;
  isSidebar: boolean;
};

//InfoCardDisplay Dashboard Props
export type InfoCardDisplayProps = {
  title: string;
  description: number | string;
  link: string;
  buttonText: string;
  image: string;
};

//Users Props
export type UserProps = {
  fullname: string;
  email: string;
  phone: string;
  address: string;
  status: "pending" | "successful";
  course: string;
};

//Transaction Props
export type TransactionProps = {
  fullname: string;
  email: string;
  phone: string;
  amount: number;
  date: string;
  status: "pending" | "paid";
};
