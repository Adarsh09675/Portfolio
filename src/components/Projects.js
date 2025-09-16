import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projectList = [
  {
    title: 'SaaS Platform DevOps Pipeline – ems.shiwansh.com',
    duration: 'Jun 2025 – Jul 2025',
    company: 'Shiwansh Solutions',
    description:
      'Implemented and maintained CI/CD pipelines for a SaaS platform, ensuring smooth deployment workflows and zero-downtime releases.',
    responsibilities:
      'Developed Jenkins pipelines integrated with GitHub webhooks for automated deployments; containerized applications using Docker; configured infrastructure automation with Ansible and Terraform; implemented rollback strategies and enhanced error handling; set up Prometheus and Grafana for real-time monitoring.'
  },

  {
    title: 'Book Store OTEL App with Observability using Docker Compose',
    duration: '',
    company: 'Personal Project',
    description:
      'Developed a Node.js-based Book Store application with PostgreSQL, integrated with a full observability stack for metrics, logs, and tracing.',
    responsibilities:
      'Built and containerized the application using Docker Compose; implemented OpenTelemetry SDKs for tracing and metrics; configured Prometheus, Loki, Tempo, and Grafana for monitoring; designed APIs for book listing, ordering, and inventory management with structured logging and trace propagation.'
  },
  {
    title: 'E-commerce Website',
    duration: '',
    company: 'Personal Project',
    description:
      'It is a Frontend Project which includes multiple features like product listing,search,shopping cart,etc.',
    responsibilities:
      'Implemented reusable components, state management, and responsive UI with CSS/Bootstrap to ensure a smooth user experience.'
  },
  {
    title: 'College Management System',
    duration: '',
    company: 'Summer Training Project',
    description:
      'Created a full stack project for college using java and jsp which includes multiple features like student login,Admin login etc.',
    responsibilities:
      'A College Management System that manages student, faculty, courses, attendance, exams, fees, library, and communication with role-based access and responsive UI.'
  },
  {
    title: 'Library Management System',
    duration: '',
    company: 'Personal Project',
    description:
      'Creating a Fullstack Project using Next.js,sql,aws amplify,& .net',
    responsibilities:
      'A Library Management System that handles book inventory, user authentication, issue/return tracking, fines, and reports with a secure .NET backend, Next.js frontend, SQL database, and AWS Amplify deployment.'
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="container-fluid projects-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Projects</h2>
      <div className="row justify-content-center px-3">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="project-card p-4 text-start w-100 bg-dark bg-opacity-75 border border-light-subtle rounded-4 shadow-lg">
              <h4 className="project-title text-info mb-2">{project.title}</h4>
              <p className="text-muted mb-1">
                <small>
                  {project.company}
                  {project.duration && ` • ${project.duration}`}
                </small>
              </p>
              <p className="project-desc mb-2 text-light">{project.description}</p>
              <p className="project-responsibilities text-white-50">
                <strong>Responsibiliti:</strong> {project.responsibilities}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
