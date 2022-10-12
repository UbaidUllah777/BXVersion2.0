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

const clickedService = sessionStorage.getItem("serviceId");

const allServices = [
  //Mobile Application Development
  {
    id: "idServMobApp",
    serviceHeading: "Mobile Application Development",

    SrvTag1: "Android Apps",
    SrvTag1Para:
      "BX Technologies robust, scalable and dynamic Mobile Apps using different frameworks, which not only fulfill your business requirement; but also strictly follow Google rules, regulations, guidelines, and industrial standards.",

    SrvTag2: "IoS Apps",
    SrvTag2Para:
      "We develop mobile apps targeting the IoS platform using swift and objective-C programming languages to cater to the demands of customers and provide them with a seamless experience with apple products.",

    SrvTag3: "Cross Platform Apps",
    SrvTag3Para:
      "Due to the availability of multiple platforms, we leverage our experience to deliver top niche cross-platform solutions to support native apps on various platforms using HTML, JavaScript and react native framework.",

    SrvTag4: "Flutter App Development",

    SrvTag4Para:
      "We develop user-friendly, interactive, robust, and scalable native Apple and Android Mobile applications across different industry domains.",
  },

  //Web Applicaton Development
  {
    id: "idServWevApp",
    serviceHeading: "Web Applicaton Development",

    SrvTag1: "Custom Web Application Development",

    SrvTag1Para:
      "We at BX technologies brainstorm, ideate, plan and execute custom-based web app solutions tailored to our client-specific needs. Our emphasis on quality, security, and scalability during the development process results in enhanced user experience and satisfaction. ",

    SrvTag2: "Progressive Web Development",

    SrvTag2Para:
      "Our customer-centric approach enables us to implement cross-platform progressive web applications. Thanks to the pool of our experienced web developers that ensure better performance and user experience in PWAs development.",

    SrvTag3: "Full Stack Web Development",

    SrvTag3Para:
      "Our Web application Development team consist of developers and designers having experience in a diverse range of web development technologies. This enables them to carry out full-stack development on MERN, MEAN, PHP, .Net and JavaScript.",

    SrvTag4: "Web Application Upgradation",

    SrvTag4Para:
      "Transitioning from a legacy system to the newest technology is always a nightmare for any organization or business. Thanks to the expertise of our development team. We have got you covered and can help in the smooth transition from a legacy system to a state-of-the-art system. ",
  },

  //Custom Software Development
  {
    id: "idServCustSwDev",
    serviceHeading: "Custom Software Development",

    SrvTag1: "Legacy Systems",
    SrvTag1Para:
      "To stay relevant and keep your presence in a competitive environment, you need to keep looking for innovation and updates in your system. BX technology remodels and develops a legacy system to meet the varying demands of modern-day businesses.  ",

    SrvTag2: "API Development And Software Integration",
    SrvTag2Para:
      "Modern-day software products and solutions are highly efficient and robust; This robustness and efficiency come due to the use of  API,s. Our dedicated teams of software engineers have in-depth experience in API-driven development and API integration.",

    SrvTag3: "SaaS Applications Development",
    SrvTag3Para:
      "The software as a Service model for the development and deployment of software applications is widely in use worldwide; due to several reasons, such as less downtime and infrastructure costs, etc. We use our knowledge and experience to develop SaaS solutions within the deadline and budget. ",

    SrvTag4: "Enterprise Applications",
    SrvTag4Para:
      "Bx technology offers highly customized and optimized software solutions to its clients to improve the core functions and operations of the business. Employing enterprise-level applications like ERP, SCM, and third-party software integrations in core processes leads to greater level optimization. ",
  },

  //Software Quality Assurance
  {
    id: "idServSwQA",
    serviceHeading: "Software Quality Assurance",

    SrvTag1: "Automated Testing",
    SrvTag1Para:
      "Fast track and automate your application testing process by applying test automation techniques. Our team of experienced test engineers collaborates and works with you to integrate the QA process into your product development. ",

    SrvTag2: "Security Testing",
    SrvTag2Para:
      "To safeguard your application from exposure to any malicious activity, our Test engineers have the expertise to perform security-related testing such as vulnerability risks assessment and penetration tests.",

    SrvTag3: "Manual Testing ",
    SrvTag3Para:
      "To make sure that we test an application end-to-end. Our QA engineers conduct testing of the software application; while, keeping in mind the end-user perspective to unhide any potential errors.",

    SrvTag4: "API Testing ",
    SrvTag4Para:
      "API is considered a critical component of any software solution. To ensure that the API functions as expected. Extensive tests of the API are done manually and automatically to ensure its functionality, performance, and security. ",
  },

  //UX/UI Design
  {
    id: "idServUxUiDesign",
    serviceHeading: "UX/UI Design",

    SrvTag1: "Web UI/UX Design",
    SrvTag1Para:
      "An end-user can lose track of their activity while navigating an application having a complex user interface & user experience. Enhance and simplify your web application user interface and user experience with the talented designers of Bx technologies. So let us know to craft your web application user interface to relay an extraordinary user experience to your end-users.",

    SrvTag2: "Mobile App UI/UX Design",
    SrvTag2Para:
      "Delivering an outstanding user interface and user experience on mobile apps requires lots of effort and testing due to the availability of varying device types and screen sizes. Our team of UI & UX specialists looks deep into minute details to improve and enhance the mobile application user experience for major platforms like iOS and Android UI guidelines. ",

    SrvTag3: "HCI Design",
    SrvTag3Para:
      "Are you experiencing difficulty; while realizing a new product user interface and its impact on performance and user interaction? Our expert designer works tirelessly by conducting different experiments and applying visual designs to deliver designs that reflect a positive effect on end-users from an HCI perspective.",

    SrvTag4: "UX consulting",
    SrvTag4Para:
      "Are you searching for a dedicated team of expert software product designers and HCI consultants? So let us know; we guide our clients in developing their product's user experience designs. Our team follows a systematic and structured approach to suggest and devise the best possible UX design according to your product need and requirements.",
  },

  //Blockchain Development
  {
    id: "idServBlockchain",
    serviceHeading: "Blockchain Development",

    SrvTag1: "Decentralized Finance Apps",
    SrvTag1Para:
      "Since the inception of blockchain technology and its applications have revolutionized several industry domains, the most disruptive implication of this technology is visible in the financial technology domain. We help businesses to develop their blockchain technology-based applications to compete,  survive and lead the market.",

    SrvTag2: "Smart Contracts",
    SrvTag2Para:
      "Smart contracts is another term incepted after the introduction of blockchain technology; Smart contract allows users to execute agreements and contracts without involving any third party or mediator. We help clients to implement and deploy their custom & tailored solutions based on blockchain technology applications.",

    SrvTag3: "Online Marketplaces",
    SrvTag3Para:
      "Our blockchain technology developers & engineers make use of their technical and domain knowledge to plan, implement and deploy secure, reliable, and trustworthy online marketplace solutions based on blockchain technology. Online marketplace solutions are crafted with extra care while keeping transactional integrity and specific client requirements in front.  ",

    SrvTag4: "Supply Chain Management",
    SrvTag4Para:
      "The Supply chain process is not straightforward as assumed by an ordinary person. There are lots of moving parts that need to keep in control to achieve the desired result and transparency. Our talented bunch of developers offers promising opportunities for our clients to enhance their supply chain system by developing blockchain-based solutions.",
  },

  //Cloud App Management
  {
    id: "idServCloudAppMng",
    serviceHeading: "Cloud App Management",

    SrvTag1: "Cloud App Deployment",
    SrvTag1Para:
      "To offer high-performing, maintainable, and reasonably priced application deployment and management, we plan, develop, and deploy your application in the cloud using a variety of cloud services, deployment models and robust continuous integration and continuous deployment (CI/CD) pipelines, including 24/7 maintenance.",

    SrvTag2: "Data Warehouse Migration",
    SrvTag2Para:
      "We plan, create, and migrate your Data Warehouse using cloud services and serverless execute, transform and load (ETL) methods.  With the Cloud deployment, the operating costs of a Data warehouse can be reduced significantly, Which results in improved Data Warehouse performance and operations. ",

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
    serviceHeading: "Data Analytics & BI",

    SrvTag1: "Artificial Intelligence",
    SrvTag1Para:
      "Are you planning to deploy and integrate an AI-based system to boost your business operations? Avial our professional and domain knowledge expert developers to develop and implement artificial intelligence solutions for your business and keep yourself ahead of others in the competition. ",

    SrvTag2: "Machine Learning",
    SrvTag2Para:
      "At Bx technologies, we use state-of-the-art tools and frameworks to develop machine learning-based solutions that are robust, scalable, and resilient. We closely collaborate with clients to implement and deploy your next machine learning solution to keep you ahead of the competition.",

    SrvTag3: "Business Intelligence",
    SrvTag3Para:
      "Data is the twenty-first-century oil; hire our BI experts to work on your business intelligence project. We are capable of working with your precious data to process, extract hidden patterns, and transform your raw data into actionable intelligence using business intelligence tools and technologies. ",

    SrvTag4: "Data Analytics",
    SrvTag4Para:
      "Are you in Search of a dedicated and outstanding data analytics team for your data analysis project? Contact Us; our team of talented Data analysts incorporates the latest tools and techniques to dig deep into your critical business data to identify and extract hidden insights vital for the sustainability and growth of your business.",
  },

  //Technology Consultancy
  {
    id: "idServTechConsultacy",
    serviceHeading: "Technology Consultancy",

    SrvTag1: "Technology Consulting",
    SrvTag1Para:
      "Our team of software and technology consultants provides support and advice to clients on several issues and problems. We help clients to develop and implement the latest technology solutions such as machine learning & AI, cloud computing, telecommunication & infotainment system testing, blockchain, and cyber security. ",

    SrvTag2: "Digital Strategy Consulting",
    SrvTag2Para:
      "To enable conventional businesses to turn their losses and inefficiencies into profits and high performance in terms of effectiveness. Our team of digital technology specialists ideates, plan and execute digital strategies that achieve multi-dimensional results such as more agility and exponential growth in revenues.",

    SrvTag3: "Solutions Consulting",
    SrvTag3Para:
      "Are you facing difficulties in integrating a new system or optimizing your existing system? We are here to help you to develop complex and critical solutions that are important to your business's core processes. We advise our clients on different aspects of digital solutions implementation and decision-making. ",

    SrvTag4: "Software Support Services",
    SrvTag4Para:
      "To ensure the smooth operations and functioning of your business-critical systems on a 24/7 basis. Our team of support engineers is eager to help you develop processes and controls that are reliable and trustworthy, which results in improved performance and less frequent system outages.",
  },

  //Software Project Managements
  {
    id: "idServSwProjManag",
    serviceHeading: "Software Project Managements",

    SrvTag1: "Realistic Estimation of Product Development",
    SrvTag1Para:
      "Managing a software development project sometimes turns into a nightmare for organizations. If this is the same case with you, hire our team of professional and experienced project managers and scrum masters to build and develop your project management pipelines and process that ensures the seamless development of a complex software system.",

    SrvTag2: "Software Development Life Cycle Planning",
    SrvTag2Para:
      "Our team of project & product management practitioners at BX technologies provides an end-to-end software development management process for clients to plan, develop and execute their software projects efficiently. We provide project and product management services to manage start-ups, SMEs, and enterprise-level software application development projects.",

    SrvTag3: "Remote Software Project Management",
    SrvTag3Para:
      "Collaboration, feedback, and teamwork are the main reasons behind a successful project implementation. Bx technologies' software project management team offers its services to carry out remote project management activities for clients. Jira, Asana, and other Project management tools are employed to meet client business goals and requirements.",

    SrvTag4: "Software Quality Assurance",
    SrvTag4Para:
      "Do you want to work with outstanding and talented quality assurance and testing experts to make your product error-free to provide a sleek and innovative user experience? So let us Work on your product quality to meet the software quality standards and criteria.",
  },

  //Cyber Security & Pentesting
  {
    id: "idServCyberSecPenTest",
    serviceHeading: "Cyber Security & Pentesting",

    SrvTag1: "Web Application Security",
    SrvTag1Para:
      "Our team of cyber security specialists leverages their skills and experience to minimize the risks and vulnerabilities in your application. Penetration tests are carried out in accordance with cyber security standards and OWASP v4 guidelines. ",

    SrvTag2: "Internal/External Network Penetration Testing",
    SrvTag2Para:
      "Safeguard your critical network and IT infrastructure by employing BX technologies penetration testing. We offer a diverse range of solutions for network security by inducting efficient tools for managing your security operation center (SOC).",

    SrvTag3: "Phishing Simulation Service",
    SrvTag3Para:
      "One of the most pressing issues that businesses often come across on their IT infrastructure is spam and phishing email campaigns. We help you in avoiding dangerous phishing campaigns directed at your application. Our team of experts overcomes these issues using dynamic simulation services.",

    SrvTag4: "Vulnerability Assessment",
    SrvTag4Para:
      "Our cyber security specialists dig deep into your application architecture & code to identify risks, vulnerabilities, and loopholes using vulnerability assessment approaches. Moreover, our cyber security not only identifies risks & threats but develops efficient solutions to eliminate these vulnerabilities hampering your application performance.",
  },
];

for (const singleService of allServices) {
  if (singleService.id === clickedService) {
    ElserviceDetailHeading.textContent = `${singleService.serviceHeading}`;
    ElidServiceDetailName.textContent = `${singleService.serviceHeading}`;

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
