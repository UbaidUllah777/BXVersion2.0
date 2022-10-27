const ElidMemberName = document.getElementById("idMemberName");
const ElIdHeadDesignation = document.getElementById("IdHeadDesignation");
const ElidHeadPrevDesig = document.getElementById("idHeadPrevDesig");
const ElidHeadEducation = document.getElementById("idHeadEducation");
const ElidMemberImg = document.getElementById("idMemberImg");
const ElidMemerAboutMePara = document.getElementById("idMemerAboutMePara");
const ElaboutMeMore = document.getElementById("aboutMeMore");
const ELidAboutMe2ndPara = document.getElementById("idAboutMe2ndPara");
const ELidAboutMe3rdPara = document.getElementById("idAboutMe3rdPara");
const ElidSayHello = document.getElementById("idSayHello");
const ElidMemberBlogsContainer = document.getElementById(
  "idMemberBlogsContainer"
);
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
      "Since 2015, I am working in the software development industry as a professional software developer. I have worked in a number of roles and positions in the technology domain since the beginning of my professional journey in this field. In my experience, I started as a trainee software developer. Over the years, I have been able to progress from a trainee software developer to a full stack developer, software tester, Software Quality assurance engineer, Scrum Master, Product Owner, Requirements Engineer, and Software project manager.",
    aboutSecondPara: "My focus areas of interest are the following:",
    aboutThirdPara:
      "1. Full Stack development (MERN Stack), Software Testing and Automation, Software Quality assurance and Software Dependability, Software Project Management, Software Architecture, Design Patterns, Requirements Engineering and Project Planning, Machine learning and its Applications to Software Testing and Quality, IOTs, Blockchain and Quantum Computing, Test Driven Development (TDD), Model-based Testing, and embedded systems Testing, Development and testing tools, Cloud computing and blockchain technology, Distributed systems",
    birthday: "01/01/1991",
    marital: "Single",
    nationality: "Pakistani",
    skype: "shafiqpesh123@gmail.com",
    phone: "+92-3312413434",
    email: "shafiq@bxtechnologies.net",
    facebook: "N/A",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/muhammad-shafiq-3413a9a2/",
    blogAuthorName: "M.SHAFIQ",

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
        schoolName: "University Of Peshawar, Peshawar",
        degreeName: "Bachelor's In Computer Science ",
        dates: "2010-2014",
      },
      {
        schoolName: "Excelior College Sangota,Swat",
        degreeName: "F.sc",
        dates: "2007-2009",
      },
      {
        schoolName: "Cambridge Public High School",
        degreeName: "SSC",
        dates: "2006-2007",
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
        languageAbility: "EXcellent",
        flag: "us",
      },
      {
        languageName: "URDU",
        languageAbility: "Native",
        flag: "pk",
      },
      {
        languageName: "PASHTO",
        languageAbility: "Native",
        flag: "pk",
      },
      {
        languageName: "German",
        languageAbility: "Basic",
        flag: "de",
      },
    ],
  },
  //KASHIF
  {
    id: "idKashifPortfolio",
    HeadImg: "img/demos/resume/about-me/mKashifVer.jpeg",
    name: "Muhammad Kashif",
    designation: "Senior Software Engineer",
    previousDesignation: "Software Developer",
    headEducation: "Bs(CS)",
    aboutMePara:
      "As a Senior software Engineer. I have 8+ years hands on experience in variety of javascript frameworks and both frontend and backend side, Like Reactjs, Vue and Angular,   also had work on micro-services, mongo db, and firebase and node js express js.",
    aboutSecondPara:
      " over the years i have worked on different projects and technology domains, like blockchain, ecommerce solutions and enterprise level applications.",
    aboutThirdPara: "",
    birthday: "01/01/1991",
    marital: "Single",
    nationality: "Pakistani",
    skype: "shafiqpesh123@gmail.com",
    phone: "+92-3312413434",
    email: "kashif@bxtechnologies.net",
    facebook: "N/A",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/muhammad-shafiq-3413a9a2/",
    blogAuthorName: "M.Kashif",

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
        schoolName: "University Of Peshawar, Peshawar",
        degreeName: "Bachelor's In Computer Science ",
        dates: "2010-2014",
      },
      {
        schoolName: "Excelior College Sangota,Swat",
        degreeName: "F.sc",
        dates: "2007-2009",
      },
      {
        schoolName: "Cambridge Public High School",
        degreeName: "SSC",
        dates: "2006-2007",
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
        languageAbility: "EXcellent",
        flag: "us",
      },
      {
        languageName: "URDU",
        languageAbility: "Native",
        flag: "pk",
      },
      {
        languageName: "PASHTO",
        languageAbility: "Native",
        flag: "pk",
      },
      {
        languageName: "German",
        languageAbility: "Basic",
        flag: "de",
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
    aboutMePara:
      "It is my pleasure to introduce myself as a Full-stack software developer. I am passionate about web development, Desktop development, software testing, and API development. ",
    aboutSecondPara:
      "I have an experience in product development, who is capable of thriving in a fast-paced environment. Leadership capabilities, manages, motivates, and guides teams at all stages of project-based efforts. I am a  team player with excellent communication and management skills.",
    aboutThirdPara:
      "I have worked in many programming languages and frameworks based on the needs and requirements of the projects. My expertise is in JavaScript, ASP.net, C#, CSS, HTML, React,  MySQL and as a MERN Stack. ",
    phone: "+923165627477",
    birthday: "01/01/1993",
    marital: "Single",
    nationality: "Pakistani",
    skype: "N/A",
    phone: "+92-3165627477",
    email: "ubaid@bxtechnologies.net",
    facebook: "N/A",
    twitter: "https://twitter.com/SebLumber",
    linkedin: "https://www.linkedin.com/in/ubaid-ullah-b3a185189/",
    blogAuthorName: "UBAID ULLAH",

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
  //Sobia/HR
  {
    id: "idSobiaPortfolio",
    HeadImg: "img/demos/resume/about-me/femaleCommonVer.png",
    name: "Sobia Aman Abbasi",
    designation: "HR & Technical recruiter",
    previousDesignation: "HR",
    headEducation: "Bs(Eng)",
    aboutMePara:
      " Well-organized and creative HR. Pursued Management Sciences degree. Skilled in HR Policies, Performance   Management, Time Management, Teamwork, and Microsoft  Office",
    aboutSecondPara:
      "Strategic and innovative HR Executive who translates business vision into HR initiatives that improve performance, profitability, growth, and employee  engagement. Empowering leader who supports companies and   top executives with a unique perspective and appreciation   that human capital is every organization’s greatest asset.",
    aboutThirdPara:
      "  I am a Genuine influencer who thrives on tough challenges  and translates visions and strategies into actionable, value-added goals.",
    phone: "N/A",
    birthday: "01/01/1993",
    marital: "married",
    nationality: "Pakistani",
    skype: "N/A",
    phone: "N/A",
    email: "hr@bxtechnologies.net",
    facebook: "N/A",
    twitter: "N/A",
    linkedin: "N/A",
    blogAuthorName: "Sobia Aman Abbasi",

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
      ELidAboutMe2ndPara.textContent = `${SinglePortfolio.aboutSecondPara}`;
      ELidAboutMe3rdPara.textContent = `${SinglePortfolio.aboutThirdPara}`;
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
      ElidSayHello.innerHTML = `
      <a href="mailto:${SinglePortfolio.email}" class="text-decoration-none">
											<span class="feature-box custom-feature-box align-items-center mb-4">
												<span class="custom-feature-box-icon">
													<i class="icon-envelope icons text-color-light"></i>
												</span>
												<span class="feature-box-info">
													<span class="custom-label font-weight-semibold text-uppercase custom-text-color-1 line-height-5">Email</span>
													<strong class="font-weight-light text-color-light custom-opacity-effect-1">${SinglePortfolio.email}</strong>
												</span>
											</span>
										</a>
										<a href="tel:${SinglePortfolio.phone}" class="text-decoration-none">
											<span class="feature-box custom-feature-box align-items-center mb-4">
												<span class="custom-feature-box-icon">
													<i class="icon-phone icons text-color-light"></i>
												</span>
												<span class="feature-box-info">
													<span class="custom-label font-weight-semibold text-uppercase custom-text-color-1 line-height-5">Phone</span>
													<strong class="font-weight-light text-color-light custom-opacity-effect-1">${SinglePortfolio.phone}</strong>
												</span>
											</span>
										</a>
										
										<span class="feature-box custom-feature-box align-items-center">
											<span class="custom-feature-box-icon">
												<i class="icon-share icons text-color-light"></i>
											</span>
											<a href="${SinglePortfolio.facebook}" class="d-flex text-decoration-none">
												<span class="feature-box-info">
													<strong class="font-weight-light text-color-light custom-opacity-effect-1 ">Facebook</strong>
												</span>
											</a>
											<a href="${SinglePortfolio.twitter} class="d-flex text-decoration-none ">
												<span class="feature-box-info custom-both-side-border mt-2">
													<strong class="font-weight-light text-color-light custom-opacity-effect-1 ">Twitter</strong>
												</span>
											</a>
											<a href="${SinglePortfolio.linkedin}" class="d-flex text-decoration-none">
												<span class="feature-box-info p-0 mt-2">
													<strong class="font-weight-light text-color-light custom-opacity-effect-1">Linkedin</strong>
												</span>
											</a>
										</span>
      `;
      for (const singleBlogPost of BxBlogPosts) {
        if (singleBlogPost.blogAuthor == SinglePortfolio.blogAuthorName) {
          ElidMemberBlogsContainer.innerHTML += ` <div class="pt-5 BxBlogPost col-lg-6 isotope-item text-start">
        <article class="card custom-post-style-1 border-0">
          <header class="overlay overlay-show">
            <img
              id="blogImg"
              class="img-fluid"
              src="${singleBlogPost.blogImg}"
              alt="Blog Post Thumbnail 1"
            />
            <h4
              class="font-weight-bold text-6 position-absolute bottom-0 left-0 z-index-2 ms-4 mb-4 pb-2 ps-2 pe-5 me-5"
            >
              <a
                id="idBlogPostHeading"
                href="blog-post.html"
                class="text-color-light text-decoration-none"
                >${singleBlogPost.BlogLongHeading}</a
              >
            </h4>
          </header>
          <div class="card-body">
            <ul
              class="list list-unstyled custom-font-secondary pb-1 mb-2"
            >
              <li
                class="list-inline-item line-height-1 me-1 mb-0"
              >
                ${singleBlogPost.blogPostedOnDate}
              </li>
              <li
                class="d-inline-block list-inline-item vertical-divider border-color-dark px-2 line-height-1 me-1"
              >
                ${singleBlogPost.blogAuthor}
              </li>
            </ul>
            <p class="custom-text-size-1 mb-2">
              ${singleBlogPost.blogDisplayPara}
            </p>
            <a
              id="${singleBlogPost.id}"
              onclick="FnClickedBlog('${singleBlogPost.id}')"
              href="blog-post.html"
              class="text-color-primary font-weight-bold text-decoration-underline custom-text-size-1"
              >Read More...</a
            >
          </div>
        </article>
      </div>`;
        }
      }
    }
  }
}
