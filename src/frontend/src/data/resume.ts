import type {
  Certification,
  ContactLink,
  Experience,
  Project,
  SkillCategory,
} from "../types/portfolio";

export const RESUME_URL = "/assets/Srinidhi_Kukutam_Resume.pdf";

export const skillCategories: SkillCategory[] = [
  {
    category: "Data Analytics",
    icon: "📊",
    skills: [
      "SQL",
      "Microsoft Excel (Advanced)",
      "Power BI",
      "Data Cleaning",
      "Data Validation",
      "Data Modeling",
      "KPI Analysis",
      "Dashboarding",
      "Business Reporting",
    ],
  },
  {
    category: "Programming",
    icon: "🐍",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Jupyter Notebook",
      "GitHub",
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "SQLite"],
  },
  {
    category: "Concepts & Methods",
    icon: "⚙️",
    skills: [
      "ETL Basics",
      "Data Pipelines",
      "Exploratory Data Analysis",
      "Business Metrics",
      "Trend Analysis",
      "PySpark",
    ],
  },
  {
    category: "Soft Skills",
    icon: "🎤",
    skills: [
      "Data Storytelling",
      "Stakeholder Communication",
      "Workshop Facilitation",
      "Problem Solving",
      "Leadership",
    ],
  },
];

export const featuredSkills = [
  {
    name: "Python",
    icon: "🐍",
    desc: "Pandas, NumPy, automation & data analysis pipelines",
    tags: ["#DataAnalytics", "#Programming"],
  },
  {
    name: "SQL",
    icon: "🗄️",
    desc: "Complex queries, data modeling, MySQL & SQLite",
    tags: ["#DataAnalytics", "#Databases"],
  },
  {
    name: "Power BI",
    icon: "📊",
    desc: "Interactive dashboards, KPI reporting, DAX formulas",
    tags: ["#DataAnalytics", "#Visualization"],
  },
  {
    name: "Excel (Advanced)",
    icon: "📋",
    desc: "Pivot tables, advanced functions, data validation",
    tags: ["#DataAnalytics", "#Reporting"],
  },
  {
    name: "ETL / PySpark",
    icon: "⚙️",
    desc: "Data ingestion, transformation, quality validation",
    tags: ["#DataEngineering", "#Pipelines"],
  },
  {
    name: "Data Storytelling",
    icon: "🎤",
    desc: "Translating complex insights for non-technical audiences",
    tags: ["#SoftSkills", "#Communication"],
  },
];

export const projects: Project[] = [
  {
    id: "etl-pipeline",
    title: "Automated Incremental ETL Pipeline",
    description:
      "Designed an incremental ETL pipeline for e-commerce sales data handling continuous data ingestion with automated quality validation, cleaning, and transformation into analysis-ready fact tables.",
    tech: ["Python", "SQL", "PySpark", "ETL"],
    highlights: [
      "Designing an incremental ETL pipeline for e-commerce sales data to handle continuous data ingestion",
      "Implementing data cleaning and validation checks (null checks, schema validation, duplicate handling)",
      "Transforming raw sales data into analysis-ready fact tables for reporting",
      "Using SQL and PySpark to perform aggregations and trend analysis",
    ],
    year: "2025",
  },
  {
    id: "mindscribe",
    title: "MindScribe — AI-Powered Journal Application",
    description:
      "A journaling application enabling users to record, organize, and reflect on daily thoughts with text analysis, AI-driven insights, consistency streaks, and an intuitive calendar view.",
    tech: ["Python", "SQLite", "NLP", "Data Handling"],
    highlights: [
      "Developed a journaling application allowing users to record, organize, and reflect on daily thoughts",
      "Processed text inputs for structured storage and retrieval of journal entries using NLP",
      "Implemented streaks for consistency, AI insights for motivation, and calendar view for enhanced UX",
    ],
    year: "2025",
  },
  {
    id: "asha-ai",
    title: "Asha AI — Student Assistant",
    description:
      "AI-based assistant supporting students with quizzes, learning, job search, and feedback. Features database-backed user interaction analysis and adaptive response improvement from interaction history.",
    tech: ["Python", "SQL", "Matplotlib", "NLP", "API"],
    highlights: [
      "Built an AI-based assistant for quizzes, learning paths, job search, and personalized feedback",
      "Designed a database to store user interactions and feedback for behavioral analysis",
      "Implemented quiz evaluation, feedback forms, and basic analytics dashboard",
      "Improved response quality based on interaction history and user behaviour patterns",
    ],
    year: "2024",
  },
];

export const experiences: Experience[] = [
  {
    role: "Google Student Campus Ambassador",
    organization: "Google",
    location: "Hyderabad, India",
    duration: "2024 – Present",
    type: "ambassador",
    highlights: [
      "Representing Google on campus, driving awareness of Google's developer tools, cloud technologies, and AI ecosystem",
      "Led workshops on data analytics, cloud computing (GCP), and AI/ML fundamentals — empowering fellow students with industry-relevant skills",
      "Built and engaged a growing community of aspiring developers and data professionals on campus",
      "Facilitated hands-on sessions on Google Workspace, Firebase, and data storytelling techniques",
    ],
  },
  {
    role: "Co-Founder & Workshop Leader",
    organization: "Dialogue Dynamics Club",
    location: "Hyderabad, India",
    duration: "2024 – Present",
    type: "leadership",
    highlights: [
      "Co-founded and scaled educational initiative designing curriculum for storytelling, presentation, body language, and technical communication",
      "Led interactive sessions on data storytelling and interview preparation, improving participant confidence scores by 45%",
      "Coordinated with multiple teams handling scheduling, logistics, and participant communication",
      "Created training materials bridging communication gaps between technical and non-technical audiences",
    ],
    achievements: [
      "45% participant confidence improvement",
      "Scaled across multiple cohorts",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    description:
      "Demonstrated proficiency in AI/ML fundamentals, cloud infrastructure, and enterprise AI solutions. Validated understanding of AI/ML fundamentals, data concepts, and enterprise AI use cases across Oracle Cloud services.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/srinidhikukutam",
    href: "https://linkedin.com/in/srinidhikukutam",
    icon: "linkedin",
  },
  {
    label: "Email",
    value: "kukutamsrinidhi@gmail.com",
    href: "mailto:kukutamsrinidhi@gmail.com",
    icon: "mail",
  },
  {
    label: "Phone",
    value: "+91 7842316396",
    href: "tel:+917842316396",
    icon: "phone",
  },
];
