"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";


const services = [
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

const courses = [
  {
    id: 1,
    title: "The Excel Academy",
    description: "For Beginners in Data Analytics",
    duration: "4 weeks",
    fee: "₦50,000",
    paymentLink: "https://paystack.com/pay/TheExcelAcademy",
    extras: "Student project work will be published on LinkedIn for review from experts in the data analytics field.",
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
    extras: "Tips to make your project emerge as Data Viz of the day in the Tableau Global Community and get recognised as a rising star in using Tableau for data analysis.",
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

const Services = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 sm:px-10 lg:px-20">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-green-700">Our Service Offerings</h1>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-700">
                {service.title}
              </h2>
              <p className="text-gray-600 mt-4">{service.description}</p>
            </div>
          ))}
        </div>

      <div className="mt-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-green-700 mb-8">Data Analytics Training Programs</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {courses.map((course) => (
            <div key={course.id} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
              <p className="text-gray-700 mb-2">{course.description}</p>
              <p className="text-gray-700 mb-2"><strong>Duration:</strong> {course.duration}</p>
              <p className="text-gray-700 mb-2"><strong>Fee:</strong> {course.fee}</p>
              <p className="text-gray-700 mb-4">{course.extras}</p>
              <a
                href={course.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800"
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-green-700 mb-4">Have Questions?</h2>
        <p className="text-lg mb-4">If you have any inquiries or need more information, feel free to contact us.</p>
        <a
          href="mailto:info@example.com"
          className="w-fit m-auto bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 flex items-center justify-center"
        >
          <FaEnvelope className="mr-2" />
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Services;
