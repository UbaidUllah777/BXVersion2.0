const ElidMemberName = document.getElementById("idMemberName");
const ElIdHeadDesignation = document.getElementById("IdHeadDesignation");
const ElidHeadPrevDesig = document.getElementById("idHeadPrevDesig");
const ElidHeadEducation = document.getElementById("idHeadEducation");
const ElidMemberImg = document.getElementById("idMemberImg");
const ElidMemerAboutMePara = document.getElementById("idMemerAboutMePara");
const ElaboutMeMore = document.getElementById("aboutMeMore");
// const ElidMemberBirthday = document.getElementById("idMemberBirthday");
// const ElidMembermarital = document.getElementById("idMembermarital");
// const ElidMemberNationality = document.getElementById("idMemberNationality");
// const ElidMembreSkype = document.getElementById("idMembreSkype");
// const ElidskypeHyperLink = document.getElementById("idskypeHyperLink");
// const ElidMemberPhone = document.getElementById("idMemberPhone");
// const ElidMemberEmail = document.getElementById("idMemberEmail");
const ElidEperienceContainer = document.getElementById("idEperienceContainer");
const ElidMemberEducationContainer = document.getElementById(
  "idMemberEducationContainer"
);
const ElidSkillsRight = document.getElementById("idSkillsRight");
const ElidSkillsLeft = document.getElementById("idSkillsLeft");
const ElidLanguagesContainer = document.getElementById("idLanguagesContainer");

const PortFolioClicked = sessionStorage.getItem("idPortfolio");

const AllTeamProfiles = [
  //M.Shafiq
  {
    id: "idShafiqPortfolio",
    HeadImg: "img/demos/resume/about-me/mShafiqVer.jpg",
    name: "Muhammad Shafiq",
    designation: "Founder & CEO at BX Technologies",
    previousDesignation: "Software Developer",
    headEducation: "Ms(CS)",
    aboutMePara:
      "za makkhki dher ghareeb wam aw za ba pa pindi Express k as a Tc wam bya me da Ghareeb tabah d videos wakaty aw khpal business m kolao ko aw ws dher zyaty paisy gatam aw mazy koma aw yawa masta Gf da, aw mazy p kom.",

    birthday: "01/01/1991",
    marital: "Single",
    nationality: "Pakistani",
    skype: "shafiqpesh123@gmail.com",
    phone: "+92-3312413434",
    email: "shafiq@bxtechnologies.net",

    Experience: [
      {
        expDesignation: "TC",
        expPara:
          "za makkhki dher ghareeb wam aw za ba pa pindi Express k as a Tc wam bya me da Ghareeb tabah d videos wakaty aw khpal business m kolao ko aw ws dher zyaty paisy gatam aw mazy koma aw yawa masta Gf da, aw mazy p kom.",
        expFrom: "Sep 2001",
        expTo: "2017",
        expCompany: "Pendi Express",
        expCompanyDistination: "Pindi",
      },
      {
        expDesignation: "CTO",
        expPara: "Bs nur sa owam kho gatam aw satam",
        expFrom: "Oct 2019",
        expTo: "Present",
        expCompany: "BX Technologies Pvt Ltd.",
        expCompanyDistination: "Blue Area,Islamabad, PK",
      },
    ],
    EducationInDetails: [
      {
        schoolName: "Cambridge Public High School",
        degreeName: "SSC",
        dates: "1996-2008",
      },
      {
        schoolName: "Excelior College Sangota,Swat",
        degreeName: "F.sc",
        dates: "2008-2010",
      },
      {
        schoolName: "University Of Agriculture, Peshawar",
        degreeName: "Bachelor's In Computer Science ",
        dates: "2011-2015",
      },
      {
        schoolName: "Capital University of Science and Technology, Islamabad",
        degreeName: "Master's of Computer Science",
        dates: "2017-2019",
      },
    ],
    Skills: [
      {
        skillName: "JavaScript",
        skillPercentage: "80%",
      },
      {
        skillName: "Php",
        skillPercentage: "50%",
      },
      {
        skillName: "Asp.Net",
        skillPercentage: "75%",
      },
      {
        skillName: "C#",
        skillPercentage: "85%",
      },
      {
        skillName: "Mongoose",
        skillPercentage: "80%",
      },
      {
        skillName: "Bootstrap",
        skillPercentage: "100%",
      },
      {
        skillName: "React",
        skillPercentage: "60%",
      },
      {
        skillName: "NODE",
        skillPercentage: "70%",
      },
      {
        skillName: "C# WPF",
        skillPercentage: "70%",
      },
      {
        skillName: "MYSQL",
        skillPercentage: "90%",
      },
    ],
    Languages: [
      {
        languageImg: "",
        languageName: "ENGLISH",
        languageAbility: "90%",
      },
      {
        languageImg: "",
        languageName: "URDU",
        languageAbility: "100%",
      },
      {
        languageImg: "",
        languageName: "PASHTO",
        languageAbility: "100%",
      },
    ],
  },
  //Ubaid Ullah
  {
    id: "idUbaidPortfolio",
    HeadImg: "img/demos/resume/about-me/UbaiVer.jpg",
    name: "Ubaid Ullah",
    designation: "Full Stack Developer & MD  at BX Technologies",
    previousDesignation: "Software Developer",
    headEducation: "Ms(CS)",
    aboutMePara: "La lala lala lalaala lalalal ",
    phone: "+923165627477",
    birthday: "01/01/1993",
    marital: "Single",
    nationality: "Pakistani",
    skype: "N/A",
    phone: "+92-3165627477",
    email: "ubaid@bxtechnologies.net",

    Experience: [
      {
        expDesignation: "Full Stack Software Developer ",
        expPara:
          "Working as a software developer at BX Technologies Pvt Limited, Islamabad, Pakistan, My major responsibilities are developing databases and software applications in Javascript, React, C#, ASP.net and In MERN Stack. My additional Skills are HTML5, CSS, Bootsrap,Mediaquery, NODE, Mongoose and MYSQL",
        expFrom: "FEB 2017",
        expTo: "PRESENT",
        expCompany: "BX TEchnologies Pvt Ltd.",
        expCompanyDistination: "Islamabad",
      },
      {
        expDesignation: "Software Developer",
        expPara:
          "14 months of experience as a Desktop developer (C#, WPF)  & Web Developer (ASP.net) at ZeeSign Tech Pvt-Ltd Islamabad, Pakistan.",
        expFrom: "NOV 2015",
        expTo: "DEC 2016",
        expCompany: "ZeeSign Tech Pvt Ltd.",
        expCompanyDistination: "Islamabad, PK",
      },
      {
        expDesignation: "Intern",
        expPara:
          "6 months of internship as a Desktop developer (C#, WPF) at Khyber Pakhtunkhwa Information and Technology Board Peshawar Pakistan.",
        expFrom: "APR 2015",
        expTo: "SEP 2015",
        expCompany: "KPITB, Peshawar, Pakistan.",
        expCompanyDistination: "Peshaawar, KPK",
      },
    ],
    EducationInDetails: [
      {
        schoolName: "Capital University of Science and Technology, Islamabad",
        degreeName: "Master's of Computer Science",
        dates: "2017-2019",
      },
      {
        schoolName: "University Of Agriculture, Peshawar",
        degreeName: "Bachelor's In Computer Science ",
        dates: "2011-2015",
      },
      {
        schoolName: "Excelior College Sangota,Swat",
        degreeName: "F.sc",
        dates: "2008-2010",
      },
      {
        schoolName: "Cambridge Public High School",
        degreeName: "SSC",
        dates: "1996-2008",
      },
    ],
    Skills: [
      {
        skillName: "JavaScript",
        skillPercentage: "80%",
      },
      {
        skillName: "Asp.Net",
        skillPercentage: "75%",
      },
      {
        skillName: "C#",
        skillPercentage: "85%",
      },
      {
        skillName: "Mongoose",
        skillPercentage: "80%",
      },
      {
        skillName: "Bootstrap",
        skillPercentage: "100%",
      },
      {
        skillName: "React",
        skillPercentage: "60%",
      },
      {
        skillName: "NODE",
        skillPercentage: "70%",
      },
      {
        skillName: "C# & WPF",
        skillPercentage: "70%",
      },
      {
        skillName: "MYSQL",
        skillPercentage: "90%",
      },
    ],
    Languages: [
      {
        languageName: "ENGLISH",
        languageAbility: "Advanced%",
        flag: "us",
      },
      {
        languageName: "URDU",
        languageAbility: "Advanced",
        flag: "pk",
      },
      {
        languageName: "PASHTO",
        languageAbility: "Advanced",
        flag: "pk",
      },
    ],
  },

  //Shabbir Buzdar
  {
    id: "idShabbirPortfolio",
    HeadImg: "img/demos/resume/about-me/ShabbirVer.jpg",
    name: "Shabbir Buzdar",
    designation: "Media & Content Developer",
    previousDesignation: "T-Series",
    headEducation: "Ms(CS)",
    aboutMePara: "La lala lala lalaala lalalal ",
    phone: "N/A",
    birthday: "02/04/2003",
    marital: "Single",
    nationality: "Pakistani",
    skype: "skype Id ba Warki dalta",
    phone: "+92-3186564835",
    email: "shabbirbuzdar@bxtechnologies.net",

    Experience: [
      {
        expDesignation: "Media & Content Developer",
        expPara:
          "aksjdlhka jsdja;s d;a;sdha;sd;ha;sdhaosdhapshd;a;shidhas;d ihaishdsd;ashd;haosda sd l",
        expFrom: "Sep 2001",
        expTo: "2017",
        expCompany: "Pendi Express",
        expCompanyDistination: "Pindi",
      },
      {
        expDesignation: "CTO",
        expPara: "Bs nur sa owam kho gatam aw satam",
        expFrom: "Oct 2019",
        expTo: "Present",
        expCompany: "BX Technologies Pvt Ltd.",
        expCompanyDistination: "Blue Area,Islamabad, PK",
      },
    ],
    EducationInDetails: [
      {
        schoolName: "Governanment boys High School, Choti zareen, DG-Khan",
        degreeName: "S.sc",
        dates: "2016-2018",
      },
      {
        schoolName: "Governanment boys Degree College, Block#17, DG-Khan",
        degreeName: "F.sc",
        dates: "2018-2020",
      },
      {
        schoolName: "Baheria University, Islamabad",
        degreeName: "Bachelor's In Information & Technology",
        dates: "2021-OnGoing",
      },
    ],
    Skills: [
      {
        skillName: "HTML",
        skillPercentage: "90%",
      },
      {
        skillName: "CSS",
        skillPercentage: "50%",
      },
      {
        skillName: "Google Ads",
        skillPercentage: "95%",
      },
      {
        skillName: "Google Adsense",
        skillPercentage: "85%",
      },
      {
        skillName: "MySql",
        skillPercentage: "80%",
      },
      {
        skillName: "Advertising Management",
        skillPercentage: "100%",
      },
      {
        skillName: "YouTube(Youtuber)",
        skillPercentage: "90%",
      },
    ],
    Languages: [
      {
        languageImg: "",
        languageName: "ENGLISH",
        languageAbility: "70%",
      },
      {
        languageImg: "",
        languageName: "URDU",
        languageAbility: "100%",
      },
      {
        languageImg: "",
        languageName: "Saraiki",
        languageAbility: "100%",
      },
    ],
  },
];

for (const SinglePortfolio of AllTeamProfiles) {
  let counter = 1;
  if (ElidHeadPrevDesig) {
    if (SinglePortfolio.id === PortFolioClicked) {
      ElidMemberName.textContent = `${SinglePortfolio.name}`;
      ElIdHeadDesignation.textContent = `${SinglePortfolio.designation}`;
      ElidHeadPrevDesig.innerHTML = `
        <strong class="text-color-light">Previous: </strong>
											${SinglePortfolio.previousDesignation}
											<a data-hash href="#experience" class="btn btn-tertiary text-uppercase custom-btn-style-1 text-1 ms-2">View More</a>
										
        `;

      ElidHeadEducation.innerHTML = `<strong class="text-color-light">Education: </strong>
        ${SinglePortfolio.headEducation}
        <a data-hash href="#education" class="btn btn-tertiary text-uppercase custom-btn-style-1 text-1 ms-2">View More</a>
    `;
      ElidMemberImg.src = `${SinglePortfolio.HeadImg}`;
      ElidMemerAboutMePara.textContent = `${SinglePortfolio.aboutMePara}`;
      // ElidMemberBirthday.textContent = `${SinglePortfolio.birthday}`;
      // ElidMembermarital.textContent = `${SinglePortfolio.marital}`;
      // ElidMemberNationality.textContent = `${SinglePortfolio.nationality}`;
      // ElidskypeHyperLink.textContent = `${SinglePortfolio.skype}`;
      // ElidskypeHyperLink.href = `skype:${SinglePortfolio.skype}?chat`;
      // ElidMemberPhone.textContent = `${SinglePortfolio.phone}`;
      // ElidMemberPhone.href = `tel:${SinglePortfolio.phone}`;
      // ElidMemberEmail.textContent = `${SinglePortfolio.email}`;
      for (const SingleExp of SinglePortfolio.Experience) {
        ElidEperienceContainer.innerHTML += `
        <article class="timeline-box right custom-box-shadow-2">
											<div class="row">
												<div class="experience-info col-lg-3 col-sm-5 bg-color-primary">
													<span class="from text-color-light text-uppercase">
														From
														<span class="font-weight-semibold">${SingleExp.expFrom}</span>
													</span>
													<span class="to text-color-light text-uppercase">
														To
														<span class="font-weight-semibold">${SingleExp.expTo}</span>
													</span>
													
													<span class="company text-color-light font-weight-semibold pb-5 pt-5">
														${SingleExp.expCompany}
														<span class="company-location text-color-light font-weight-normal text-uppercase">${SingleExp.expCompanyDistination}</span>
													</span>
												</div>
												<div class="experience-description col-lg-9 col-sm-7 bg-color-light">
													<h4 class="text-color-dark font-weight-semibold">${SingleExp.expDesignation}</h4>
													<p class="custom-text-color-2">${SingleExp.expPara}</p>
												</div>
											</div>
										</article>
        `;
      }
      for (const singleEducation of SinglePortfolio.EducationInDetails) {
        ElidMemberEducationContainer.innerHTML += `
        <div class="row">
										<div class="col-lg-12 col-sm-12 pb-4">
											<div class="custom-box-details-2 bg-color-light custom-box-shadow-3">
												<i class="icon-graduation icons text-color-primary"></i>
												<h4 class="font-weight-semibold text-color-dark m-0">${singleEducation.schoolName}</h4>
												<p class="custom-text-color-2 mb-1">${singleEducation.degreeName}</p>
												<strong class="text-color-primary">${singleEducation.dates}</strong>
											</div>
										</div>
										
										</div>
									</div>
        `;
      }
      for (const SingleSkill of SinglePortfolio.Skills) {
        if (counter % 2 == 0) {
          ElidSkillsLeft.innerHTML += `
          <li class="font-weight-medium custom-text-4 mt-4 mb-4 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200" style="animation-delay: 200ms;">
          ${SingleSkill.skillName}
        </li>
          `;
        } else if (counter % 2 != 0) {
          ElidSkillsRight.innerHTML += `<li class="font-weight-medium custom-text-4 mt-4 mb-4 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200" style="animation-delay: 200ms;">
          ${SingleSkill.skillName}
        </li>`;
        }
        counter = counter + 1;
      }
      for (const singleLanguage of SinglePortfolio.Languages) {
        ElidLanguagesContainer.innerHTML += `<li>
        <span class="font-weight-semibold custom-max-width-1 text-color-dark"><img src="img/blank.gif" class="flag flag-${singleLanguage.flag} me-1" alt="${singleLanguage.languageName}">${singleLanguage.languageName}:</span>
        <span class="custom-text-color-2">Advanced</span>
      </li>`;
      }
    }
  }
}
