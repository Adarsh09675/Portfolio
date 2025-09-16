import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import '../App.css';

const certifications = [
  {
    title: "Cloud Foundations", /* change the name of your certification */
    issuer: "AWS Academy", /* issued company/college/institute/university*/
    year: "2023",
    description:
      "This certification covers the fundamentals of cloud computing, including AWS services, architecture, and best practices."
  },
  {
    title: "Google Cloud Digital Leader Training",
    issuer: "Google Cloud",
    year: "2024",
    description:
      "This Certification covers foundational knowledge of cloud computing and Google Cloud services, including core cloud concepts, products, and business use cases to support informed cloud-related decisions."
  },
];

function Certification() {
  return (
    <motion.section
      id="certification"
      className="container certification-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Certifications</h2>
      <div className="row justify-content-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="cert-card p-4 text-start h-100">
              <h5 className="fw-bold d-flex align-items-center">
                <FaCertificate className="me-2 text-info cert-icon" />
                {cert.title}
              </h5>
              <h6 className="text-light fst-italic">{cert.issuer}</h6>
              <p className="mb-1">
                <small className="text-muted fst-italic">{cert.year}</small>
              </p>
              <p className="cert-desc mt-2">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certification;