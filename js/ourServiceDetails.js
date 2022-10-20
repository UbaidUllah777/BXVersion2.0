const ElserviceDetailHeading = document.getElementById("serviceDetailHeading");
const ElidServiceDetailName = document.getElementById("idServiceDetailName");
const ElidSrvTag1 = document.getElementById("idSrvTag1");
const ElidSrvTag1Para = document.getElementById("idSrvTag1Para");
const ElidSrvTag2 = document.getElementById("idSrvTag2");
const ElidSrvTag2Para = document.getElementById("idSrvTag2Para");
const ElidSrvTag3 = document.getElementById("idSrvTag3");
const ElidSrvTag3Para = document.getElementById("idSrvTag3Para");
const ElidSrvTag4 = document.getElementById("idSrvTag4");
const ElidSrvTag4Para = document.getElementById("idSrvTag4Para");
const ElidserviceLongHeading = document.getElementById("idserviceLongHeading");
const ElidServiceLongParagraph = document.getElementById(
  "idServiceLongParagraph"
);
const Elgridcontainer = document.querySelector(".grid-container");
const ElidServiceStactHeading = document.getElementById(
  "idServiceStactHeading"
);
const ELidServiceStackToolsDescp = document.getElementById(
  "idServiceStackToolsDescp"
);
const clickedService = sessionStorage.getItem("serviceId");
const ElidOurTechStackFor = document.getElementById("idOurTechStackFor");

const allServices = [
  //Mobile Application Development
  {
    id: "idServMobApp",
    serviceName: "Mobile Application Development",
    bannerH1: "Trusted Mobile Application Development Services",
    serviceLongDesc:
      "Adopt a modern and state-of-the-art approach for your next mobile application development project with BX Technologies. A top-rated software development firm where the focus is on the multi-dimensional aspects of your project idea. We believe in and deliver a scalable, interactive, high-performance, and fully functional mobile application to our clients across the globe. Bx technologies have the expertise to undertake any project wither, developing an application from scratch or maintaining or improving new features in an existing mobile application. We are experts in ios, Android, cross-platform, and native mobile application development. We have expertise and experience on multiple technology stacks, development tools, and frameworks to implement your digital solution according to your business needs. Our development team would love to hear from you and work on turning your ideas into reality. ",
    serviceHeading:
      "Innovative Mobile Application Development Services that Meet User Expectations",

    SrvTag1: "Android Apps",
    SrvTag1Para:
      "We develop robust, scalable, and dynamic Android Apps using different tools and frameworks, which not only fulfill your business requirement; but strictly adhere to Google guidelines and regulations.",

    SrvTag2: "IoS Apps",
    SrvTag2Para:
      "We develop Apps targeting the iOS platform using swift and objective-C programming languages,  which provide a seamless user experience on Apple devices.",

    SrvTag3: "Cross Platform Apps",
    SrvTag3Para:
      "Due to the availability of multiple platforms, we leverage our experience to deliver top niche cross-platform applications using HTML, JavaScript and react native framework.",

    SrvTag4: "Flutter App Development",

    SrvTag4Para:
      "We develop user-friendly, interactive, and scalable native Apple and Android Mobile applications across different industry domains.",
  },

  //Web Applicaton Development
  {
    id: "idServWevApp",
    serviceName: "Web Applicaton Development",
    bannerH1: "Web Application Development Services",
    serviceLongDesc:
      "Experience a state-of-the-art and structured approach for your Web application development project with BX Technologies. A top-rated software development firm where the focus is on the multi-dimensional aspects of your project idea. We believe in and deliver scalable, interactive, high-performance, and functional web applications to our clients across the globe. We use different web development programming languages, tools, and frameworks according to the project and business case requirements. Our developers are experienced and proficient in MERN, MEAN, JavaScript, .Net, PHP, RubyonRails, and many other web development technology stacks. We have developed, implemented, and optimized web applications for clients from diverse business domains. We always welcome challenging projects from clients, whether; legacy systems or the development of enterprise-level web applications from scratch.",
    serviceHeading:
      "Full-Stack Web Development Services that Deliver High Performance, Scalability, and Reliability",

    SrvTag1: "Custom Web Application Development",

    SrvTag1Para:
      "We brainstorm, ideate, and execute custom-based web applications tailored to our clients-specific needs. Our emphasis on code quality and security during the development process results in enhanced user experience and satisfaction. ",

    SrvTag2: "Progressive Web Development",

    SrvTag2Para:
      "Our customer-centric approach enables us to develop cross-platform PWA,s. Thanks to the pool of our experienced developers that ensure better performance and user experience in PWAs development.",

    SrvTag3: "Full Stack Web Development",

    SrvTag3Para:
      "Our Web application Development team consist of developers and designers having experience in a diverse range of web development technologies. This enables them to carry out full-stack development on MERN, MEAN, PHP, .Net and JavaScript.",

    SrvTag4: "Web App Upgradation & Optimization",

    SrvTag4Para:
      "Transitioning from a legacy system to the newest technology is always a nightmare for any business. We have got you covered and can help in the smooth transition from a legacy system to a state-of-the-art system. ",
  },

  //Custom Software Development
  {
    id: "idServCustSwDev",
    serviceName: "Custom Software Development",
    bannerH1: "On-Demand Custom Software Development Services",
    serviceLongDesc:
      "We plan, code, test and deploy scalable and custom software solutions for start-ups, small and medium-sized businesses, and enterprise-level applications to empower them to unleash the potential of digital transformation. Our developers and software engineers leverage agile practices to develop innovative & powerful web applications, high-level mobile applications, and any other custom applications to meet the specified requirements and market needs. So, Hire us for your digital transformation adventure; we will make it a smooth ride for you. One of the most visible advantages of a custom solution is that it eliminates any further investments in the shape of commercial-of-the-shelf products. So let us know to plan and develop your custom software solution to achieve exponential growth and attain operational excellence by unleashing the potential of the custom software solutions. ",
    serviceHeading:
      "Custom Software Development Services that Takes Care of your Digital Transformation Needs",

    SrvTag1: "Legacy Systems Upgradation",
    SrvTag1Para:
      "To stay relevant and keep your presence in a competitive environment, you need to keep looking for innovation and updates in your system. BX technology remodels and develops a legacy system to meet the varying demands of modern-day businesses.  ",

    SrvTag2: "API Development & Integration",
    SrvTag2Para:
      "Modern-day software solutions are highly efficient and robust; This efficiency comes due to API. Our dedicated team of software engineers has in-depth experience in API-driven development and API integration.",

    SrvTag3: "SaaS Applications Development",
    SrvTag3Para:
      "Software as a Service(SaaS) applications is widely used worldwide due to several benefits, such as less downtime, reduced infrastructure costs, etc. We use our knowledge and experience to develop SaaS solutions within the deadline and budget. ",

    SrvTag4: "Enterprise Level Applications",
    SrvTag4Para:
      " We offer highly customized software solutions to clients to improve the core functions of their businesses. Employing applications like ERP, SCM, and third-party software integrations in core processes leads to greater level optimization. ",
  },

  //Software Quality Assurance
  {
    id: "idServSwQA",
    serviceName: "Software Quality Assurance",
    bannerH1: "Software Testing and Quality Assurance Services",
    serviceLongDesc:
      "BX Technologies provides custom and tailored software quality assurance services to develop and deploy high-quality and efficient software systems. Our test engineers and managers always look for options and solutions to deliver the best quality software to you and your end users. Our testing process is multi-dimensional, where end-to-end testing is performed on your product; while keeping in mind the rules and regulations of international testing leaders like ISTQB and ISO. Thanks to the diverse skill set of our test engineer, your software is tested for different testing purposes while employing manual, automated, and DevOps strategies. We offer end-to-end software testing and quality assurance managed services that include automation testing, functional, usability, performance, compatibility, load, sanity, and smoke testing with a focus on high-quality, bug-free, and reliable software applications.",
    serviceHeading:
      "Oustanding Software Quality and User Experience Through Testing and Quality Assurance ",

    SrvTag1: "Automated Testing",
    SrvTag1Para:
      "Fast-track your application testing process by applying test automation techniques. Our experienced test engineers collaborate with clients to integrate the AQA process into your product development. ",

    SrvTag2: "Security Testing",
    SrvTag2Para:
      "To safeguard your application from exposure to any malicious activity, our Test engineers have the expertise to perform security-related testing of software applications.",

    SrvTag3: "Manual Testing ",
    SrvTag3Para:
      "To make sure that we test an application end-to-end. Our QA engineers conduct testing of applications; by keeping in mind the end-user perspective to unhide any potential errors.",

    SrvTag4: "API Testing ",
    SrvTag4Para:
      "API is considered a critical component of any software solution. To ensure that the API functions as expected. Extensive testing is done to ensure API functionality, performance, and security. ",
  },

  //UX/UI Design
  {
    id: "idServUxUiDesign",
    serviceName: "UX/UI Design",
    bannerH1: "Top Class UI-UX Design Services",
    serviceLongDesc:
      "Increase future product adoption by creating an intuitive user experience design. Invest in user interface design for higher conversion rates and increased revenue. Boost customer retention by developing fit-for-purpose UI/UX design. Delivering an outstanding software application user interface and user experience on mobile apps requires lots of effort and testing due to the availability of varying device types and screen sizes. So let us know to craft your web application user interface to relay an extraordinary user experience to your end-users.",
    serviceHeading:
      "Achieve Aspiring Design for your Product With our Product Design Titans",

    SrvTag1: "Web UI-UX Design",
    SrvTag1Para:
      "An end-user can lose track of their activities while navigating an application with complex UI-UX. Enhance and simplify your web application UI with our talented designers.",

    SrvTag2: "Mobile App UI-UX Design",
    SrvTag2Para:
      "Our team of UI & UX specialists looks deep into minute details to improve and enhance your mobile application user experience for major platforms like iOS and Android UI guidelines. ",

    SrvTag3: "HCI Design",
    SrvTag3Para:
      "Our expert designers work tirelessly by conducting experiments and applying visual designs to deliver designs that ensure persuasive engineering from an HCI perspective.",

    SrvTag4: "UX-UI consulting",
    SrvTag4Para:
      " We guide our clients in developing their product's user experience designs. Our team follows a systematic and structured approach to suggest and devise the best possible UX design according to your product need and requirements.",
  },

  //Blockchain Development
  {
    id: "idServBlockchain",
    serviceName: "Blockchain Development",
    bannerH1: "Grow Your Business with our Blockchain Technology Services",
    serviceLongDesc:
      "Decentralized and distributed application development is becoming an absolute requirement for businesses due to their varying need of business requirements. We plan, execute and deploy decentralized solutions for clients powered by blockchain technology to ensure security, high efficiency, transparency, and robustness. Since the inception of blockchain technology and its applications have revolutionized several industry domains, the most disruptive implication of this technology is visible in the financial technology domain. Our blockchain technology developers & engineers make use of their technical and domain knowledge to plan, implement and deploy secure, reliable, and trustworthy digital solutions based on blockchain technology.",
    serviceHeading: "End-to-end Blockchain Application Development Services",

    SrvTag1: "Decentralized Finance Apps",
    SrvTag1Para:
      " We help our clients to develop their blockchain technology-based applications to compete,  survive and lead the competitive financial markets.",

    SrvTag2: "Smart Contracts",
    SrvTag2Para:
      "We offer support and development to our clients to implement and deploy their custom and tailored smart contract solutions based on blockchain technology applications.",

    SrvTag3: "Online Marketplaces",
    SrvTag3Para:
      "We develop and deploy online marketplace solutions that are crafted with extra care while keeping transactional integrity and specific client requirements in front. ",

    SrvTag4: "Supply Chain Management",
    SrvTag4Para:
      "Our talented bunch of developers offers promising opportunities for our clients to enhance their supply chain system by developing blockchain-based solutions.",
  },

  //Cloud App Management
  {
    id: "idServCloudAppMng",
    serviceName: "Cloud App Management",
    bannerH1: "Cloud App Development and Management Services",
    serviceLongDesc:
      "Cloud services offer greater flexibility and managed services to achieve better results in terms of cost and application availability.  Our team of professional developers and engineers is capable of undertaking a wide range of cloud-related activities and tasks.",
    serviceHeading:
      "Unleash and Utilize the Power of Cloud Computing to Maximum",

    SrvTag1: "Cloud App Deployment",
    SrvTag1Para:
      " We develop and deploy your application in the cloud using a variety of cloud services, deployment models, robust CI/CD pipelines, and  24/7 maintenance.",

    SrvTag2: "Data Warehouse Migration",
    SrvTag2Para:
      "We migrate your Data Warehouse using cloud services and serverless ETL methods.  With the Cloud deployment, the operating costs of a Data warehouse can be reduced significantly, Which results in improved Data Warehouse performance and operations. ",

    SrvTag3: "Cloud App Deployment",
    SrvTag3Para:
      "To offer high-performing, maintainable, and reasonably priced application deployment and management, we plan, develop, and deploy your application in the cloud using a variety of cloud services, deployment models and robust continuous integration and continuous deployment (CI/CD) pipelines, including 24/7 maintenance.",

    SrvTag4: "Data Warehouse Migration",
    SrvTag4Para:
      "We plan, create, and migrate your Data Warehouse using cloud services and serverless execute, transform and load (ETL) methods.  With the Cloud deployment, the operating costs of a Data warehouse can be reduced significantly, Which results in improved Data Warehouse performance and operations. ",
  },

  //Data Analytics & BI
  {
    id: "idServDataAnlytics",
    serviceName: "Data Analytics & BI",
    bannerH1: " Data Analytics and Business Intelligence Services",
    serviceLongDesc:
      "Are you unaware of the extraordinary potential of your business data? Work with our team of talented Data scientists & data analysts to explore and extract hidden patterns and insights from your Data. We employ the latest tools and techniques to find meaningful and actionable intelligence in your business data that are vital for revenue generation and operational efficiency of your business. At Bx technologies, we use state-of-the-art tools and frameworks to develop machine learning-based solutions that are robust, scalable, and resilient. ",
    serviceHeading:
      "Explore Untapped Potential of Your Business with Our Data Science Solutions",

    SrvTag1: "Artificial Intelligence",
    SrvTag1Para:
      "Avial our professional and domain knowledge experts to implement artificial intelligence-based solutions for your business and keep yourself ahead of others in the competition. ",

    SrvTag2: "Machine Learning",
    SrvTag2Para:
      "We closely collaborate with clients to implement and deploy their machine-learning solutions to keep them ahead of competitors.",

    SrvTag3: "Business Intelligence",
    SrvTag3Para:
      "We are capable of working with your precious data to process, extract hidden patterns, and transform your raw data into actionable intelligence using business intelligence tools and technologies. ",

    SrvTag4: "Data Analytics",
    SrvTag4Para:
      "Our team of talented Data analysts incorporates the latest tools and techniques to dig deep into your critical business data to identify and extract hidden insights vital for the sustainability and growth of your business.",
  },

  //Technology Consultancy
  {
    id: "idServTechConsultacy",
    serviceName: "Technology Consultancy",
    bannerH1: "Technology Consultancy Services",
    serviceLongDesc:
      "Our Team of IT systems domain knowledge experts and consultants leverages their experiences and knowledge to assist you in overcoming challenges and bottlenecks in your digital transformation or carrying out your existing digital operations. We navigate clients on IT system-related issues and difficulties to eliminate loopholes and gray areas to boost business performance and functions. To enable conventional businesses to turn their losses and inefficiencies into profits and high performance in terms of effectiveness. Our team of software and technology consultants provides support and advice to clients on several issues and problems.",
    serviceHeading:
      "Explore Solutions and Guidelines for your Challenging IT Bottlenecks with Bx Technologies ",

    SrvTag1: "Technology Consulting",
    SrvTag1Para:
      "We help clients to develop and implement the latest technology solutions such as ML & AI, cloud computing, telecommunication & infotainment system testing, blockchain, and cyber security.",

    SrvTag2: "Digital Strategy Consulting",
    SrvTag2Para:
      " Our team of digital technology specialists ideates, plan and execute digital strategies that achieve multi-dimensional results in terms of agility and exponential growth in revenues.",

    SrvTag3: "Solutions Consulting",
    SrvTag3Para:
      "We are here to help you to develop complex and critical solutions that are important to your business's core processes. We advise our clients on different aspects of digital solutions implementation and decision-making.",

    SrvTag4: "IT Support Services",
    SrvTag4Para:
      "Our professional IT support engineers are eager to help you develop processes and controls that are reliable and trustworthy, which results in improved performance and less frequent system outages. ",
  },

  //Software Project Managements
  {
    id: "idServSwProjManag",
    serviceName: "Software Project Managements",
    bannerH1: "Software Project Management Services",
    serviceLongDesc:
      "Execute your software project with our top-class team of project managers, product owners, and Scrum masters. We plan end-to-end project activities to reduce project risks and uncertainties in the software development life cycle. Streamline and organize workflows and project milestones, sprints, and deliverables to meet your project deadline with quality and within budget. Managing a software development project sometimes turns into a nightmare for organizations. If this is the same case with you, Our team of project & product management practitioners at BX technologies provides an end-to-end software development management process for clients to plan, develop and execute their software projects efficiently.",
    serviceHeading:
      " Bx Technologies Software Project Management Services One Click Away from You",

    SrvTag1: "Realistic Development Cost Estimation",
    SrvTag1Para:
      "Hire our professional and experienced project managers to build your project management pipelines and process that ensures the seamless development of a complex software system.",

    SrvTag2: "Software Development Life Cycle Planning",
    SrvTag2Para:
      "We provide software project and product management services to manage start-ups, SMEs, and enterprise-level software application development projects.",

    SrvTag3: "Remote Software Project Management",
    SrvTag3Para:
      " Bx technologies' SPM team offers their services to carry out remote project management activities for clients. Jira, Asana, and other Project management tools are employed to meet client project goals and requirements.",

    SrvTag4: "Software Quality Assurance",
    SrvTag4Para:
      "Do you want to work with outstanding and talented quality assurance and testing experts to make your product error-free to provide a sleek and innovative user experience? So let us Work on your product quality to meet the software quality standards and criteria.",
  },

  //Cyber Security & Pentesting
  {
    id: "idServCyberSecPenTest",
    serviceName: "Cyber Security & Pentesting",
    bannerH1: "Cyber Security and Penetration Testing Services",
    serviceLongDesc:
      "We utilize the latest tools and techniques to ensure your application is secure and resilient against cyber-attacks and malicious activities. Let us identify and fix your system vulnerabilities before any hacker exploits them. Our cyber security specialists dig deep into your application architecture & code to identify risks, vulnerabilities, and loopholes using vulnerability assessment approaches. ",
    serviceHeading:
      "Secure, Test, and Verify Your Business Critical System  With BX Technologies Pentesting Services",

    SrvTag1: "Web Application Security",
    SrvTag1Para:
      "Our team of cyber security specialists leverages their skills to minimize the risks and vulnerabilities in your application. Penetration tests are carried out by following cyber security standards.",

    SrvTag2: "Internal/External Network Pentesting",
    SrvTag2Para:
      "Safeguard your critical network and IT infrastructure by employing BX technologies penetration testing. We offer a diverse range of solutions for network security by inducting efficient tools for managing your security operation center (SOC).",

    SrvTag3: "Phishing Simulation Service",
    SrvTag3Para:
      "We help you in avoiding dangerous phishing campaigns directed at your application. Our team of experts overcomes these issues using dynamic simulation services.",

    SrvTag4: "Vulnerability Assessment",
    SrvTag4Para:
      "Our cyber security services not only identify risks & threats but develop efficient solutions to eliminate these vulnerabilities hampering your application performance.",
  },
];

for (const singleService of allServices) {
  if (singleService.id === clickedService) {
    ElserviceDetailHeading.textContent = `${singleService.bannerH1}`;
    ElidServiceDetailName.textContent = `${singleService.serviceName}`;
    ElidserviceLongHeading.textContent = `${singleService.serviceHeading}`;
    ElidServiceLongParagraph.textContent = `${singleService.serviceLongDesc}`;

    ElidSrvTag1.textContent = `${singleService.SrvTag1}`;
    ElidSrvTag1Para.textContent = `${singleService.SrvTag1Para}`;

    ElidSrvTag2.textContent = `${singleService.SrvTag2}`;
    ElidSrvTag2Para.textContent = `${singleService.SrvTag2Para}`;

    ElidSrvTag3.textContent = `${singleService.SrvTag3}`;
    ElidSrvTag3Para.textContent = `${singleService.SrvTag3Para}`;

    ElidSrvTag4.textContent = `${singleService.SrvTag4}`;
    ElidSrvTag4Para.textContent = `${singleService.SrvTag4Para}`;
  }
}

//Service Stact Data:Start
const allStackServices = [
  //Web Applications
  {
    id: "idServWevApp",
    serviceHeading: "Web Applications",

    servicesDetails:
      "Bx Technologies web application development team has exceptional experience in wide range of web development technologies and frameworks. we are capable of delivering robust, scalable and user friendly web applications. ",
    servicesImages: [
      {
        image: "img/Techstackimg/angularjs.png",
        serviceName: "angularjs",
      },
      {
        image: "img/Techstackimg/bootstrap.png",
        serviceName: "bootstrap",
      },
      {
        image: "img/Techstackimg/codeigniter.png",
        serviceName: "codeigniter",
      },
      {
        image: "img/Techstackimg/javascript.png",
        serviceName: "javascript",
      },
      {
        image: "img/Techstackimg/python.png",
        serviceName: "python",
      },
      {
        image: "img/Techstackimg/rails.png",
        serviceName: "rails",
      },
      {
        image: "img/Techstackimg/vuejs.png",
        serviceName: "vuejs",
      },
      {
        image: "img/Techstackimg/wordpress.png",
        serviceName: "wordpress",
      },
      {
        image: "img/Techstackimg/nodejs.png",
        serviceName: "nodejs",
      },
      {
        image: "img/Techstackimg/jquery.png",
        serviceName: "jquery",
      },
      {
        image: "img/Techstackimg/html5.png",
        serviceName: "html5",
      },
      {
        image: "img/Techstackimg/css3.png",
        serviceName: "css3",
      },
      {
        image: "img/Techstackimg/react.png",
        serviceName: "reactJs",
      },
      {
        image: "img/Techstackimg/php.png",
        serviceName: "PhP",
      },
      {
        image: "img/Techstackimg/ruby.png",
        serviceName: "ruby",
      },
      {
        image: "img/Techstackimg/csharp.png",
        serviceName: "C#",
      },
      {
        image: "img/Techstackimg/express.png",
        serviceName: "expressJs",
      },
      {
        image: "img/Techstackimg/mongodb.png",
        serviceName: "mongodb",
      },
      {
        image: "img/Techstackimg/mysql.png",
        serviceName: "mysql",
      },
      {
        image: "img/Techstackimg/couchdb.png",
        serviceName: "couchdb",
      },
      {
        image: "img/Techstackimg/oracle.png",
        serviceName: "oracle",
      },
      {
        image: "img/Techstackimg/postgresql.png",
        serviceName: "postgresql",
      },
      {
        image: "img/Techstackimg/sql-server.png",
        serviceName: "SQL server",
      },
      {
        image: "img/Techstackimg/mariadb-icon.png",
        serviceName: "mariadb",
      },
    ],
  },

  // custom software development techstack

  {
    id: "idServCustSwDev",
    serviceHeading: "Custom Software Development",

    servicesDetails:
      "Bx Technologies  development team has exceptional experience in wide range of web development technologies and frameworks. we are capable of delivering robust, scalable and user friendly custom software applications that are specific to your business requirements. ",
    servicesImages: [
      {
        image: "img/Techstackimg/angularjs.png",
        serviceName: "angularjs",
      },
      {
        image: "img/Techstackimg/bootstrap.png",
        serviceName: "bootstrap",
      },
      {
        image: "img/Techstackimg/codeigniter.png",
        serviceName: "codeigniter",
      },
      {
        image: "img/Techstackimg/javascript.png",
        serviceName: "javascript",
      },
      {
        image: "img/Techstackimg/python.png",
        serviceName: "python",
      },
      {
        image: "img/Techstackimg/rails.png",
        serviceName: "rails",
      },
      {
        image: "img/Techstackimg/vuejs.png",
        serviceName: "vuejs",
      },
      {
        image: "img/Techstackimg/wordpress.png",
        serviceName: "wordpress",
      },
      {
        image: "img/Techstackimg/nodejs.png",
        serviceName: "nodejs",
      },
      {
        image: "img/Techstackimg/jquery.png",
        serviceName: "jquery",
      },
      {
        image: "img/Techstackimg/html5.png",
        serviceName: "html5",
      },
      {
        image: "img/Techstackimg/css3.png",
        serviceName: "css3",
      },
      {
        image: "img/Techstackimg/react.png",
        serviceName: "reactJs",
      },
      {
        image: "img/Techstackimg/php.png",
        serviceName: "PhP",
      },
      {
        image: "img/Techstackimg/ruby.png",
        serviceName: "ruby",
      },
      {
        image: "img/Techstackimg/csharp.png",
        serviceName: "C#",
      },
      {
        image: "img/Techstackimg/express.png",
        serviceName: "expressJs",
      },
      {
        image: "img/Techstackimg/mongodb.png",
        serviceName: "mongodb",
      },
      {
        image: "img/Techstackimg/mysql.png",
        serviceName: "mysql",
      },
      {
        image: "img/Techstackimg/couchdb.png",
        serviceName: "couchdb",
      },
      {
        image: "img/Techstackimg/oracle.png",
        serviceName: "oracle",
      },
      {
        image: "img/Techstackimg/postgresql.png",
        serviceName: "postgresql",
      },
      {
        image: "img/Techstackimg/sql-server.png",
        serviceName: "SQL server",
      },
      {
        image: "img/Techstackimg/mariadb-icon.png",
        serviceName: "mariadb",
      },
    ],
  },

  //Mobile Applications
  {
    id: "idServMobApp",
    serviceHeading: "Mobile Applications",

    servicesDetails:
      " Our mobile application development engineers and developers always welcome complex and technical mobile application development tasks. Our mobile development team uses a different types of mobile application technologies and frameworks to develop native, hybrid, and cross-platform mobile applications.",
    servicesImages: [
      {
        image: "img/Techstackimg/android.png",
        serviceName: "android",
      },
      {
        image: "img/Techstackimg/react.png",
        serviceName: "reactJs",
      },
      {
        image: "img/Techstackimg/nodejs.png",
        serviceName: "nodejs",
      },
      {
        image: "img/Techstackimg/java.png",
        serviceName: "java",
      },
      {
        image: "img/Techstackimg/javascript.png",
        serviceName: "javascript",
      },
      {
        image: "img/Techstackimg/swift.png",
        serviceName: "swift",
      },
      {
        image: "img/Techstackimg/html5.png",
        serviceName: "HTML5",
      },
      {
        image: "img/Techstackimg/css3.png",
        serviceName: "CSS3",
      },
      {
        image: "img/Techstackimg/flutter.png",
        serviceName: "flutter",
      },
      {
        image: "img/Techstackimg/angularjs.png",
        serviceName: "angular",
      },
      {
        image: "img/Techstackimg/vuejs.png",
        serviceName: "VueJs",
      },
      {
        image: "img/Techstackimg/logo-spring.png",
        serviceName: "spring boot",
      },
      {
        image: "img/Techstackimg/logo-nuxt.png",
        serviceName: "nuxt",
      },
      {
        image: "img/Techstackimg/express.png",
        serviceName: "aexpressJs",
      },
      {
        image: "img/Techstackimg/mongodb.png",
        serviceName: "mongodb",
      },
      {
        image: "img/Techstackimg/mysql-icon.png",
        serviceName: "mySQL",
      },
      {
        image: "img/Techstackimg/sql-server.png",
        serviceName: "SQL server",
      },
      {
        image: "img/Techstackimg/couchdb.png",
        serviceName: "couchdb",
      },
    ],
  },
  //DATABASES
  // {
  //   id: "btDatabases",
  //   serviceHeading: "Databases",

  //   servicesDetails:
  //     "We use and employ a diverse range of Databases ( SQL and NoSQL) for handling the most precious data for business value behind the scenes.",
  //   servicesImages: [
  //     {
  //       image: "img/Techstackimg/mongodb.png",
  //       serviceName: "mongodb",
  //     },
  //     {
  //       image: "img/Techstackimg/mysql.png",
  //       serviceName: "mysql",
  //     },
  //     {
  //       image: "img/Techstackimg/couchdb.png",
  //       serviceName: "couchdb",
  //     },
  //     {
  //       image: "img/Techstackimg/oracle.png",
  //       serviceName: "oracle",
  //     },
  //     {
  //       image: "img/Techstackimg/postgresql.png",
  //       serviceName: "postgresql",
  //     },
  //     {
  //       image: "img/Techstackimg/sql-server.png",
  //       serviceName: "SQL server",
  //     },
  //     {
  //       image: "img/Techstackimg/cassandra.png",
  //       serviceName: "cassandraDB",
  //     },
  //     {
  //       image: "img/Techstackimg/mariadb-icon.png",
  //       serviceName: "mariadb",
  //     },
  //   ],
  // },

  //SW TESTING
  {
    id: "idServSwQA",
    serviceHeading: "Software Testing",

    servicesDetails:
      "To ensure the quality and build confidence on any software solution we develop,Bx technologies uses variety of testing tools and framework for automated and manuel testing.  ",
    servicesImages: [
      {
        image: "img/Techstackimg/cucumber.png",
        serviceName: "cucumber",
      },
      {
        image: "img/Techstackimg/mocha.png",
        serviceName: "mocha",
      },
      {
        image: "img/Techstackimg/crashlytics.png",
        serviceName: "crashlytics",
      },
      {
        image: "img/Techstackimg/appium.png",
        serviceName: "appium",
      },
      {
        image: "img/Techstackimg/xraytest.png",
        serviceName: "xray",
      },
      {
        image: "img/Techstackimg/Fabrictest.png",
        serviceName: "Fabrictest",
      },
      {
        image: "img/Techstackimg/Junit.png",
        serviceName: "Junit",
      },
      {
        image: "img/Techstackimg/postman.png",
        serviceName: "postman",
      },
      {
        image: "img/Techstackimg/selenium.png",
        serviceName: "selenium",
      },
      {
        image: "img/Techstackimg/iTools.png",
        serviceName: "iTools",
      },
      {
        image: "img/Techstackimg/saucelabs.png",
        serviceName: "saucelabs",
      },
      {
        image: "img/Techstackimg/jmeter.png",
        serviceName: "Jmeter",
      },
      {
        image: "img/Techstackimg/TestRail.png",
        serviceName: "TestRail",
      },
      {
        image: "img/Techstackimg/testNG.png",
        serviceName: "testNG",
      },
    ],
  },
  //Big Data and data analytics
  {
    id: "idServDataAnlytics",
    serviceHeading: "Big Data and Data Analytics",

    servicesDetails:
      "Data is sometimes referred to as twenty first century oil in the digital world. To manage, process, transform and obtain actionable information and insights. We use several tools and technology to expose hidden patterns in the data. ",
    servicesImages: [
      {
        image: "img/Techstackimg/spark.png",
        serviceName: "spark",
      },
      {
        image: "img/Techstackimg/cassandra.png",
        serviceName: "cassandra",
      },
      {
        image: "img/Techstackimg/apache.png",
        serviceName: "apache",
      },
      {
        image: "img/Techstackimg/apachehadoop.png",
        serviceName: "apachehadoop",
      },
      {
        image: "img/Techstackimg/mongodb.png",
        serviceName: "mongodb",
      },
    ],
  },

  //IOTs
  // {
  //   id: "btnIOTs",
  //   serviceHeading: "Internet Of Things",

  //   servicesDetails:
  //     "The Internet of things is normally referred to as IoT. We use a wide range of tools and technologies to implement IoT-based applications. IoT is already transforming many industries and business domains since its inception.",
  //   servicesImages: [
  //     { image: "assets/images/MbA1redux.svg", serviceName: "redux" },
  //     { image: "assets/images/MbA2Swift_logo_color.svg", serviceName: "Swift" },
  //     { image: "assets/images/MbA3lockup.svg", serviceName: "lockup" },
  //     {
  //       image: "assets/images/mbA4nativescript.svg",
  //       serviceName: "ativescript",
  //     },
  //     { image: "assets/images/Mb5flutter-logo.svg", serviceName: "flutter" },
  //     { image: "assets/images/mbA6download.svg", serviceName: "React" },
  //   ],
  // },

  // blockchain

  {
    id: "idServBlockchain",
    serviceHeading: "Blockchain",

    servicesDetails:
      "To develop secure, robust, interoperable and scalable Blockchain technology based applications, we incorporate tools and frameworks didicated to Blockchain technology.  ",
    servicesImages: [
      {
        image: "img/Techstackimg/truffle.png",
        serviceName: "truffle",
      },
      {
        image: "img/Techstackimg/solidity.png",
        serviceName: "solidity",
      },
      {
        image: "img/Techstackimg/java.png",
        serviceName: "Java",
      },
      {
        image: "img/Techstackimg/python.png",
        serviceName: "python",
      },
      {
        image: "img/Techstackimg/react.png",
        serviceName: "react",
      },
      {
        image: "img/Techstackimg/Rust.png",
        serviceName: "Rust",
      },
    ],
  },

  //cloud
  {
    id: "idServCloudAppMng",
    serviceHeading: "Cloud App Management",

    servicesDetails:
      "Application deployment and managment on the Cloud platforms and Cloud Server requires the use of specilized softwares and tools. in order to manage and maintian our CI/CD pipelines we makes use of several didicated software solutions that helps in seemless and smooth CI/CD operations.",
    servicesImages: [
      { image: "img/Techstackimg/docker.png", serviceName: "docker" },
      { image: "img/Techstackimg/debian.png", serviceName: "debian" },
      {
        image: "img/Techstackimg/jenkins.png",
        serviceName: "jenkins",
      },
      { image: "img/Techstackimg/maven.png", serviceName: "maven" },
      { image: "img/Techstackimg/devops.png", serviceName: "devops" },
      { image: "img/Techstackimg/travis.png", serviceName: "travis" },
      { image: "img/Techstackimg/ubuntu.png", serviceName: "ubuntu" },
    ],
  },

  // software project managment tools techstack
  {
    id: "idServSwProjManag",
    serviceHeading: "Software Project Management",

    servicesDetails:
      "In todays complex software development environments, virson control is the most fundamental and necessary tools to keep track of changes mades to codebase by the developers. at BX technologies we use multiple version control systems acording to the client and project needs",
    servicesImages: [
      { image: "img/Techstackimg/git.png", serviceName: "git" },
      { image: "img/Techstackimg/github.png", serviceName: "github" },
      {
        image: "img/Techstackimg/bitbucket.png",
        serviceName: "bitbucket",
      },
      {
        image: "img/Techstackimg/slack-logo.png",
        serviceName: "slack",
      },
      {
        image: "img/Techstackimg/trello.png",
        serviceName: "trello",
      },
      {
        image: "img/Techstackimg/asana.png",
        serviceName: "asana",
      },
      {
        image: "img/Techstackimg/jira.png",
        serviceName: "jira",
      },
      {
        image: "img/Techstackimg/project.png",
        serviceName: "MS project",
      },
      // { image: "img/Techstackimg/ubuntu.png", serviceName: "ubuntu" },
    ],
  },

  // ux-ui Design
  {
    id: "idServUxUiDesign",
    serviceHeading: "UI and UX Designing",

    servicesDetails:
      "We are passionate about your product idea, our top-class designers use several design tools and technology to develop interactive designs for clients to meet their expectations and user experience. ",
    servicesImages: [
      { image: "img/Techstackimg/photoshop.png", serviceName: "photoshop" },
      { image: "img/Techstackimg/xd.png", serviceName: "adobe XD" },
      {
        image: "img/Techstackimg/illustrator.png",
        serviceName: "adobe illustrator",
      },
      {
        image: "img/Techstackimg/figma.png",
        serviceName: "figma",
      },
      { image: "img/Techstackimg/sketching.png", serviceName: "sketch" },
      // { image: "img/Techstackimg/ubuntu.png", serviceName: "ubuntu" },
    ],
  },

  // cyber secuirty tools and tech stack
  {
    id: "idServCyberSecPenTest",
    serviceHeading: "CYBER SECURITY AND PENTESTING",

    servicesDetails:
      "We use the latest tools and technologies to test and secure your software applications from unwanted and malicious activities. ",
    servicesImages: [
      {
        image: "img/Techstackimg/BurpSuit.png",
        serviceName: "BurpSuit",
      },

      {
        image: "img/Techstackimg/NMAP.png",
        serviceName: "NMAP",
      },

      {
        image: "img/Techstackimg/kaliLinux.png",
        serviceName: "kali Linux",
      },
      {
        image: "img/Techstackimg/wireShark.png",
        serviceName: "wireShark",
      },
      {
        image: "img/Techstackimg/cyber4.png",
        serviceName: "cyber4",
      },
      // { image: "img/Techstackimg/ubuntu.png", serviceName: "ubuntu" },
    ],
  },
];
//Service Stact Data :END

const FnRenderServiceStact = (clickedService) => {
  for (const singleService of allStackServices) {
    if (singleService.id === clickedService) {
      ElidServiceStactHeading.innerHTML = `${singleService.serviceHeading}`;
      for (singlestact of singleService.servicesImages) {
        Elgridcontainer.innerHTML += `<div
        class="grid-item process-step col-12 col-lg-4 mb-5 mb-lg-4 "
       
      >
        <div class="process-step-circle">
          <strong
            class="process-step-circle-content text-color-primary text-8"
            ><img src="${singlestact.image}" alt="" style = "width:50px; height:auto;"></strong
          >
        </div>
        <div class="process-step-content px-5">
          <h4
            class="text-color-dark font-weight-bold text-4 line-height-1 mb-3"
          >
            ${singlestact.serviceName}
          </h4>
        </div>
      </div>`;
      }

      ELidServiceStackToolsDescp.textContent = `${singleService.servicesDetails}`;
    }
  }
};
if (clickedService != "idServTechConsultacy") {
  FnRenderServiceStact(clickedService);
  ElidOurTechStackFor.style.display = `block`;
  ElidOurTechStackForHr.style.display = `block`;
}
const ElidOurTechStackForHr = document.getElementById("idOurTechStackForHr");
if (clickedService == "idServTechConsultacy") {
  ElidOurTechStackFor.style.display = `none`;
  ElidOurTechStackForHr.style.display = `none`;
}
