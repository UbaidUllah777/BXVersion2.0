const Elaccordion11 = document.getElementById("accordion11");
const ElidCheckOpenPositions = document.getElementById("idCheckOpenPositions1");
const ElidCheckOpenPositions2 = document.getElementById(
  "idCheckOpenPositions2"
);

const JobOpputunities = [
  // {
  //   id: "idMernStacKDeveloper",
  //   careerHeading: "Mern StacK Developer",
  //   careerPara1:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.",
  //   careersPara2:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.",
  //   careerLocation: "Isb, PK",
  //   careerExperties: "Mern StacK High Level Expert",
  //   careerQualification: "5+ YEARS EXPERIENCE",
  // },
  // {
  //   id: "idReactDeveloper",
  //   careerHeading: "React Developer",
  //   careerPara1:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.",
  //   careersPara2:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.",
  //   careerLocation: "Isb, PK",
  //   careerExperties: "React Medium Level Expert",
  //   careerQualification: "3+ YEARS EXPERIENCE",
  // },
  // {
  //   id: "idPHP",
  //   careerHeading: "PHP Developer",
  //   careerPara1:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.",
  //   careersPara2:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.",
  //   careerLocation: "Isb, PK",
  //   careerExperties: "Php Medium Level Expert",
  //   careerQualification: "2+ YEARS EXPERIENCE",
  // },
  // {
  //   id: "idFrontEndDesignerCss",
  //   careerHeading: "Front-End Designer(Css)",
  //   careerPara1:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.",
  //   careersPara2:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.",
  //   careerLocation: "Isb, PK OR Online",
  //   careerExperties: " High Level Expert",
  //   careerQualification: "3+ YEARS EXPERIENCE",
  // },
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
          <ul class="list list-inline list-unstyled">
            <li class="list-inline-item">
              <strong class="text-color-dark">LOCATION:</strong>
              ${singleCareer.careerLocation}
            </li>
            <li class="list-inline-item">
              <strong class="text-color-dark">Experties:</strong>
              ${singleCareer.careerExperties}
            </li>
            <li class="list-inline-item">
              <strong class="text-color-dark"
                >QUALIFICATION:</strong
              >
              ${singleCareer.careerQualification}
            </li>
          </ul>
          <a
            href="contact.html"
            class="btn btn-secondary btn-outline text-color-dark font-weight-semibold border-width-4 custom-link-effect-1 text-1 text-xl-3 d-inline-flex align-items-center px-4 py-3"
            >APPLY NOW <i class="custom-arrow-icon ms-2"></i
          ></a>
        </div>
      </div>
    </div>
      `;
    }
  }
};

FnLoadOppertunities();
