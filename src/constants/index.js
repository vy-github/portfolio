import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  java,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  materialui,
  csharp,
  figma,
  docker,
  maniarlogo,
  borderfreelogo,
  newtonschoollogo,
  ghrietlogo,
  github,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

let skills = [];
technologies.forEach((tech) => {
  skills.push(tech.name, 1000);
});

const experiences = [
  {
    title: "Senior Software Engineer (Team Lead | June 2022)",
    company_name: "Borderfree Technology Pvt Ltd",
    icon: borderfreelogo,
    iconBg: "#383E56",
    date: "Oct 2021 - Aug 2023",
    points: [
      "During my tenure as a Software Developer, I was engaged in diverse and impactful tasks that my skills and innovative problem-solving abilities.",
      "I utilized Jitsi low level API to implement the functionalities of video conferencing resulting in user experiences. This demonstrates my expertise in integrating APIs",
      "Experienced in virtual background implementation during studio conferences using MediaPipe, which elevates the appeal and creates a polished atmosphere. I have shown my capability to seamlessly integrate technology to enhance the virtual meeting experience.",
      "I focused on enhancing application development by utilizing Webpack for bundling and ensuring a release on npm.",
      "I was responsible, for creating scripts and custom HTML codes to integrate our application with platforms. This helped us expand the availability and of our product in environments.",
      "Integrated the Banuba SDK to introduce an interactive 'Try On' feature, allowing users to products on their own faces, resulting in heightened user engagement.",
      "Integrated and optimized social login functionality to enhance user experience. This allows for access, through platforms making it more convenient for users. By simplifying the uthentication process we saw an uptick, in sign up rates which ultimately led to an user. This update creates an user friendly environment.",
      "Throughout my role, I continuously contribute to the growth and maintenance of software by leading a team and utilizing my problem solving skills. My extensive knowledge, in integrating APIs optimizing deployments and engaging users demonstrates my dedication to delivering software solutions. I apply an results oriented approach to every project making, in the dynamic realm of software development.",
    ],
  },
  {
    title: "Full Stack Development Bootcamp",
    company_name: "Newton School",
    icon: newtonschoollogo,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Sep 2021",
    points: [""],
  },
  {
    title: "Master of Computer Applications (CSE)",
    company_name:
      "G. H. Raisoni Institute of Engineering and Technology, Nagpur, MH",
    icon: ghrietlogo,
    iconBg: "#383E56",
    date: "Aug 2018 - June 2021",
    points: [""],
  },
  {
    title: "BCCA (CSE)",
    company_name: "S S Maniar College, Nagpur, MH",
    icon: maniarlogo,
    iconBg: "#E6DEDD",
    date: "July 2014 - June 2017",
    points: [""],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    title: "E Commerce websitet",
    icon: reactjs,
    iconBg: "#373b23f0",
    source_code_link: "https://github.com/vy-github/E_Shopping_with_backend",
    points: [
      "A CRUD application exposed using a RESTful API made with Node js",
      "To ensure compatibility across all devices with the help of Bootstrap",
      "The app allowing users to filter products by gender categories: Men, Women, and Kids.",
      "We can easily add products to your cart Just click the 'Add to Cart' button on any product page.",
      "As you add or remove items our Cart feature instantly calculates the subtotal, giving you a real-time view of the total cost of the items in your cart. This helps you stay within your budget.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
  },
  {
    title: "Biometric Fingerprint Attendance",
    icon: csharp,
    iconBg: "#E6DEDD",
    source_code_link:
      "https://github.com/vy-github/Biometric-Attendance-System-.NET",
    points: [
      "Using the Myntra MFS 100 device, along with its Software Development Kit (SDK) this project  an advanced system for maintaining attendance.",
      "During an onboarding process each new user will be assigned a unique id by record his fingerprint",
      "In the update section if their biometric data changes or stops working, they can also update it here with other information",
      "We're simplifying attendance tracking with a default biometric section. Users can clock in by scanning their fingerprint which we captured during onboarding. In case the fingerprint doesn't work users can manually log in using their employee ID and password.",
      "Admins can keep track of daily attendance on their homepage in the form of chat. We're also maintaining detailed attendance records and reports for up to a year.",
      "Admin can see device name and whether they're connected or not from the device info section, ensuring everything runs smoothly.",
    ],
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "myntra-sdk",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Event Reminder System",
    icon: java,
    iconBg: "#C9DD8C",
    source_code_link: "https://github.com/vy-github/Event-Reminder-System-Java",
    points: [
      "This project addresses the critical need for efficient event management and timely reminders.",
      "By default the event remind once as it set.",
      "Have feature to set Daily, Weekdays, Monthly, and Annually as per user requirement.",
      "The event reminds by Windows Notification by default.",
      "If we set email of phone number after proper validating the task also can remind by Email and SMS.",
      "Users can Update and Delete a particular event as per requirement.",
    ],
    tags: [
      {
        name: "java,",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
  },
];

export { services, technologies, skills, experiences, testimonials, projects };
