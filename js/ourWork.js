//Vendor Section :Start
const ElAllProjectItemsContainer = document.getElementById(
  "ProjectItemsContainer"
);
//Vendor Section :ENDS
// variables section : Start
var clickedProject = [];

const SYSTEMS_ANALYSIS_DESIGN = "System Analysis & Design";
const USER_INTERFACE_DESIGN = "UI/UX Design";
const SOFTWRE_ENGINEERING = "Software Engineering";
const Web_DEVELOPMENT = "Web Development";
const CUSTOM_SOFTWAE_DEVELOPMENT = "Custom Software Development";
const CLOUD_DEPLOYMENT = " Deployment";
const DATA_ANALYSIS = "Data Analytics";
const SOFTWARE_TESTING = "QA & testing";
const QUALITY_ASSURENCE = "Quality Assurence";
const SEO = "Search Engine Optimization";
const PRODUCT_MANAGEMENT = "Project Management";
const TECHNOLOGY_CONSULTANCY = "Technology Consultancy";
const MOBILE_APP_DEVELOPMENT = "Mobile App Development";
const ECOMMERECE_INDUSTRY = "e-Commerece";
const SERVICES_INDUSTRY = "Services Industry";
const ELEARNING_INDUSTRY = "E-learning";
const HEALTH_CARE_INDUSTRY = "Health Care";
const CUSTOM_SOFTWARE_INDUSTRY = "Custom Software Development";
const TELECOMMUNICATION_IoTS = "IoT'S and Blockchain";
const WORDPRESS = "Word Press";
const JAVASCRIPT = "Java Script";
const MY_SQL = "MySQL";
const BOOTSTRAP = "Bootstrap";
const REACT = "React";
const REACT_NATIVE = "React Native";
const VUEJS = "vue Js";
const MONGODB = "MongoDB";
const CODEIGNITER = "Codenigiter";
const RUBY_ON_RIALS = "Ruby on Rails";
const JAVA = "Java";
const CSHARP = "C#";
const HTML = "HTML";
const CSS = "CSS";
const DOT_NET_FRAMEWORK = ".Net Framework";
const POSTMAN = "Postman";
const SELENIUM = "Selenium";
const PYTHON = "Python";
const DJANGO = "Django";
const MERERN_STACK = "Meren Stack";
const MEAN_STACK = "Mean Stack";

// variables section : Ends

// Elements from index: START

const ElindexOur1stProjectImg = document.getElementById(
  "indexOur1stProjectImg"
);
const ElindexOur1stProjectHeading = document.getElementById(
  "indexOur1stProjectHeading"
);
const ELindexOur1stProjectPara = document.getElementById(
  "indexOur1stProjectPara"
);

const ElindexOur2ndProjectImg = document.getElementById(
  "indexOur2ndProjectImg"
);
const ElindexOur2ndProjectHeading = document.getElementById(
  "indexOur2ndProjectHeading"
);
const ElindexOur2ndProjectPara = document.getElementById(
  "indexOur2ndProjectPara"
);

//Elements from index: END

//OUR PROJECTS DATA: START

const projectsByBxTech = [
  {
    id: "HashTagThaiMassage",
    projName: "HashTag Thai Massage",
    projCategory: "Web Application",
    Mainimage: "img/projectsImages/hastageImage1.png",
    projShortDescp:
      " Website for managing operations and bookings at hastage thai massage center Duisburg Germany.",
    projFullDescrp:
      "Hashtag Thai massage is well known massage center in Duisburg Germany. The client wanted to scale their business and to develop a website for showcasing their services to customers and to book orders oniline. BX technologies developed a simple and interactive website in order to slove the problem being face by the cleint",
    images: [
      {
        image: "img/projectsImages/hastageImage1.png",
      },
      {
        image: "img/projectsImages/hastageImage2.png",
      },
      {
        image: "img/projectsImages/hastageImage3.png",
      },
      {
        image: "img/projectsImages/hastageImage4.png",
      },
    ],
    servicesProvided: [
      { service: USER_INTERFACE_DESIGN },
      { service: SYSTEMS_ANALYSIS_DESIGN },
      { service: Web_DEVELOPMENT },
      { service: CLOUD_DEPLOYMENT },
      { service: SOFTWARE_TESTING },
    ],
    industryVertical: [
      {
        indusrty: ECOMMERECE_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: JAVASCRIPT },
      { technology: SELENIUM },
      { technology: WORDPRESS },
    ],
    clientName: "Hashtag Thai Massage",
    clientDesc:
      "Hashtag Thai Massage is popular Thai massage service providers based in duisburg Germany",
    ProjectDate: "01/March/2020",
    ProjectDuration: "3 Months",
    ProjectUrl: "https://hashtagthaimassage.com",
  },
  {
    id: "GardeningServices",
    projName: "Gardening Services",
    projCategory: "Web Application",
    Mainimage: "img/projectsImages/gardenImage1.png",
    projShortDescp:
      "Website for garden services and bookings in munster Germany",
    projFullDescrp:
      "The basic reason for the development of Web application for the Hausmeisterservice munsterland is to reach to its customers and generate more leads by online bookings",
    images: [
      {
        image: "img/projectsImages/gardenImage1.png",
      },
      {
        image: "img/projectsImages/gardenImage2.png",
      },
      {
        image: "img/projectsImages/gardenImage3.png",
      },
      {
        image: "img/projectsImages/gardenImage4.png",
      },
    ],
    servicesProvided: [
      { service: SYSTEMS_ANALYSIS_DESIGN },
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: CLOUD_DEPLOYMENT },
    ],
    industryVertical: [
      {
        indusrty: ECOMMERECE_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: JAVASCRIPT },
      { technology: SELENIUM },
    ],
    clientName: "Hausmeisterservice muensterland",
    clientDesc:
      "Hausmeisterservice muensterland is a garden maintainenece and caretaker service provider in munsterland Germany",
    ProjectDate: "01/March/2020",
    ProjectDuration: "3 Months",
    ProjectUrl: "https://hausmeisterservice-muensterland.de",
  },
  {
    id: "ILedScreens",
    projName: "ILed Screens",
    projCategory: "Web Application",
    Mainimage: "img/projectsImages/iledscreenImage1.png",
    projShortDescp:
      "website for the iledscreen bookings and showcasing LED screens products to customers ",
    projFullDescrp:
      "ILedScreen customer wanted to develope a Webapplication for schowcasing their products to customers around the world. BX technologies developed an interactive solution for the our Iled Screens customer, that has resulted in customer infulx and generation of more leads",
    images: [
      {
        image: "img/projectsImages/iledscreenImage1.png",
      },
      {
        image: "img/projectsImages/iledscreenImage.png",
      },
      {
        image: "img/projectsImages/iledscreenImage3.png",
      },
      {
        image: "img/projectsImages/iledscreenImage4.png",
      },
    ],
    servicesProvided: [
      { service: USER_INTERFACE_DESIGN },
      { service: Web_DEVELOPMENT },
      { service: SELENIUM },
      { service: PRODUCT_MANAGEMENT },
    ],
    industryVertical: [
      {
        indusrty: CUSTOM_SOFTWARE_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: REACT },
      { technology: MONGODB },
      { technology: JAVASCRIPT },
    ],
    clientName: "Iled Screens",
    clientDesc:
      "Iled Screen is an led screen manufacturer and supplier based in Shenzhen China",
    ProjectDate: "01/March/2020",
    ProjectDuration: "5 Months",
    ProjectUrl: "https://iledscreens.com",
  },
  {
    id: "helpwithoutbordersweb",
    projName: "Help Without Borders",
    projCategory: "Web Application",
    Mainimage: "img/projectsImages/helfeohenPprojectImage1.png",
    projShortDescp:
      "Website for the chairty organization name help without borders.",
    projFullDescrp:
      "Help without Borders or hilfeohnegrenzen is a charity organization working in different countries around the world to provide help and support to people in need. Help without Borders needed a website to showcase their work to global audience and contributors. BX technologies developed their website in order solve there problems and issues faced by the organization. ",
    images: [
      {
        image: "img/projectsImages/helfeohenPprojectImage1.png",
      },
      {
        image: "img/projectsImages/helfeohenPprojectImage2.png",
      },
      {
        image: "img/projectsImages/helfeohenPprojectImage3.png",
      },
      {
        image: "img/projectsImages/helfeohenPprojectImage4.png",
      },
    ],
    servicesProvided: [
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: USER_INTERFACE_DESIGN },
      { service: CLOUD_DEPLOYMENT },
      { service: PRODUCT_MANAGEMENT },
    ],
    industryVertical: [
      {
        indusrty: CUSTOM_SOFTWARE_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: SELENIUM },
      { technology: MY_SQL },
      { technology: JAVASCRIPT },
    ],
    clientName: "Help without Borders ",
    clientDesc:
      "Help without Borders or hilfeohnegrenzen is a charity organization",
    ProjectDate: "01/March/2020",
    ProjectDuration: "4 Months",
    ProjectUrl: "https://hilfeohnegrenzen.de/",
  },
  {
    id: "briantimetech",
    projName: "Braintime Professional Services website",
    projCategory: "Web Application",
    Mainimage: "img/projectsImages/brainTimeProjectImage1.png",
    projShortDescp:
      "Website for the Bahrain based Telecommunication service provider company",
    projFullDescrp:
      "BX technologies developed website for Bahrain based telecommunication and infotainment system service provider company. the basic functionlity of the website is to deficts the different services provided by the company to its customers ",
    images: [
      {
        image: "img/projectsImages/brainTimeProjectImage1.png",
      },
      {
        image: "img/projectsImages/brainTimeProjectImage2.png",
      },
      {
        image: "img/projectsImages/braintimeprojectimage3.png",
      },
      {
        image: "img/projectsImages/braintimeprojectimage4.png",
      },
    ],
    servicesProvided: [
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: USER_INTERFACE_DESIGN },
      { service: CLOUD_DEPLOYMENT },
    ],
    industryVertical: [
      {
        indusrty: "",
      },
    ],
    technologiesUsed: [{ technology: CUSTOM_SOFTWARE_INDUSTRY }],
    clientName: "Braintime Professional Services",
    clientDesc:
      "Braintime Professional Services  Bahrain based Telecommunication service provider company",
    ProjectDate: "01/March/2020",
    ProjectDuration: "3 Months",
    ProjectUrl: "https://braintime-tech.com/",
  },
  {
    id: "hydrosendingwebiste",
    projName: "HydroSensing Website",
    projCategory: "Web Application",
    Mainimage: "img/projectsImages/hydroSensingImage1.png",
    projShortDescp:
      "Website development and deployment for the China based environmental, water resoruces and geological engineering research and consultancy firm",
    projFullDescrp:
      "HydroSensing consultancy approached Bx technologies to develop a website for showcasing there business and application areas. the website provides information about the different research and development (R&D) areas where HydroSensing is actively involved",
    images: [
      {
        image: "img/projectsImages/hydroSensingImage1.png",
      },
      {
        image: "img/projectsImages/hydroSensingImage2.png",
      },
      {
        image: "img/projectsImages/hydroSensingImage3.png",
      },
      {
        image: "img/projectsImages/hydroSensingImage4.png",
      },
    ],
    servicesProvided: [
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: USER_INTERFACE_DESIGN },
      { service: CLOUD_DEPLOYMENT },
      { service: SOFTWRE_ENGINEERING },
    ],
    industryVertical: [
      {
        indusrty: CUSTOM_SOFTWARE_INDUSTRY,
      },
      {
        indusrty: SERVICES_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: WORDPRESS },
      { technology: MY_SQL },
      { technology: JAVASCRIPT },
      { technology: HTML },
    ],
    clientName: "HydroSensing",
    clientDesc:
      "HydroSensing is a China based environmental, water resoruces and geological engineering research and consultancy firm",
    ProjectDate: "01/March/2020",
    ProjectDuration: "2 Months",
    ProjectUrl: "https://hydrosensing4u.com",
  },
  {
    id: "jabtco",
    projName: "Jabtco ecommerce website",
    projCategory: "Web Application",
    Mainimage: "img/projectsImages/jabtcoimage2.png",
    projShortDescp:
      "Complete ecommerce solution for Jabtco chemicals manufacturing company based in Islambad, Pakistan",
    projFullDescrp:
      "Bx Technologies developed complete ecommerce solution for Jabtco chemical manufacturing and distribution company based in islamabad, pakistan. With the development and deployment of the website application, Jabtco experience an upward trend in the sales. The website enabled Jabtco to sell there products online. ",
    images: [
      {
        image: "img/projectsImages/jabtcoimage2.png",
      },
      {
        image: "img/projectsImages/jabtcoimage3.png",
      },
      {
        image: "img/projectsImages/jabtcoimage4.png",
      },
      {
        image: "img/projectsImages/jabtcoimage1.png",
      },
    ],
    servicesProvided: [
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: USER_INTERFACE_DESIGN },
      { service: PRODUCT_MANAGEMENT },
    ],
    industryVertical: [
      {
        indusrty: ECOMMERECE_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: SELENIUM },
      { technology: MY_SQL },
      { technology: JAVASCRIPT },
      { technology: HTML },
    ],
    clientName: "Jabtco",
    clientDesc:
      "Jabtco is a chemicals manufacturing company based in Islambad, Pakistan. the Company specialize in cleaning products and detergents",
    ProjectDate: "01/March/2020",
    ProjectDuration: "3 Months",
    ProjectUrl: "https://jabtco.com",
  },
  {
    id: "MaFaheem",
    projName: "Ma Faheem",
    projCategory: "Web Application",
    Mainimage: "img/projectsImages/mafaheemImage1.png",
    projShortDescp: "This is Short description of My 8th Project",
    projFullDescrp: "This is Full Description of my 8th Project",
    images: [
      {
        image: "img/projectsImages/mafaheemImage1.png",
      },
    ],
    servicesProvided: [
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: USER_INTERFACE_DESIGN },
      { service: PRODUCT_MANAGEMENT },
    ],
    industryVertical: [
      {
        indusrty: "",
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: SELENIUM },
      { technology: MY_SQL },
      { technology: JAVASCRIPT },
      { technology: HTML },
    ],
    clientName: "Hashtag",
    clientDesc: "This is Our 8th Client",
    ProjectDate: "01/March/2020",
    ProjectDuration: "2 Months",
    ProjectUrl: "google.com",
  },
];

//OUR PROJECTS DATA: END

//REDNERING PROJECTS : START
const FnRenderOurWork = () => {
  for (const singleProject of projectsByBxTech) {
    if (ElAllProjectItemsContainer) {
      ElAllProjectItemsContainer.innerHTML += `
      <div class="singleProjectContainer row align-items-center">
      <div class="col-md-5 col-lg-3 mb-4 mb-lg-0">
        <div class="bg-light custom-box-shadow-1 text-center py-5">
          <img 
            class="d-inline-block img-fluid py-5 my-5 ourPrjectImage"
            src="${singleProject.Mainimage}"
            alt="${singleProject.projName} Image"
           
          />
        </div>
      </div>
      <div class="col-md-7 col-lg-4 mb-4 mb-lg-0">
        <h2 class="text-color-primary text-5-5 mb-3">
          <strong class="font-weight-medium">Client:</strong>
          ${singleProject.projName}
        </h2>
        <ul class="list list-unstyled mb-0">
          <li class="text-4 mb-4">
            <strong class="font-weight-semibold text-color-dark">Category: </strong>
            ${singleProject.projCategory}
          </li>
          <li>
            <strong class="font-weight-medium text-color-dark text-4 mb-4"
              >Services:
              <p class="text-1 " id="${singleProject.id}servicesProvided"></p>
            </strong>
          </li>
          <li class="text-4 mb-4">
            <strong class="font-weight-semibold text-color-dark"
              >Industry Vertical:
            </strong>
            <p class="text-1 " id="${singleProject.id}IndustryVert" ></p>
          </li>
          <li class="text-4 mb-4">
            <strong class="font-weight-semibold text-color-dark"
              >Technologies Used:
            </strong>
            <p class="text-1 " id="${singleProject.id}TechUsed" ></p>
          </li>
          <li class="text-4 mb-0">
            <strong class="font-weight-semibold text-color-dark"
              >Project URL:
            </strong>
            <a href="${singleProject.ProjectUrl}" class="text-1 " id="${singleProject.ProjectUrl}URL" >${singleProject.ProjectUrl}</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-5">
        <blockquote class="custom-blockquote-style-1 m-0 pt-1 pb-2">
          <div
            class="custom-read-more-style-1"
            data-plugin-readmore
            data-plugin-options="{
                          'buttonOpenLabel': 'View More <i class= \'fas fa-chevron-down text-2 ms-1\'}></i>',
                          'buttonCloseLabel': 'View Less <i class=\'fas fa-chevron-up text-2 ms-1\'></i>',
                          'maxHeight': 300
                      }"
          >
            <p>
              ${singleProject.clientDesc}
            </p>
            <p>
              ${singleProject.projShortDescp}
            </p>
            <p>${singleProject.projFullDescrp}</p>
            <div class="readmore-button-wrapper d-none">
              <a href="#" class="text-decoration-none">
                Read More
                <i class="fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
    <div class="py-5">
      <hr />
    </div>
                `;
      const ElservicesProvided = document.getElementById(
        `${singleProject.id}servicesProvided`
      );
      const ElIndustryVertical = document.getElementById(
        `${singleProject.id}IndustryVert`
      );
      const ElTechnologiesUsed = document.getElementById(
        `${singleProject.id}TechUsed`
      );

      for (const singleProjectService of singleProject.servicesProvided) {
        ElservicesProvided.textContent += `${singleProjectService.service}, `;
      }
      for (const singleProjectIdustry of singleProject.industryVertical) {
        ElIndustryVertical.textContent += `${singleProjectIdustry.indusrty}, `;
      }
      for (const singleProjectTechnology of singleProject.technologiesUsed) {
        ElTechnologiesUsed.textContent += `${singleProjectTechnology.technology}, `;
      }
    }
  }
};

const FnRenderIndexOurWork = () => {
  if (ElindexOur1stProjectImg) {
    for (const singleIndexWork of projectsByBxTech) {
      if (singleIndexWork.id === "HashTagThaiMassage") {
        ElindexOur1stProjectImg.src = `${singleIndexWork.Mainimage}`;
        ElindexOur1stProjectHeading.textContent = `${singleIndexWork.projName}`;
        ELindexOur1stProjectPara.textContent = `${singleIndexWork.projShortDescp}`;
      }
      if (singleIndexWork.id === "GardeningServices") {
        ElindexOur2ndProjectImg.src = `${singleIndexWork.Mainimage}`;
        ElindexOur2ndProjectHeading.textContent = `${singleIndexWork.projName}`;
        ElindexOur2ndProjectPara.textContent = `${singleIndexWork.projShortDescp}`;
      }
    }
  }
};
FnRenderOurWork();
//RENDERING PROJECTS :END

FnRenderIndexOurWork();
