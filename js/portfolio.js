const ElidMemberName = document.getElementById("idMemberName");
const ElIdHeadDesignation = document.getElementById("IdHeadDesignation");
const ElidHeadPrevDesig = document.getElementById("idHeadPrevDesig");
const ElidHeadEducation = document.getElementById("idHeadEducation");
const ElidMemberImg = document.getElementById("idMemberImg");
const ElidMemerAboutMePara = document.getElementById("idMemerAboutMePara");
const ElidMemberBirthday = document.getElementById("idMemberBirthday");
const ElidMembermarital = document.getElementById("idMembermarital");
const ElidMemberNationality = document.getElementById("idMemberNationality");
const ElidMembreSkype = document.getElementById("idMembreSkype");
const ElidskypeHyperLink = document.getElementById("idskypeHyperLink");

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
    PersonalDetails: [
      {
        birthday: "01/01/1991",
        marital: "Single",
        nationality: "Pakistani",
        skype: "skype Id ba Warki dalta",
        phone: "+92-3165627477",
        email: "ubaid@bxtechnologies.net",
      },
    ],
    Experience: [
      {
        expDesignation: "ahsd",
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
];

for (const SinglePortfolio of AllTeamProfiles) {
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
      ElidMemberBirthday.textContent = `${SinglePortfolio.birthday}`;
      ElidMembermarital.textContent = `${SinglePortfolio.marital}`;
      ElidMemberNationality.textContent = `${SinglePortfolio.nationality}`;
      ElidMembreSkype.textContent = `${SinglePortfolio.skype}`;
      ElidskypeHyperLink.href = `skype:${SinglePortfolio.skype}?chat`;
    }
  }
}
