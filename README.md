# sms-management

#Project Overview
This project is a web-based dashboard for dynamically managing and monitoring an SMS delivery system. It enables users to control SMS programs running on a Linux server, track SMS performance metrics in real-time, and receive alerts for critical issues. The application is designed for scalability, allowing the management of numerous country-operator pairs with priority settings and dynamic configurations.

#Features
Process Management: Start, stop, or restart SMS programs handling different country-operator pairs.
Real-Time Metrics: Track metrics like SMS sent, success rates, and error rates across all programs.
Country-Operator Management: Easily add, update, remove, and prioritize country-operator pairs.
Alerts & Notifications: Automatic alerts via Telegram for critical drops in success rate or program failures.
User Authentication: Secured access with JWT-based authentication.
Monitoring and Analytics: Integrated with Prometheus and Grafana for data visualization and trend analysis.]

#Technology Stack
Frontend: ReactJS, Axios, and Chart.js for data visualization.
Backend: Node.js, Express.js for API development.
Database: MongoDB (Atlas) for program configurations, and MySQL for storing SMS metrics.
Monitoring and Alerts: Prometheus for data collection, Grafana for visualization, and Telegram bots for notifications.
Containerization: Docker support for easy deployment.

Setup Guide

#Prerequisites
Node.js and npm installed locally.
Access to MySQL and MongoDB Atlas databases.
A Telegram bot token for notifications.
Optional: Prometheus and Grafana for advanced monitoring.

#Project Setup Steps
Clone and Install: Clone the repository and install dependencies.
Environment Configuration: Set up environment variables for MongoDB URI, MySQL connection details, JWT secret, and Telegram bot token.
Database Setup: Initialize the MySQL and MongoDB databases.
Run the Application: Start both backend and frontend servers.
Monitoring and Alerts: Configure Prometheus and Grafana for real-time tracking.

#Usage
Dashboard: View SMS metrics and manage country-operator configurations.
Program Controls: Control the SMS programs and view session statuses.
Alerts: Receive notifications for critical metrics like low success rates and program crashes.
Country-Operator Management: Update the list of country-operator pairs in real time.
Contributing
