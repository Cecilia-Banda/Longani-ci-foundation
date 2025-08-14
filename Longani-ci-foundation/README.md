# Longani-ci-foundation
DevOps foundation for the Longani Project


# Longani Hospital — Phase 1 (Project Inception, Planning & CI Foundation)

Author: Cecilia Banda  
Date: 2025-08-10

## Project Description

Longani Hospital Patient Data Filing System is a role-based web application designed to replace paper files, improving accessibility, data integrity, and role-level privacy for Admins, Nurses, Doctors, and Record Officers. This system aims to streamline patient data management with secure and efficient digital workflows.

## Technology Stack

- **Frontend:** React (Vite)  
- **Backend:** Node.js, Express  
- **Testing:** Jest + Supertest  
- **Continuous Integration (CI):** GitHub Actions  
- **Planned Future Enhancements:** Docker containerization, Terraform-based infrastructure provisioning, Azure deployment

## Folder Structure

/backend # Express API, tests, lint configuration
/frontend # React (Vite) frontend source code
/.github/workflows/ci.yml # GitHub Actions CI workflow
/docs # Documentation, architecture diagrams
README.md # Project overview and setup instructions

bash
Copy code

## Local Setup (Developer Instructions)

### Prerequisites

- Node.js v18 or higher
- npm (comes with Node.js)

### Backend Setup

```bash
cd backend
npm install
npm test       # Run unit tests to verify setup
npm start      # Start backend server on port 3000
Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev    
npm run build
Note: The frontend dev server proxies API calls to backend running on localhost:3000. For production, build frontend and serve from the same origin as backend.

Continuous Integration Pipeline
A GitHub Actions workflow (.github/workflows/ci.yml) runs automatically on Pull Requests to main branch. The pipeline performs the following:

Installs dependencies (npm ci) for backend and frontend

Runs linting for backend and frontend code

Runs backend unit tests (Jest + Supertest)

Builds frontend production assets (Vite)

Branch protection rules require:

Pull Requests for all changes to main

At least one reviewer's approval: To be Added soon

All CI checks to pass before merging

Project Board
   [Project Board](https://github.com/users/Cecilia-Banda/projects/1)

This board tracks all milestones and tasks for the course phases including:

Containerization

Infrastructure as Code (IaC)

Continuous Deployment (CD) Pipeline

What I Completed for Phase 1
Repository with main and develop branches

Branch protection enabled (PR + 1 reviewer + status checks)

Project board with epics & detailed tasks

Backend scaffold with unit tests (Jest + Supertest)

Frontend scaffold (React with Vite)

CI pipeline automating lint, test, and build steps on PRs

Documentation and architecture sketches under /docs

      **How to Reproduce the CI Locally**
Run the following commands to mimic the CI workflow steps locally:

Copy code
cd backend
npm ci
npm run lint
npm test

cd ../frontend
npm ci
npm run lint
npm run build

      Contact
Cecilia Banda — c.banda@alustudent.com