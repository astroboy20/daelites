import {
  CertificateIcon,
  CommunityIcon,
  InstructorIcon,
  InteractiveIcon,
} from "../assets/index";

export const CoursesData = [
  {
    id: 1,
    title: "Excel",
    src: "/images/excel.png",
    url: "/courses",
  },
  {
    id: 2,
    title: "Power BI",
    src: "/images/powerbi.png",
    url: "/courses",
  },
  {
    id: 3,
    title: "Tableau",
    src: "/images/table.png",
    url: "/courses",
  },
  {
    id: 4,
    title: "SQL",
    src: "/images/sql.png",
    url: "/courses",
  },
  {
    id: 5,
    title: "Python",
    src: "/images/python.png",
    url: "/courses",
  },
];
export const ChooseData = [
  {
    id: 1,
    icon: <InteractiveIcon />,
    title: "Interactive Courses",
    content:
      "Engage in dynamic and interactive learning experiences with our expertly crafted courses.",
  },
  {
    id: 2,
    icon: <InstructorIcon />,
    title: "Expert Instructors",
    content:
      "Learn from the best! Our platform boasts a roster of accomplished instructors with real-world expertise.",
  },
  {
    id: 3,
    icon: <InteractiveIcon />,
    title: "Continuous Growth",
    content:
      "With our platform, you'll have access to fresh content and updated materials.",
  },
  {
    id: 4,
    icon: <CommunityIcon />,
    title: "Community Support",
    content:
      "Join a vibrant learning community that fosters collaboration and support.",
  },
  {
    id: 5,
    icon: <CertificateIcon />,
    title: "Certifications",
    content:
      "Our certifications open doors to exciting opportunities and validate your expertise.",
  },
];

export const TestimonialData = [
  {
    id: 1,
    name: "Feedback 1",
    image: "/images/a.png",
    job: "Excel course",
    header: "Excel course feedback-1",
    content:
      "I got more than I paid for. Infact, signing up for the class is one of the best decisions I made this year.",
    content2:
      "I must give special commendation to the entire team of management. Most especially, Mr SALAMI AYODEJI OLUWADAMILARE. I love his style of teaching. He did more than justice to the course outline. I think the not so young man should consider a career in. Lecturing. ",
    content3:
      "If you are looking to start a career in Data analytics, DAELITES is the greatest Pilot I can recommend for a successful flight landing into your dream career. ",
  },
  {
    id: 2,
    name: "Feedback 2",
    image: "/images/b.png",
    job: "Excel course",
    header: "Excel course feedback-2",
    content:
      "I am glad I am part of the community, its was a great thing to have acquired more knowledge from this great family.",
    content2:
      " The experience was beneficial, superb and awesome. The facilitator always nailed it. The thorough explanations in the class really helped me understand the concept better. ",
    content3:
      "Overall, your approach to teaching is very effective and I'm looking forward to learning more from the team. ",
  },
  {
    id: 3,
    name: "Feedback 3",
    image: "/images/c.png",
    job: "PowerBI course ",
    header: "PowerBI course feedback",
    content: `In all sincerity, I was a novice in PowerBI when I joined the Class in February. I mean, I did not even know that the ""BI"" in PowerBI means Business intelligence. 
      With Just 6 classes of learning and unlearning, I can say I am confident in using PowerBI for Data Transformation, drawing out actionable insights, creating interactive dashboard and publishing report to the PowerBI Service. While I believe there is a long way to go, this training has given me the solid foundation in data analytics. It's just more than a head start! 
     The instructors are top-notch in teaching, and they are always ready to share impactful and priceless resources to further your learning.
     I got a lot of motivation and inspiration from the project coordinator that helps with my consistency.
    
     `,
    content2: ` DAELITES is not just an academy, it's more like a family where you learn from experts in the field, get tutelage on how to optimize your social media, building your CV and position yourself fully ready for the job market.
      DAElites training also provide necessary resources and tools to me to prepare for my Microsoft Proficiency Exam. 
      No matter your level of proficiency, Joining DAElites Academy is a great choice I think every prospective Data Analyst enthusiast should make.`,
  },
  {
    id: 4,
    name: "Feedback 4",
    image: "/images/a.png",
    job: "SQL course ",
    header: "SQL course feedback-1",
    content: `All the facilitators want everyone to be successful at SQL. They are all passionate about each student success and would go above and beyond to achieve the aim of the course. Chibuzo is extremely patient at explaining each concept in SQL.`,
  },
  {
    id: 5,
    name: "Feedback 5",
    image: "/images/b.png",
    job: "SQL course ",
    header: "SQL course feedback-2",
    content: `The organization has been wonderful. Team keeps to time (duration). Facilitators are knowledgeable on SQL`,
  },
];


export const services = [
  {
    title: "DATA ANALYTICS TRAINING PROGRAM",
    description:
      "DAELITES has 5 training course modules, which spans for a year.",
  },
  {
    title: "SOFT SKILL FORUM",
    description:
      "This is a community forum that takes place every 3rd Saturday of the Month.",
  },
  {
    title: "BUILD DATA PROJECT PROGRAM",
    description:
      "The goal of the program is to foster collaboration among data analysts by building data projects that will sharpen and strengthen their data analytics skills.",
  },
  {
    title: "1 MILLION SMES PROJECT",
    description:
      "The long-term goal of this project is to help 1 million SMEs and NGO Organisations in Africa harness the power of data analytics to improve operational efficiency and boost profitability.",
  },
];

export const courses = [
  {
    id: 1,
    title: "The Excel Academy",
    description: "For Beginners in Data Analytics",
    duration: "4 weeks",
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/TheExcelAcademy",
    extras:
      "Student project work will be published on LinkedIn for review from experts in the data analytics field.",
  },
  {
    id: 2,
    title: "The Power BI Academy",
    description: "For Intermediate Data Analysts",
    duration: "6 weeks",
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/thepowerbiacademy",
    extras: "Huge discount on the Microsoft Power BI Certification Exams fee.",
  },
  {
    id: 3,
    title: "The Tableau Academy",
    description: "For Intermediate Data Analysts",
    duration: "6 weeks",
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/Tableau_Academy",
    extras:
      "Tips to make your project emerge as Data Viz of the day in the Tableau Global Community and get recognised as a rising star in using Tableau for data analysis.",
  },
  {
    id: 4,
    title: "The SQL Academy",
    description: "For Intermediate Data Analysts",
    duration: "6 weeks",
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/the_sql_academy",
    extras: "Global Hacker rank SQL Certification Exam for FREE.",
  },
  {
    id: 5,
    title: "The Python Academy",
    description: "For Advanced Data Analysts",
    duration: "6 weeks",
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/thepythonacademy",
    extras: "Global Hacker rank Python Certification Exam for FREE.",
  },
  {
    id: 6,
    title: "Private Coaching - One on One Training",
    description: "Courses: Excel, Power BI, SQL",
    duration: "5 Months",
    fee: "₦100,000 per month",
    paymentLink: "https://paystack.com/pay/dae_private_coaching",
  },
];

