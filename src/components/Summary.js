import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Summary() {
  return (
    <motion.section
      id="summary"
      className="container summary-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Summary</h2>
      <p className="summary-text lead">
      DevOps Intern at <strong>Shiwansh Solutions</strong> specialized in <strong>cloud-native automation, CI/CD pipelines, containerization, and real-time monitoring</strong> to deliver secure, scalable, and zero-downtime deployments.
      </p>
    </motion.section>
  );
}

export default Summary;
