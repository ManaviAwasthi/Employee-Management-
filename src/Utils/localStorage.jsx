
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumber": 5,
    "taskStats": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Prepare weekly report",
        "description": "Summarize activities and metrics for the week",
        "date": "2025-07-01",
        "category": "Reporting",
        "active": true,
        "new": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client follow-up",
        "description": "Call pending clients and update CRM",
        "date": "2025-07-02",
        "category": "Communication",
        "active": false,
        "new": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update website content",
        "description": "Revise outdated FAQ section",
        "date": "2025-06-28",
        "category": "Web",
        "active": false,
        "new": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Schedule team meeting",
        "description": "Coordinate with all departments",
        "date": "2025-06-30",
        "category": "Management",
        "active": false,
        "new": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Draft proposal for new client",
        "description": "Initial draft for partnership offer",
        "date": "2025-07-03",
        "category": "Business",
        "active": true,
        "new": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": 6,
    "taskStats": {
      "active": 2,
      "new": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Run code quality checks",
        "description": "Use linter and unit tests",
        "date": "2025-07-01",
        "category": "Development",
        "active": true,
        "new": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix login bug",
        "description": "Resolve issue with user sessions",
        "date": "2025-06-29",
        "category": "Bug Fix",
        "active": false,
        "new": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Deploy staging build",
        "description": "Push latest changes to staging",
        "date": "2025-07-02",
        "category": "Deployment",
        "active": true,
        "new": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code review for teammate",
        "description": "Review PR#2034",
        "date": "2025-06-30",
        "category": "Collaboration",
        "active": false,
        "new": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Document API endpoints",
        "description": "Update Swagger docs",
        "date": "2025-07-03",
        "category": "Documentation",
        "active": false,
        "new": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Setup CI/CD pipeline",
        "description": "Use GitHub Actions for auto-deploy",
        "date": "2025-07-03",
        "category": "DevOps",
        "active": false,
        "new": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Riya",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": 5,
    "taskStats": {
      "active": 1,
      "new": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Market research",
        "description": "Analyze competitor pricing models",
        "date": "2025-07-01",
        "category": "Marketing",
        "active": true,
        "new": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social media strategy",
        "description": "Plan July content calendar",
        "date": "2025-06-28",
        "category": "Social Media",
        "active": false,
        "new": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Design Instagram graphics",
        "description": "Create 3 story and 2 post templates",
        "date": "2025-07-02",
        "category": "Design",
        "active": false,
        "new": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Revise email campaign",
        "description": "Optimize CTA and subject lines",
        "date": "2025-06-30",
        "category": "Email",
        "active": false,
        "new": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Collect user feedback",
        "description": "Survey responses for new feature",
        "date": "2025-07-03",
        "category": "UX Research",
        "active": false,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Manas",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": 5,
    "taskStats": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Organize warehouse inventory",
        "description": "Label and re-arrange all SKUs",
        "date": "2025-07-01",
        "category": "Logistics",
        "active": true,
        "new": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Inspect incoming stock",
        "description": "Check quality of batch #2245",
        "date": "2025-06-29",
        "category": "Quality Control",
        "active": false,
        "new": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Update product catalog",
        "description": "Add SKUs to digital system",
        "date": "2025-07-02",
        "category": "Database",
        "active": true,
        "new": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "File shipping reports",
        "description": "Submit to manager by EOD",
        "date": "2025-06-30",
        "category": "Admin",
        "active": false,
        "new": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Coordinate with delivery partners",
        "description": "Verify dispatch routes",
        "date": "2025-07-03",
        "category": "Shipping",
        "active": false,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Dev",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": 5,
    "taskStats": {
      "active": 1,
      "new": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Finalize budget sheet",
        "description": "Add Q2 expenses and forecasts",
        "date": "2025-07-01",
        "category": "Finance",
        "active": true,
        "new": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare tax documents",
        "description": "Review forms for compliance",
        "date": "2025-06-28",
        "category": "Compliance",
        "active": false,
        "new": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Schedule audit meeting",
        "description": "Invite internal and external auditors",
        "date": "2025-07-02",
        "category": "Meetings",
        "active": false,
        "new": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Analyze revenue trends",
        "description": "Graph monthly cash flow",
        "date": "2025-06-30",
        "category": "Analytics",
        "active": false,
        "new": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Submit reimbursement claims",
        "description": "Get approval from finance lead",
        "date": "2025-07-03",
        "category": "HR",
        "active": false,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Neha",
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage= ()=> {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage= ()=> {
    const employees= JSON.parse(localStorage.getItem('employees'));
    const admin= JSON.parse(localStorage.getItem('admin'));

    return {employees,admin}
}
