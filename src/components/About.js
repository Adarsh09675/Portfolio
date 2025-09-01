import React from 'react';
import '../App.css';
import profileImg from '../assets/2648938.jpg';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">DevOps Engineer | Cloud Computing Specialist</h4>
              <p className="text-muted">
                I’m <strong>Anuj Verma</strong>, a DevOps Engineer at <strong>Shiwansh Solutions</strong> with expertise in cloud platforms, automation, 
                and CI/CD pipelines. I specialize in designing and maintaining scalable, secure, and production-ready infrastructure, 
                ensuring smooth deployments and reliable operations.
              </p>
              <p className="text-muted">
                At Shiwansh Solutions, I have worked on multiple <strong>SaaS-based DevOps pipelines</strong>, implementing containerized deployments, 
                infrastructure-as-code with <strong>Ansible</strong> and <strong>Terraform</strong>, and integrating real-time monitoring tools 
                to achieve zero-downtime deployments. I collaborate closely with development teams to enhance pipeline efficiency, 
                automate release processes, and improve rollback strategies.
              </p>
              <p className="text-muted">
                My technical expertise includes <strong>AWS, Docker, Kubernetes, Jenkins, Terraform, Ansible, Git, Linux, Java, Python, C, C++</strong>, 
                along with monitoring stacks like <strong>Prometheus, Grafana, Loki, and Tempo</strong>. I’m passionate about building robust DevOps solutions 
                that bridge the gap between development and operations.
              </p>
              <p className="text-muted mb-0">
                Key projects I’ve delivered:
                <ul className="mb-0">
                  <li>📚 Book Store OTEL App with Docker Compose & full observability stack</li>
                  <li>☁ AWS Infrastructure Automation using Terraform (Custom VPC, EC2 Load Balancer)</li>
                  <li>📊 System Monitoring using Node Exporter, Prometheus & Grafana</li>
                  <li>🌐 Apache Web Server Deployment using Jenkins Pipeline & Ansible</li>
                </ul>
                My goal is to continuously innovate in cloud-native and DevOps practices, delivering high-performance and cost-efficient solutions for modern businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
