import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import '../App.css';

const educationList = [
  {
    title: "BACHELORS OF ENGINEERING Hons. (Cloud Computing)",
    institution: "Apex Institute of Technology (CHANDIGARH UNIVERSITY)",
    year: "2022 - 2025",
    description: ""
  },
  {
    title: "Diploma in Computer Science & Engineering",
    institution: "Tathagat Gautam Buddha Government Polytechnic,Shravasti,UP",
    year: "2019 - 2022",
    description: ""
  },
  {
    title: "HIGHER SECONDARY EDUCATION",
    institution: "Angels Academy Sr. Sec. School,Haridwar,UK",
    year: "2018 - 2019",
    description: ""
  },
  {
    title: "SECONDARY EDUCATION",
    institution: "Siddharth Public School,Siddharthnagar",
    year: "2016- 2017",
    description: ""
  }
];

export default function Educations() {
  return (
    <motion.section
      id="education"
      className="container education-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Education</h2>
      <div className="row justify-content-center">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="col-md-5 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="education-card p-4 text-start h-100">
              <h5 className="fw-bold d-flex align-items-center">
                <FaGraduationCap className="me-2 text-warning" />
                {edu.title}
              </h5>
              <h6 className="text-light fst-italic">{edu.institution}</h6>
              <p className="mb-1">
                <small className="text-muted fst-italic">{edu.year}</small>
              </p>
              <p className="education-desc mt-2">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
