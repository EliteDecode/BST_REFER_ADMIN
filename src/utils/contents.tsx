import {
  FaqProps,
  HowItWorksProps,
  NavbarLinksProps,
  ServicesProps,
  TestimonialsProps,
} from "@/types/majorTypes";

//Services Icons
import softwareImage from "@/assets/images/services/software.png";
import consultationImage from "@/assets/images/services/consultion.png";
import digitalMarketingImage from "@/assets/images/services/digital-marketting.png";

//Testimonial Images
import testimonial1 from "@/assets/images/testimonials/testimonial-1.jpeg";
import testimonial2 from "@/assets/images/testimonials/testimonial-2.jpg";
import testimonial3 from "@/assets/images/testimonials/testimonial-3.jpeg";
import testimonial4 from "@/assets/images/testimonials/testimonial-4.jpeg";
import testimonial5 from "@/assets/images/testimonials/testimonial-5.jpeg";
import testimonial6 from "@/assets/images/testimonials/testimonial-6.jpeg";
import testimonial7 from "@/assets/images/testimonials/testimonial-7.jpeg";

//HowItWorks Images
import joinProgrammeImage from "@/assets/images/howItWorks/pen.png";
import annouceImage from "@/assets/images/howItWorks/lighthouse.png";
import earnRewardImage from "@/assets/images/howItWorks/graph-reversed.png";
import uploadImage from "@/assets/images/howItWorks/uppload.png";

//======================================================================  Contents ========================================================================================//

//Navbars

export const NavbarLinks: NavbarLinksProps[] = [
  {
    title: "Courses",
  },
  {
    title: "How It Works",
  },
  {
    title: "Global",
  },
  {
    title: "Earn",
  },
  {
    title: "Testimonial",
  },
  {
    title: "FAQs",
  },
];

//Services

export const ServicesRendered: ServicesProps[] = [
  {
    title: "Software Engineering",
    description:
      "Providing end-to-end software development services to build scalable and robust applications tailored to your business needs.",
    icon: softwareImage,
  },
  {
    title: "Cyber Security",
    description:
      "Ensuring your digital assets are protected through comprehensive cybersecurity measures and solutions.",
    icon: digitalMarketingImage,
  },
  {
    title: "Data Science and AI",
    description:
      "Leveraging data science and artificial intelligence to provide actionable insights and innovative solutions for your business.",
    icon: consultationImage,
  },
];
// Testimonials

export const Testimonies: TestimonialsProps[] = [
  {
    name: "Adetokunbo Adebayo",
    position: "Software Engineering Student",
    testimonial:
      "Babtech School of Technology has provided me with an exceptional learning experience. The courses are practical and industry-relevant. Plus, the affiliate program allowed me to earn money while I studied!",
    companyName: "Babtech School of Technology",
    aboutProject:
      "Completed Software Engineering course with hands-on projects and joined the affiliate program to earn extra income.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial1,
  },
  {
    name: "Chioma Okeke",
    position: "Web Development Student",
    testimonial:
      "The training at Babtech is top-notch. I learned so much in such a short time, and the best part was earning through the affiliate program. It really helped with my expenses.",
    companyName: "Babtech School of Technology",
    aboutProject:
      "Completed Web Development course and participated in the affiliate program to earn additional income.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial2,
  },
  {
    name: "Bola Akinyemi",
    position: "Data Science Student",
    testimonial:
      "Babtech’s Data Science course was comprehensive and engaging. The affiliate program was a fantastic bonus, helping me cover my course fees.",
    companyName: "Babtech School of Technology",
    aboutProject:
      "Completed Data Science course and utilized the affiliate program to earn money while studying.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial3,
  },
  {
    name: "Emeka Nwosu",
    position: "Digital Marketing Student",
    testimonial:
      "The Digital Marketing course at Babtech equipped me with valuable skills. The affiliate program allowed me to earn, which was a great help during my studies.",
    companyName: "Babtech School of Technology",
    aboutProject:
      "Completed Digital Marketing course and benefited from the affiliate program for additional income.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial4,
  },
  {
    name: "Fatima Yusuf",
    position: "Cybersecurity Student",
    testimonial:
      "Babtech’s Cybersecurity training was thorough and practical. The affiliate program was a great way to earn extra money, making my time here even more rewarding.",
    companyName: "Babtech School of Technology",
    aboutProject:
      "Completed Cybersecurity course and took part in the affiliate program to supplement my income.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial5,
  },
  {
    name: "Ifeanyi Eze",
    position: "Cloud Computing Student",
    testimonial:
      "The Cloud Computing course at Babtech was excellent. The affiliate program provided a steady income stream, which was incredibly beneficial.",
    companyName: "Babtech School of Technology",
    aboutProject:
      "Completed Cloud Computing course and joined the affiliate program to earn while learning.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial6,
  },
  {
    name: "Kemi Balogun",
    position: "Mobile App Development Student",
    testimonial:
      "The Mobile App Development course was insightful and well-structured. The affiliate program was a great way to earn money alongside my studies.",
    companyName: "Babtech School of Technology",
    aboutProject:
      "Completed Mobile App Development course and participated in the affiliate program for additional income.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial7,
  },
  {
    name: "Tunde Adeyemi",
    position: "AI and Machine Learning Student",
    testimonial:
      "The AI and Machine Learning course at Babtech was exceptional. Earning through the affiliate program made my learning journey even more fulfilling.",
    companyName: "Babtech School of Technology",
    aboutProject:
      "Completed AI and Machine Learning course and earned extra income through the affiliate program.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial2,
  },
  {
    name: "Ngozi Chukwu",
    position: "Cyber Security Student",
    testimonial:
      "Babtech’s Blockchain Technology course was cutting-edge and insightful. The affiliate program helped me financially, making my learning experience even better.",
    companyName: "Babtech School of Technology",
    aboutProject:
      "Completed Blockchain Technology course and benefited from the affiliate program for additional income.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial3,
  },
  {
    name: "Sade Adeola",
    position: "UX/UI Design Student",
    testimonial:
      "The UX/UI Design course was fantastic, providing me with practical skills. The affiliate program was an excellent way to earn money while I studied.",
    companyName: "Babtech School of Technology",
    aboutProject:
      "Completed UX/UI Design course and participated in the affiliate program to earn extra income.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial4,
  },
];

//How It Works

export const HowItWorksDetails: HowItWorksProps[] = [
  {
    title: "Join Programme",
    description:
      "Sign up for our referral program to get started and become a part of our community. It's quick and easy, and you'll be on your way to earning rewards in no time.",
    image: joinProgrammeImage,
  },
  {
    title: "Promote BST to Your Audience",
    description:
      "Share the benefits of BST with your audience and encourage them to join our platform. Use your social media, blog, or any other channels to spread the word about BST and its amazing offerings.",
    image: annouceImage,
  },
  {
    title: "Upload Prospects",
    description:
      "Upload the phone numbers of your prospects to your referral dashboard. This ensures that when they register, their details can be matched with your uploaded numbers, allowing you to track your referrals effectively.",
    image: uploadImage, // make sure you have an appropriate image for this step
  },
  {
    title: "Earn Reward",
    description:
      "When your prospects register and their details match the uploaded numbers, you earn 10,000 Naira per successful referral. There's no limit to how much you can earn, so keep referring and watch your rewards grow!",
    image: earnRewardImage,
  },
];

//Frequently Asked Questions
export const FAQs: FaqProps[] = [
  {
    question: "What courses are offered at Babtech School of Technology?",
    answer:
      "Babtech offers a wide range of courses including Software Engineering, Web Development, Data Science, Digital Marketing, Cybersecurity, Cloud Computing, Mobile App Development, AI and Machine Learning, Blockchain Technology, and UX/UI Design.",
  },
  {
    question: "How do I join the affiliate program?",
    answer:
      "You can join the affiliate program by signing up on our website. Once registered, you will gain access to your affiliate dashboard where you can upload prospect details and track your earnings.",
  },
  {
    question: "What is the duration of the courses?",
    answer:
      "The duration of each course varies, but most of our courses range from 3 to 6 months, depending on the level and complexity of the subject.",
  },
  {
    question: "How does the affiliate program work?",
    answer:
      "As an affiliate, you promote Babtech to your audience. When someone registers using your referral and their details match the ones you've uploaded, you earn 10,000 Naira per successful referral. There's no limit to how much you can earn.",
  },
  {
    question: "Are the courses offered online or in-person?",
    answer:
      "Babtech offers both online and in-person courses to cater to the diverse needs of our students. You can choose the mode of learning that best suits your schedule and preferences.",
  },
  {
    question: "What are the payment options for the courses?",
    answer:
      "We accept various payment methods including bank transfers, credit/debit cards, and mobile payments. Detailed payment information is available on our website during the registration process.",
  },
  {
    question: "Do you offer any financial aid or scholarships?",
    answer:
      "Yes, Babtech offers financial aid and scholarships to eligible students. You can find more information about our scholarship programs on our website or by contacting our admissions office.",
  },
  {
    question: "What support is available to students during the courses?",
    answer:
      "Babtech provides comprehensive support to students, including access to mentors, tutors, and a dedicated student support team. We also offer resources such as study materials, online forums, and career counseling.",
  },
  {
    question: "Can I take multiple courses at the same time?",
    answer:
      "Yes, you can enroll in multiple courses simultaneously if you feel confident in managing your time effectively. However, we recommend starting with one course to ensure you can dedicate sufficient time and effort to your studies.",
  },
  {
    question: "What certification will I receive upon course completion?",
    answer:
      "Upon successfully completing a course, you will receive a certificate from Babtech School of Technology. This certificate is recognized by industry professionals and can help you advance your career.",
  },
];
