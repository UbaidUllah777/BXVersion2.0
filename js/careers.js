const Elaccordion11 = document.getElementById("accordion11");
const ElidCheckOpenPositions = document.getElementById("idCheckOpenPositions1");
const ElidCheckOpenPositions2 = document.getElementById(
  "idCheckOpenPositions2"
);

const JobOpputunities = [
  {
    id: "idBusinessDevloper",
    careerHeading: "Business Development Manager - Software Development",
    careerPara1:
      "BX Technologies private Limited is a full-stack software development company having its Presence in Germany and Pakistan which delivers innovative and cutting-edge technology solutions to a wide range of clients. We are a team of highly skilled software engineers, developers, and software architects who specialize in creating custom software applications, web development, mobile development, and cloud-based solutions. Our clients range from small start-ups to large enterprises, and we pride ourselves on working closely with each client to understand their unique needs and goals, and delivering customized solutions that meet their specific requirements. We strive to stay current on the latest technologies and industry trends to ensure that our clients receive the best possible solutions. ",
    careersPara2:
      "Our development process is centered around Agile methodologies, which allows us to deliver software quickly, manage risk effectively, and adjust to changing client requirements. Additionally, we believe in transparency, open communication, and a collaborative approach to projects in order to build long-lasting relationships with our clients. We are passionate about technology and delivering the best possible solutions to our clients. We are looking for like-minded individuals who share our passion and can contribute to our team and the projects we work on. If you are a driven IT professional who wants to be part of a growing and successful company, we'd love to hear from you. Currently BX technologies is looking for a business development professional in its Islamabad office in order to manage and expand its software development activities and to attract more clients.",
    responsibilites: [
      {
        responsibility:
          "Identifying and pursuing new business opportunities through online projects market places like Up Work, LinkedIn, market research, networking, and industry events",
      },
      {
        responsibility:
          "Developing and maintaining relationships with key clients, partners, and industry influencers within the software development industry",
      },
      {
        responsibility:
          "Collaborating with internal teams such as sales, management and software development to develop and execute business development strategies",
      },
      {
        responsibility:
          "Creating and delivering presentations and proposals to potential clients and partners to showcase company's software development capabilities and services",
      },
      {
        responsibility:
          "Negotiating and closing deals with new clients and partners to increase revenue and expand the company's client base",
      },
      {
        responsibility:
          "Keeping abreast of industry trends and developments in software development to inform business development efforts and to be able to offer services that are in-demand",
      },
      {
        responsibility:
          "Meeting or exceeding annual sales and revenue targets for the software development division",
      },
    ],
    requirements: [
      {
        requirement:
          "Bachelor's degree in business, marketing, Computer Science, Computer Engineering or related field Minimum of 3 years of experience in business development or a related field within the software development industry",
      },
      {
        requirement:
          "Strong understanding of software development methodologies and technologies as well as Strong communication, negotiation, and presentation skills",
      },
      {
        requirement:
          "Ability to work effectively in a team-oriented environment",
      },
      {
        requirement:
          "Self-motivated and results-driven with a track record of meeting and exceeding business development targets. We will prefer applicants  with Strong analytical and problem-solving skills",
      },
      {
        requirement:
          "As a software development Business Development Manager you would be critical in finding and closing new deals and partnerships in the software development sector and bringing in new clients for the company to create more business and increase revenue. Additionally, The Business Development Manager would be able to offer industry-specific services by staying current on trends and developments in the software development world.",
      },
    ],
    careerLocation: "Isb, PK",
    careerExperties: "Business Development and Sales",
    careerQualification: "3+ YEARS EXPERIENCE",
  },
];

const FnLoadOppertunities = () => {
  if (JobOpputunities.length == 0) {
    ElidCheckOpenPositions2.style.display = "none";
    ElidCheckOpenPositions.innerHTML += `
    <strong style="color:red" 
                    >Currently we don't have  any open oppertunities, however we alwasy look for professionals. You can drop your CV at
                    <a href="mailto:hr@bxtechnologies.net"
                      >hr@bxtechnologies.net</a
                    >
                  </strong>`;
  } else {
    for (const singleCareer of JobOpputunities) {
      Elaccordion11.innerHTML += `
        
      <div class="card card-default">
      <div class="card-header">
        <h4 class="card-title m-0">
          <a
            class="accordion-toggle px-4 pt-3"
            data-bs-toggle="collapse"
            data-bs-parent="#accordion11"
            href="#${singleCareer.id}"
          >
            ${singleCareer.careerHeading}
          </a>
        </h4>
      </div>
      <div id="${singleCareer.id}" class="collapse">
        <div class="card-body px-4 pt-2 pb-5">
          <p class="custom-text-size-1 pb-1 mb-4">
           ${singleCareer.careerPara1}
          </p>
          <p class="custom-text-size-1">
          ${singleCareer.careersPara2}
          </p>
          <ul id="idResponsibilites" class="list list-icons list-icons-style-2 list-icons-sm">
          <li> <strong class="text-color-dark">RESPONSIBILITIES</strong> </li>
          
        </ul>

        
        <ul id="idRequirements" class="list list-icons list-icons-style-2 list-icons-sm">
        <li> <strong class="text-color-dark">REQUIREMENTS</strong> </li>
        
      </ul>

          <ul class="list list-inline list-unstyled">
            <li class="list-inline-item">
              <strong class="text-color-dark">LOCATION:</strong>
              ${singleCareer.careerLocation}
            </li>
            <li class="list-inline-item">
              <strong class="text-color-dark">EXPERTISE:</strong>
              ${singleCareer.careerExperties}
            </li>
            <li class="list-inline-item">
              <strong class="text-color-dark"
                >QUALIFICATION:</strong
              >
              ${singleCareer.careerQualification}
            </li>
          </ul>
          <p  
          >To apply for this Job, Please send your Resume at 
          <a class ="text-color-primary" href="mailto:hr@bxtechnologies.net"
            >hr@bxtechnologies.net</a
          >
        </p>

          <a
            href="mailto:hr@bxtechnologies.net"
            class="btn btn-secondary btn-outline text-color-dark font-weight-semibold border-width-4 custom-link-effect-1 text-1 text-xl-3 d-inline-flex align-items-center px-4 py-3"
            >APPLY NOW <i class="custom-arrow-icon ms-2"></i
          ></a>
        </div>
      </div>
    </div>
      `;
      const ElidResponsibilites = document.getElementById("idResponsibilites");
      for (const singleResponsibility of singleCareer.responsibilites) {
        ElidResponsibilites.innerHTML += `
        <li><i class="fas fa-check">
            </i> ${singleResponsibility.responsibility}</li>
        `;
      }
      const ElidRequirements = document.getElementById("idRequirements");
      for (const singleRequirement of singleCareer.requirements) {
        ElidRequirements.innerHTML += `
        <li><i class="fas fa-check">
            </i> ${singleRequirement.requirement}</li>
        `;
      }
    }
  }
};

FnLoadOppertunities();
