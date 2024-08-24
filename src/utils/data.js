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

export const sliderImages = [
  {
    id: 1,
    src: "/images/slider/a.png",
  },
  {
    id: 2,
    src: "/images/slider/b.png",
  },
  {
    id: 3,
    src: "/images/slider/c.png",
  },
  {
    id: 4,
    src: "/images/slider/d.png",
  },
  {
    id: 5,
    src: "/images/slider/e.png",
  },
  {
    id: 6,
    src: "/images/slider/f.png",
  },
  {
    id: 7,
    src: "/images/slider/g.png",
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
    job: "Excel Academy",
    header: "Student Testimonial",
    content:
      "I got more than I paid for. Infact, signing up for the class is one of the best decisions I made this year. I must give special commendation to the entire team of management. Most especially, Mr SALAMI AYODEJI OLUWADAMILARE. I love his style of teaching. He did more than justice to the course outline. I think the not so young man should consider a career in. Lecturing. If you are looking to start a career in Data analytics, DAELITES is the greatest Pilot I can recommend for a successful flight landing into your dream career.",
  },
  {
    id: 2,
    job: "Excel Academy",
    header: "Student Testimonial",
    content:
      "I am glad I am part of the community, its was a great thing to have acquired more knowledge from this great family. The experience was beneficial, superb and awesome. The facilitator always nailed it. The thorough explanations in the class really helped me understand the concept better. Overall, your approach to teaching is very effective and I'm looking forward to learning more from the team.",
  },
  {
    id: 3,
    job: "PowerBI Academy ",
    header: "Student Testimonial",
    content: `In all sincerity, I was a novice in PowerBI when I joined the Class in February. I mean, I did not even know that the ""BI"" in PowerBI means Business intelligence. With Just 6 classes of learning and unlearning, I can say I am confident in using PowerBI for Data Transformation, drawing out actionable insights, creating interactive dashboard and publishing report to the PowerBI Service.`,
  },
  {
    id: 4,
    job: "SQL Academy ",
    header: "Student Testimonial",
    content: `All the facilitators want everyone to be successful at SQL. They are all passionate about each student success and would go above and beyond to achieve the aim of the course. Chibuzo is extremely patient at explaining each concept in SQL.`,
  },
  {
    id: 5,
    job: "SQL Academy ",
    header: "Student Testimonial",
    content: `The organization has been wonderful. Team keeps to time (duration). Facilitators are knowledgeable on SQL`,
  },
];

export const services = [
  {
    id: 1,
    title: "DATA ANALYTICS TRAINING PROGRAM",
    description:
      "DAELITES has 5 training course modules, which spans for a year.",
    src: "/images/services/a.png",
    url: "https://bit.ly/DAELITES_WAITLIST",
  },
  {
    id: 2,
    title: "SOFT SKILL FORUM",
    description:
      "This is a community forum that takes place every 3rd Saturday of the Month.",
    src: "/images/services/b.png",
    url: "https://bit.ly/DAELITES_WAITLIST",
  },
  {
    id: 3,
    title: "BUILD DATA PROJECT PROGRAM",
    description: `The goal of the program is to foster
       collaboration among data analysts by building data projects that will sharpen and strengthen their data analytics skills.`,
    src: "/images/services/c.png",
    url: "https://bit.ly/DAELITES_WAITLIST",
  },
  {
    id: 4,
    title: "1 MILLION SMES PROJECT",
    description:
      "The long-term goal of this project is to help 1 million SMEs and NGO Organisations in Africa harness the power of data analytics to improve operational efficiency and boost profitability.",
    src: "/images/services/d.png",
    url: "https://bit.ly/DAELITES_WAITLIST",
  },
];

export const courses = [
  {
    id: 1,
    title: "Excel",
    sub_title: "For Beginners in Data Analytics",
    description:
      "In this course, you will master Excel for advanced data analysis and visualisation. Expect to delve into complex functions, pivot tables, and data modelling techniques. By the end, you’ll be able to transform raw data into insightful reports and make data-driven decisions with confidence.",
    offers: [
      "4 weeks intensive training",
      "Expert Guidance",
      "2 interactive dashboard projects",
      "Certification",
    ],
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/TheExcelAcademy",
    src: "/images/courses/excel.png",
    logo: "/images/courses/logos/excel.png",
  },
  {
    id: 2,
    title: "Power BI",
    sub_title: "For Intermediate Data Analysts",
    description:
      "This course will guide you through the powerful features of Power BI. Learn to create interactive dashboards and detailed reports using data modeling, DAX functions, and visual analytics. By the end, you’ll be able to convert complex datasets into compelling visual stories that drive business intelligence.",
    duration: "6 weeks",
    offers: [
      "6 weeks intensive training",
      "Tips to acing Microsoft PL300 certification exam",
      "Access to build data community",
      "Hands-On Practical",
      "Certification",
    ],
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/thepowerbiacademy",
    src: "/images/courses/power-BI.png",
    logo: "/images/courses/logos/power-BI.png",
  },
  {
    id: 3,
    title: " Tableau",
    sub_title: "For Intermediates Data Analytics",
    description:
      "Become proficient in Tableau with this course designed to teach you the art of data visualization. Learn to create dynamic dashboards, apply best practices in data visualization, and communicate data insights effectively. By the end, you’ll be able to build and share impactful visualizations that tell a compelling data story.",
    duration: "6 weeks",
    offers: [
      "8 weeks intensive training",
      "Expert Guidance",
      "Portfolio Building",
      "Certification",
    ],
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/Tableau_Academy",
    src: "/images/courses/tableau.png",
    logo: "/images/courses/logos/tableau.png",
  },
  {
    id: 4,
    title: " SQL ",
    sub_title: "For Intermediate Data Analysts",
    description:
      "This course covers the essentials of SQL for querying and managing databases. Expect to learn how to manipulate data efficiently, create complex queries, and manage relational database systems. By the end, you’ll have the skills to support data-driven decision-making processes in any organisation.",
    duration: "6 weeks",
    offers: [
      "6 weeks intensive training",
      "FREE Global Hacker rank SQL Certification Exam",
      "Access to build data community",
      "Hand-On Practicals",
    ],
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/the_sql_academy",
    src: "/images/courses/sql.png",
    logo: "/images/courses/logos/sql.png",
  },
  {
    id: 5,
    title: " Python ",
    sub_title: "For Intermediates Data Analytics",
    description:
      "Become proficient in Tableau with this course designed to teach you the art of data visualization. Learn to create dynamic dashboards, apply best practices in data visualization, and communicate data insights effectively. By the end, you’ll be able to build and share impactful visualizations that tell a compelling data story.",
    duration: "6 weeks",
    offers: [
      "6 weeks intensive training",
      "FREE Global Hacker rank SQL Certification Exam",
      "Access to build data community",
      "Hand-On Practicals",
    ],
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/thepythonacademy",
    src: "/images/courses/python.png",
    logo: "/images/courses/logos/python.png",
  },
  {
    id: 6,
    title: "Private Coaching - ",
    sub_title: " One on One Training",
    description:
      "This is a personalized guidance, targeted skill development, and tailored feedback to accelerate your learning and achieve your specific goals. Available for Excel, Power BI and SQL",
    offers: ["5 months intensive training", "Hand-On Practicals"],
    duration: "5 Months",
    fee: "₦100,000/m",
    paymentLink: "https://paystack.com/pay/dae_private_coaching",
    src: "/images/courses/private.png",
    logo: "/images/courses/logos/private.png",
  },
];

export const teamData = [
  {
    id: 1,
    src: "/images/team/a.png",
    name: "Iremide Olatunji",
    position: "Founder/CEO",

    url: "https://www.linkedin.com/in/iremide-olatunji/",
  },
  {
    id: 2,
    src: "/images/team/b.png",
    name: " Francisca Ezeabikwa",
    position: "Project Coordinator,",
    type: "Training",
    url: "https://www.linkedin.com/in/francisca-ezeabikwa",
  },
  {
    id: 3,
    src: "/images/team/c.png",
    name: "   Ejiroghene Pepper",
    position: "Project Coordinator,",
    type: "Soft Skills",
    url: "https://www.linkedin.com/in/francisca-ezeabikwa",
  },

  {
    id: 4,
    src: "/images/team/d.png",
    name: "Oluwatomisin Olatoye",
    position: "Project Coordinator,",
    type: "Build Data Project",
    url: "https://www.linkedin.com/in/oluwatomisin-olatoye-62a93973",
  },
  {
    id: 5,
    src: "/images/team/e.png",
    name: "Akosua Afaribea",
    position: "Project Coordinator,",
    type: "1 million SME",
    width: 140,
    height: 190,
    url: "http://linkedin.com/in/akissiedu",
  },

  {
    id: 6,
    src: "/images/team/f.png",
    name: "Oluwanifemi Aweda",
    position: "Facilitator",
    url: "http://linkedin.com/in/oluwanifemi-aweda-2b9206118",
  },
  {
    id: 7,
    src: "/images/team/test.png",
    name: "Salami Ayodeji",
    position: "Facilitator",
    url: "https://www.linkedin.com/in/ayodeji-salami-84b7a2b9/",
  },
  {
    id: 7,
    src: "/images/team/h.png",
    name: " Chibuzo Nwankwo",
    position: "Facilitator",
    url: "https://www.linkedin.com/in/chibuzo-nwankwo-baa756133",
  },
  {
    id: 8,
    src: "/images/team/i.png",
    name: "  Ayomide Oladimeji",
    position: "Head,",
    type: "PR & Communications",
    url: "https://www.linkedin.com/in/ayomide-oladimeji/",
  },
];
