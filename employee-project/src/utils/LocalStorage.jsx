
  const employees =  [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Submit monthly report",
          "description": "Prepare and submit the department performance report.",
          "date": "2025-10-15",
          "category": "Reporting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Team meeting",
          "description": "Attend weekly progress meeting with the project team.",
          "date": "2025-10-18",
          "category": "Meetings",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update client database",
          "description": "Update the CRM with the latest client interaction data.",
          "date": "2025-10-20",
          "category": "Data Management",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Inventory check",
          "description": "Perform a complete stock check of warehouse materials.",
          "date": "2025-10-17",
          "category": "Inventory",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Safety audit",
          "description": "Assist with the monthly workplace safety inspection.",
          "date": "2025-10-19",
          "category": "Compliance",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Vendor follow-up",
          "description": "Contact vendors regarding delayed deliveries.",
          "date": "2025-10-22",
          "category": "Procurement",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Website bug fix",
          "description": "Resolve front-end form submission bug.",
          "date": "2025-10-14",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Code review",
          "description": "Review pull requests for the current sprint.",
          "date": "2025-10-15",
          "category": "Quality Assurance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Deploy update",
          "description": "Deploy version 2.3 of the internal tool.",
          "date": "2025-10-19",
          "category": "Deployment",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Marketing plan draft",
          "description": "Prepare initial draft for Q4 marketing plan.",
          "date": "2025-10-13",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Social media analysis",
          "description": "Analyze last month's engagement metrics.",
          "date": "2025-10-16",
          "category": "Analytics",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Coordinate campaign assets",
          "description": "Gather creatives for product launch campaign.",
          "date": "2025-10-20",
          "category": "Operations",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Customer feedback collection",
          "description": "Gather post-launch feedback from key customer groups.",
          "date": "2025-10-17",
          "category": "Customer Service",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Invoice verification",
          "description": "Check and confirm accuracy of received invoices.",
          "date": "2025-10-19",
          "category": "Finance",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Prepare training slides",
          "description": "Create slides for internal system training.",
          "date": "2025-10-21",
          "category": "Training",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]

  const admin =  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }

export const setLocalStorage = () =>{
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
 
  
}