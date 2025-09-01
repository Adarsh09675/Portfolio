import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projectList = [
  {
    title: 'SaaS Platform DevOps Pipeline – ems.shiwansh.com',
    duration: 'Feb 2025 – Present',
    company: 'Shiwansh Solutions',
    description:
      'Implemented and maintained CI/CD pipelines for a SaaS platform, ensuring smooth deployment workflows and zero-downtime releases.',
    responsibilities:
      'Developed Jenkins pipelines integrated with GitHub webhooks for automated deployments; containerized applications using Docker; configured infrastructure automation with Ansible and Terraform; implemented rollback strategies and enhanced error handling; set up Prometheus and Grafana for real-time monitoring.'
  },
  {
    title: 'SaaS Platform DevOps Pipeline – shiwansh.com',
    duration: 'May 2025 – Present',
    company: 'Shiwansh Solutions',
    description:
      'Optimized deployment processes for a multi-service SaaS platform, improving release speed and stability.',
    responsibilities:
      'Streamlined containerized deployments using Docker; automated provisioning with Terraform; integrated Jenkins pipelines with backend and static frontend deployments; implemented Slack alerts for build statuses; collaborated with developers to improve delivery pipeline efficiency.'
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
    title: 'AWS Infrastructure Automation using Terraform with Custom VPC and EC2-based Load Balancer',
    duration: '',
    company: 'Personal Project',
    description:
      'Automated the provisioning of AWS infrastructure using Terraform for a secure and scalable cloud environment.',
    responsibilities:
      'Created Terraform scripts to provision a custom VPC, subnets, route tables, and internet gateway; deployed EC2 instances including a load balancer; configured security groups for web and SSH access; ensured reusable infrastructure with modular scripts and state management.'
  },
  {
    title: 'System Monitoring using Node Exporter, Prometheus, and Grafana',
    duration: '',
    company: 'Personal Project',
    description:
      'Set up a complete system monitoring stack to collect, store, and visualize server performance metrics in real-time.',
    responsibilities:
      'Installed and configured Node Exporter on a Linux server; set up Prometheus to scrape system metrics; integrated Grafana with Prometheus for dashboard visualizations; created custom dashboards to track CPU, memory, disk, and network usage.'
  },
  {
    title: 'Apache Web Server Deployment using Jenkins Pipeline and Ansible',
    duration: '',
    company: 'Personal Project',
    description:
      'Automated Apache web server deployment with a CI/CD pipeline integrating Jenkins and Ansible.',
    responsibilities:
      'Configured a Jenkins Declarative Pipeline triggered by Git push events; wrote Ansible playbooks to install Apache, manage service state, and deploy website files; set up Slack integration for build notifications; performed post-deployment testing using curl.'
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
                <strong>Responsibilities:</strong> {project.responsibilities}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
