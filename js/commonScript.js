//vendering Navbar Elements :start
const ElidHeaderLogo = document.getElementById("idHeaderLogo");
const ElidHeaderLinkHome = document.getElementById("idHeaderLinkHome");
const ElidHeaderLinkAboutUs = document.getElementById("idHeaderLinkAboutUs");
const ElidHeaderLinkServices = document.getElementById("idHeaderLinkServices");
const ElidHeaderLinkSrvOverView = document.getElementById(
  "idHeaderLinkSrvOverView"
);
//vendering Navbar Elements :End

//Rendering Navbar Elements :start

ElidHeaderLogo.src = `img/demos/it-services/logo.png`;

ElidHeaderLinkHome.textContent = `Home`;
ElidHeaderLinkHome.href = `index.html`;

ElidHeaderLinkAboutUs.textContent = `About Us`;
ElidHeaderLinkAboutUs.href = `about-us.html`;

// ElidHeaderLinkServices.textContent = `Services`;
// ElidHeaderLinkServices.href = `services.html`;

//Rendering Navbar Elements :start
