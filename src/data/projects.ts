import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  // 1. VIDENTI
  {
    id: "videnti",
    title: "VIDENTI",
    category: "Employee Management · Mobile App & Web Dashboard",
    description:
      "An integrated employee management system that streamlines attendance and workforce administration through facial recognition, location-based verification, and centralized management tools.",
    overview:
      "VIDENTI is an integrated employee management platform consisting of an Android application and a web-based administration dashboard. It combines facial recognition with multi-vector registration and liveness detection to support employee attendance verification. The system also provides location-aware attendance, employee management, leave workflows, payroll processing, and administrative reporting.",
    role: "Backend Developer",
    contribution:
      "Implemented backend support for the facial recognition-based attendance feature and tested a wide range of application features.",
    features: [
      "Facial recognition with multi-vector registration",
      "Liveness detection for attendance verification",
      "Location-aware employee check-in and check-out",
      "Employee attendance history and dashboard summaries",
      "Leave requests and management",
      "Payroll, bonuses, penalties, and reporting",
      "Android mobile application and web admin dashboard",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Go",
      "Gin",
      "GORM",
      "PostgreSQL",
      "Next.js",
      "React",
      "TypeScript",
    ],
    images: [
      "/images/projects/videnti/videnti-web.jpeg",
      "/images/projects/videnti/videnti-cover.jpeg",
      "/images/projects/videnti/videnti-attendance.jpeg",
    ],
    githubUrl:
      "https://github.com/oktovaaaaa/PA-2-Kelompok-2-Face-Recognition",
    status: "Completed",
    featured: true,
    published: true,
  },

  // 2. JAGA
  {
    id: "jaga",
    title: "JAGA",
    category: "Digital Safety · Web Platform",
    description:
      "A digital safety platform that helps users assess suspicious online loan applications, understand cybersecurity risks, and report potentially harmful applications or activities.",
    overview:
      "JAGA brings together an application safety checker, digital security education, a suspicious application reporting system, and an integrated assistance feature. Users can search for applications and review available indicators such as legality, data permissions, and potential risk signals before deciding whether to install or use them. The platform also encourages users to report suspicious applications and activities to support digital safety awareness.",
    role: "Frontend Developer",
    contribution:
      "Developed and implemented the website's frontend interfaces according to the initial project plan and design requirements.",
    features: [
      "Application name search and safety assessment",
      "Application legality and risk indicators",
      "Digital security education and resources",
      "Suspicious application and activity reporting",
      "Integrated JAGA assistance chatbot",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Vite",
      "React Router",
      "Lucide React",
    ],
    images: [
      "/images/projects/jaga-web/jaga-home.png",
      "/images/projects/jaga-web/jaga-check-app.png",
      "/images/projects/jaga-web/jaga-report.png",
    ],
    githubUrl: "https://github.com/ngii17/jaga",
    status: "Completed",
    featured: true,
    published: true,
  },

  // 3. PROJECT TOBA
  {
    id: "project-toba",
    title: "Project TOBA",
    category: "Educational Game · Mobile & Admin Platform",
    description:
      "An interactive Batak Toba cultural learning game combining exploration, quizzes, trivia, and multiplayer challenges with a web-based administration platform.",
    overview:
      "Project TOBA is an educational game developed using Unity to introduce Batak Toba cultural heritage through interactive digital learning. Players can explore cultural locations, discover local facts, complete quizzes and trivia, participate in real-time multiplayer battles, and track their achievements. A supporting web administration dashboard allows learning content, questions, players, and game settings to be managed through an integrated backend.",
    role: "Full-Stack & Mobile Developer",
    contribution:
      "Contributed to end-to-end development across backend services, the mobile application, and the web-based admin dashboard.",
    features: [
      "Player registration, authentication, and character selection",
      "Interactive exploration of Batak Toba cultural locations",
      "Cultural facts and location-based quizzes",
      "Trivia categories and question challenges",
      "Real-time multiplayer battle using WebSocket",
      "Leaderboard, achievements, badges, and weekly challenges",
      "Web-based administration dashboard",
    ],
    technologies: [
      "Unity 6 LTS",
      "C#",
      "Go",
      "Fiber",
      "GORM",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Vite",
      "WebSocket",
    ],
    images: ["", "", ""],
    githubUrl: "https://github.com/Brahmana01/PROJECT_TOBA",
    status: "In Progress",
    featured: true,
    published: true,
  },

  // 4. LINCOM
  {
    id: "lincom",
    title: "LINCOM",
    category: "Mobile Application · Laptop Repair Services",
    description:
      "A Flutter mobile application that allows customers to explore laptop repair services, submit service requests, upload payment proof, and monitor their order progress.",
    overview:
      "LINCOM is a mobile service-ordering application designed to simplify the customer journey for laptop repair services. Customers can register and sign in, browse service categories and service types, view popular services, submit repair orders with device and pickup details, monitor order progress, upload payment proof, and provide service reviews.",
    role: "Mobile Application Developer",
    contribution:
      "Built the Flutter mobile application by translating the project's initial plans into functional interfaces and features.",
    features: [
      "Customer registration and authentication",
      "Service category and service type browsing",
      "Popular service listings and promotional banners",
      "Laptop repair order creation and scheduling",
      "Order history and status tracking",
      "Payment proof submission",
      "Customer reviews with optional image uploads",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "HTTP",
      "Shared Preferences",
      "Image Picker",
      "Google Fonts",
      "Font Awesome",
    ],
    images: [
      "/images/projects/lincom/lincom-home.jpeg",
      "/images/projects/lincom/lincom-order.jpeg",
      "/images/projects/lincom/lincom-admin-dashboard.jpeg",
    ],
    githubUrl: "",
    status: "Completed",
    featured: false,
    published: true,
  },

  // 5. ALIN
  {
    id: "alin",
    title: "ALIN",
    category: "Educational Technology · Linear Algebra Platform",
    description:
      "A linear algebra learning platform combining a Flutter-based student application and a Laravel-based lecturer portal for digital learning, assessments, and progress management.",
    overview:
      "ALIN is a digital learning platform designed to support linear algebra education through an integrated student application and lecturer management portal. Students can complete placement assessments, access topic-based learning materials and mathematical formulas, take examinations, participate in discussion forums, and monitor their learning progress. Lecturers can manage learning topics, materials, quizzes, question banks, student information, and assessment results through the web-based administration system.",
    role: "QA / Tester",
    contribution:
      "Tested the application against its intended objectives and requirements, checking whether its features worked as expected.",
    features: [
      "Student authentication and placement assessment",
      "Topic-based learning materials and formula library",
      "Interactive assessments and examination activities",
      "Discussion forum and student interactions",
      "Learning analytics, leaderboard, and achievement badges",
      "Lecturer portal for content and assessment management",
      "Student progress and examination result monitoring",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "Dio",
      "Flutter Math Fork",
      "Laravel 12",
      "PHP",
      "Laravel Sanctum",
      "Livewire",
      "Vite",
      "Tailwind CSS",
    ],
    images: ["", "", ""],
    githubUrl: "https://github.com/bryansiagian/ALIN",
    status: "Completed",
    featured: false,
    published: true,
  },

  // 6. WEB D3TI
  {
    id: "web-d3ti",
    title: "Web D3TI",
    category: "Academic Information · Web Application",
    description:
      "A web-based information platform designed to centralize program information and support content administration for the D3 Information Technology study program.",
    overview:
      "Web D3TI is an integrated information platform that combines public-facing study program pages with an administrative system for organizing and publishing program-related information. The platform is designed to provide students, prospective students, and other stakeholders with a centralized source of academic and program information.",
    role: "Full-Stack Developer",
    contribution:
      "Handled end-to-end website development, covering frontend and backend implementation as well as the site's core functionality.",
    features: [
      "Centralized study program information website",
      "Public information and resource access",
      "Administrative content management",
    ],
    technologies: [],
    images: ["", "", ""],
    githubUrl: "",
    status: "Completed",
    featured: false,
    published: true,
  },
];
