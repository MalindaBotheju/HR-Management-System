# ⚙️ HR Management System

<p align="center">
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot Badge" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL Badge" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Badge" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render Badge" />
</p>

A secure, full-stack Human Resources Management application featuring a decoupled React frontend and Spring Boot REST API backend. The system enables organizations to manage company structures by organizing departments and tracking employee information dynamically with database persistence.

<p align="center">
  <a href="https://hr-management-system-taupe.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/%E2%96%B2%20%F0%9F%9A%80%20VIEW%20LIVE%20DEMO-000000?style=for-the-badge" alt="View Live Demo Button" />
  </a>
</p>

---

## 🚀 Key Features

* **Role-Based Security:** Controlled dashboard access via authenticated user credentials.
* **Department Management:** Dynamic addition and tracking of corporate divisions.
* **Active Personnel Directory:** Comprehensive tracking of employee records containing full name, email address, job title, and linked department references.
* **Full CRUD Capabilities:** Interactive interface supporting data insertion, reads, inline edits, and deletions with confirmation guards.
* **Database Syncing:** Direct transactional connection to a cloud hosted managed PostgreSQL service.

---

## 🛠️ Technology Stack

| Layer | Technology | Hosting / Platform |
| :--- | :--- | :--- |
| **Frontend** | React (JavaScript / Tailwind CSS) | Vercel |
| **Backend** | Spring Boot (Java / Spring Security) | Render (Dockerized Container) |
| **Database** | PostgreSQL | Neon Cloud Database |

---

## 📊 Sample Dataset Guide

To populate the application environment for demonstration or testing, input the following configuration parameters sequentially (Departments must be instantiated prior to hiring personnel):

### 1. Corporate Departments
| Department Name | Description Summary |
| :--- | :--- |
| **Engineering** | Builds and maintains the company's software and technical systems. |
| **Human Resources** | Manages hiring, employee well-being, and company culture. |
| **Marketing** | Drives brand awareness and customer growth. |

### 2. Active Personnel
| First Name | Last Name | Email Address | Job Title | Linked Department |
| :--- | :--- | :--- | :--- | :--- |
| Jane | Smith | jsmith@company.com | Senior Developer | Engineering |
| Marcus | Johnson | mjohnson@company.com | Recruiter | Human Resources |
| Emily | Chen | echen@company.com | Marketing Manager | Marketing |

---

## 📷 Application Walkthrough

### 1. Secure Authentication Gate
Authorized administrative personnel gain entry using centralized, case-sensitive configuration credentials.
<p align="center">
  <img src="screenshots/login_section.png" alt="Login Portal Interface" width="40%">
</p>

---

### 2. Personnel Directory & Operations
The central control panel displays active workforce records with functional utilities for real-time adjustments.
<p align="center">
  <img src="screenshots/employees_page.png" alt="Staff Directory Management Grid" width="75%">
</p>

---

### 3. Record Modifications & Updates
Inline data modification masks safely process field alterations back to the persistent data store.
<p align="center">
  <img src="screenshots/update_details.png" alt="Employee Information Update Prompt" width="85%">
</p>

---

### 4. Safety Guard Rails (Deletion Audits)
Data integrity rules enforce an interactive modal warning checklist before permanently purging a database record.
<p align="center">
  <img src="screenshots/delete_popup.png" alt="Deletion Confirmation Guard Modal" width="85%">
</p>

---

### 5. Organizational Structure Setup
Dedicated division panels control the structural layout hierarchy of company components.
<p align="center">
  <img src="screenshots/departments_page.png" alt="Organization Departments Interface" width="85%">
</p>

---

## ⚙️ Development & Deployment Architecture

* **SPA Client Routing Routing:** Fixed with a dynamic `vercel.json` edge routing engine to route deep-linked page reloads safely back to index hooks, preventing standard client-side `404 Not Found` state degradation.
* **CORS Resource Management:** Hardened runtime environment with a explicit Spring Security Bean intercepting pre-flight requests to match targeted originating clients.
