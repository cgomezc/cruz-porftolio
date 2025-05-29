import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"


// English translations
const enTranslations = {
  name: {
    first: "Cruz Antonio",
    last: "Cárdenas Gómez",
  },
  roles: {
    dotnet: ".NET Developer",
    backend: "Backend Engineer",
    educator: "Code Educator",
  },
  description:
    "Specialized in building robust backend systems and APIs with .NET Core. Passionate about clean code, performance optimization, and teaching others.",
  buttons: {
    projects: "View Projects",
    contact: "Contact Me",
  },
  skills: {
    title: "Technical Skills",
  },
  mission: {
    title: "My Purpose",
    text: "I believe in turning ideas into impact—crafting technology that empowers, educates, and uplifts. As a Full Stack Developer, Christian, and advocate for children''s education tech, I build with purpose—where code meets compassion, and innovation serves the next generation. Let’s create a better future—one line of code at a time.",
    tagline: "Code with purpose. Build for impact..",
  },
  about: {
    title: "About Me",
    subtitle: "Backend Developer & Code Educator",
    bio: "I'm a passionate backend developer with over 10 years of experience specializing in .NET technologies. My expertise lies in building scalable, high-performance APIs and microservices that power modern web applications. I enjoy solving complex problems and optimizing database performance to create efficient systems.",
    bio2: "When I'm not coding, I share my knowledge as a code educator, helping others master the art of backend development. I believe in clean code, thorough testing, and continuous learning.",
    education: "Education",
    experience: "Experience",
    interests: "Interests",
    educationItems: [
      {
        degree: "Bachelor's in Telematics Engineering",
        school: "Univerisdad del Caribe",
        year: "2012"
      }
    ],
    experienceItems: [
      {
        position: "Full Stack Developer",
        company: "Freelance - Cancún Gurú",
        period: "2024 - Present",
        
      },
      {
        position: "Sr. Software Engineer",
        company: "Vanco Payments Solutions",
        period: "2018 - 2024",
      },
      {
        position: "Software Engineer",
        company: "Consultoria Dual",
        period: "2012 - 2018",
      },
    ],
    interestItems: ["Cloud Architecture", "Performance Optimization", "Scratch", "SQL", "Angular", "React", "Node.js", "Leadership", "Teaching"],
  },
  projects: {
    title: "Featured Projects",
    subtitle: "Some of my recent work",
    viewAll: "View All Projects",
    viewGithub: "View on GitHub",
    liveDemo: "Live Demo",
    items: [
      {
        title: "WebEye",
        description: "A collection of .NET controls for web applications with advanced UI capabilities.",
        tech: ["C#", ".NET", "UI Controls"],
        github: "https://github.com/cgomezc/WebEye",
      },
      {
        title: "EmailQueueApp",
        description: "Email queue application with background processing for high-volume email sending.",
        tech: ["C#", ".NET Core", "Message Queue"],
        github: "https://github.com/cgomezc/EmailQueueApp",
      },
      {
        title: "myPrayApp",
        description: "Prayer tracking application with user authentication and community features.",
        tech: ["TypeScript", "React", "Node.js"],
        github: "https://github.com/cgomezc/myPrayApp",
      },
      {
        title: "todoapi",
        description: "RESTful API for task management with comprehensive documentation.",
        tech: ["C#", "ASP.NET Core", "Swagger"],
        github: "https://github.com/cgomezc/todoapi",
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What people say about my work",
    items: [
      {
        quote:
          "Cruz developed a robust backend system that significantly improved our application's performance. His attention to detail and clean code practices are exceptional.",
        author: "Maria Rodriguez",
        position: "CTO",
        company: "TechSolutions Inc.",
      },
      {
        quote:
          "Working with Cruz was a great experience. His deep knowledge of .NET and database optimization helped us scale our platform to handle millions of users.",
        author: "John Smith",
        position: "Product Manager",
        company: "Enterprise Systems",
      },
      {
        quote:
          "As an educator, Cruz has the rare ability to explain complex backend concepts in a way that's easy to understand. His courses have helped our junior developers grow rapidly.",
        author: "Laura Chen",
        position: "HR Director",
        company: "Dev Academy",
      },
    ],
  },
}

// Spanish translations
const esTranslations = {
  name: {
    first: "Cruz Antonio",
    last: "Cárdenas Gómez",
  },
  roles: {
    dotnet: "Desarrollador .NET",
    backend: "Ingeniero Backend",
    educator: "Educador de Código",
  },
  description:
    "Especializado en construir sistemas backend robustos y APIs con .NET Core. Apasionado por el código limpio, la optimización de rendimiento y la enseñanza.",
  buttons: {
    projects: "Ver Proyectos",
    contact: "Contáctame",
  },
  skills: {
    title: "Habilidades Técnicas",
  },
  mission: {
    title: "Mi Propósito",
    text: "Creo en transformar ideas en impacto, creando tecnología que empodera, educa y eleva. Como Desarrollador Full Stack, seguidor de Cristo y defensor de la tecnología educativa para niños, construyo con propósito, donde el código se encuentra con la compasión y la innovación sirve a la próxima generación. Creamos un futuro mejor, una línea de código a la vez.",
    tagline: "Código con propósito. Construir para el impacto.",
  },
  about: {
    title: "Sobre Mí",
    subtitle: "Desarrollador Backend & Educador de Código",
    bio: "Soy un desarrollador backend apasionado con más de 10 años de experiencia especializado en tecnologías .NET. Mi experiencia radica en construir APIs escalables y de alto rendimiento y microservicios que impulsan aplicaciones web modernas. Disfruto resolviendo problemas complejos y optimizando el rendimiento de bases de datos para crear sistemas eficientes.",
    bio2: "Cuando no estoy programando, comparto mi conocimiento como educador de código, ayudando a otros a dominar el arte del desarrollo backend. Creo en el código limpio, las pruebas exhaustivas y el aprendizaje continuo.",
    education: "Educación",
    experience: "Experiencia",
    interests: "Intereses",
    educationItems: [
     
      {
        degree: "Ingeniería en Telemática",	
        school: "Universidad del Caribe",
        year: "2012",
      },
    ],
    experienceItems: [
      {
        position: "Full Stack Developer",
        company: "Freelance-  Cancún Gurú",
        period: "2024 - Presente",
      },
      {
        position: "Sr. Software Engineer",
        company: "Vanco payments solutions",
        period: "2018 - 2024",
      },
      {
        position: "Software Engineer",
        company: "Consultoria Dual",
        period: "2012 - 2018",
      },
    ],
    interestItems: ["Arquitectura Cloud", "Optimización de Rendimiento", "Scratch", "SQL", "Angular", "React", "Node.js", "Liderazgo", "Enseñanza"],
  },
  projects: {
    title: "Proyectos Destacados",
    subtitle: "Algunos de mis trabajos recientes",
    viewAll: "Ver Todos los Proyectos",
    viewGithub: "Ver en GitHub",
    liveDemo: "Demo en Vivo",
    items: [
      {
        title: "WebEye",
        description: "Una colección de controles .NET para aplicaciones web con capacidades avanzadas de UI.",
        tech: ["C#", ".NET", "Controles UI"],
        github: "https://github.com/cgomezc/WebEye",
      },
      {
        title: "EmailQueueApp",
        description:
          "Aplicación de cola de correos con procesamiento en segundo plano para envío de correos de alto volumen.",
        tech: ["C#", ".NET Core", "Cola de Mensajes"],
        github: "https://github.com/cgomezc/EmailQueueApp",
      },
      {
        title: "myPrayApp",
        description: "Aplicación de seguimiento de oraciones con autenticación de usuarios y funciones comunitarias.",
        tech: ["TypeScript", "React", "Node.js"],
        github: "https://github.com/cgomezc/myPrayApp",
      },
      {
        title: "todoapi",
        description: "API RESTful para gestión de tareas con documentación completa.",
        tech: ["C#", "ASP.NET Core", "Swagger"],
        github: "https://github.com/cgomezc/todoapi",
      },
    ],
  },
  testimonials: {
    title: "Testimonios",
    subtitle: "Lo que dicen sobre mi trabajo",
    items: [
      {
        quote:
          "Cruz desarrolló un sistema backend robusto que mejoró significativamente el rendimiento de nuestra aplicación. Su atención al detalle y prácticas de código limpio son excepcionales.",
        author: "María Rodríguez",
        position: "CTO",
        company: "TechSolutions Inc.",
      },
      {
        quote:
          "Trabajar con Cruz fue una gran experiencia. Su profundo conocimiento de .NET y optimización de bases de datos nos ayudó a escalar nuestra plataforma para manejar millones de usuarios.",
        author: "John Smith",
        position: "Product Manager",
        company: "Enterprise Systems",
      },
      {
        quote:
          "Como educador, Cruz tiene la rara habilidad de explicar conceptos complejos de backend de una manera fácil de entender. Sus cursos han ayudado a nuestros desarrolladores junior a crecer rápidamente.",
        author: "Laura Chen",
        position: "Directora de RRHH",
        company: "Dev Academy",
      },
    ],
  },
}

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    returnObjects: true, // Ensure this is set to true globally
    returnEmptyString: false,
    react: {
      useSuspense: false, // Disable suspense to avoid issues
    },
  })

export default i18n
