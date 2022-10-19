// const ElblogImg = document.getElementById("blogImg");
// const ElidBlogPostHeading = document.getElementById("idBlogPostHeading");
const ElidBlogsContainer = document.getElementById("idBlogsContainer");
const ElSideBlogsInfo = document.getElementById("SideBlogsInfo");

const AuthorShafiq = "M.SHAFIQ";
const AuthorUbaid = "UBAID ULLAH";

const BxBlogPosts = [
  // 1st Blog
  {
    id: "WhyAgileIsTheKeyToSuccess",
    seconderyId: "1",
    blogShortHeading: "Why Agile Is The Key To Success",
    BlogLongHeading: "Why Agile Is The Key To Success...",
    blogPostedOnDate: "October 4, 2022",
    blogAuthor: AuthorShafiq,
    blogDisplayPara:
      "Agile software development is a set of software development methods in which requirements and solutions evolve through collaboration between self-organizing cross-functional teams. It promotes adaptive planning, evolutionary development, early delivery, and continual improvement, and it encourages rapid and flexible response to change.",
    blogPara1:
      "Agile software development is a set of software development methods in which requirements and solutions evolve through collaboration between self-organizing cross-functional teams. It promotes adaptive planning, evolutionary development, early delivery, and continual improvement, and it encourages rapid and flexible response to change.",
    blogPara2:
      "There are a number of reasons why agile is the key to software project success:Agile methodology encourages constant communication between the development team and the customer. This ensures that the customer always knows what is being developed and can provide feedback early on in the process. Agile methodology also encourages constant feedback from the development team. This helps to identify any issues early on and allows for course corrections to be made quickly. Agile methodology promotes a culture of continuous improvement. This means that the team is always looking for ways to improve the process and the product.",
    blogPara3:
      "Agile methodology is flexible and can easily be adapted to changing requirements. This is vital in today's fast-paced business environment. Finally, agile methodology has been proven to deliver successful projects time and time again.",
    blogImg: "img/demos/it-services/blog/Agile-Methodology.png",
    blogPostBigImage: "img/demos/it-services/blog/AgileBigImage.jpg",
  },
  // 2nd Blog
  {
    id: "InOverviewOfDesignPatterens",
    seconderyId: "2",
    blogShortHeading: "In Overview Of Design Patterens",
    BlogLongHeading: "In Overview Of Design Patterens...",
    blogPostedOnDate: "October 17, 2022",
    blogAuthor: AuthorUbaid,
    blogDisplayPara:
      "Design patterns are important in software development because they provide a common language that developers can use to communicate with each other about the software they are creating. Design patterns also provide a way for developers to document and share their knowledge about the software they are creating.",
    blogPara1:
      "Design patterns are important in software architecture because they provide a way to describe and document common solutions to problems that occur repeatedly in software development. By using design patterns, architects can communicate their designs more effectively and help developers to understand and implement them more easily.",
    blogPara2:
      "their three main types of design patterns in software development(1) Creational Patterns: These design patterns provide a way to create objects while hiding the creation logic, rather than instantiating objects directly using new operator. This gives program more flexibility in deciding which objects need to be created for a given use case.(2). Structural Patterns: These design patterns concern class and object composition. They use inheritance to compose interfaces and define ways to compose objects to obtain new functionality.(3) Behavioral Patterns: These design patterns are specifically concerned with communication between objects.",
    blogPara3:
      "There are many advantages to using design patterns when developing software. Design patterns provide a well-defined structure that can be followed to create software that is both robust and easy to maintain. Patterns can also be reused across different projects, which can save time and money. In addition, patterns can be used to document code so that other developers can easily understand and work with it.",

    blogImg: "img/demos/it-services/blog/designPatternsSmallImage.png",
    blogPostBigImage: "img/demos/it-services/blog/designPatternsBigImage.png",
  },
  // 3rd Blog
  {
    id: "WhyJavaScriptPopular",
    seconderyId: "3",
    blogShortHeading: "Why JavaScript Popular",
    BlogLongHeading: "Why JavaScript Popular...",
    blogPostedOnDate: "October 17, 2022",
    blogAuthor: AuthorUbaid,
    blogDisplayPara:
      "JavaScript is important for software development because it is a versatile scripting language that can be used for a variety of purposes. JavaScript can be used to create interactive web pages, to validate form input, to create web applications, and to create server-side applications.",
    blogPara1:
      "JavaScript was originally developed by Brendan Eich in 1995 while working for Netscape Communications Corporation.Originally it was designed to be used as a scripting language for web pages, but it has since been used for a wide variety of purposes.",
    blogPara2:
      "A scripting language was required to give life to the browser as more people used browsers to access and interact with the internet. something that was more complex than HTML and CSS. To breathe life into the browser, JavaScript was introduced at that point. It's a language that can perform all programming tasks that other languages can, but it also has a unique connection to browsers. It introduced a new age of web apps and altered the way we thought about the net.",
    blogPara3:
      "With JavaScript, everyone with a web browser immediately has access to a programming environment, unlike many other languages where you must download the language to your computer in order to use all of its features. JavaScript is supported by every browser.",

    blogImg: "img/demos/it-services/blog/JavaScriptSmallImage.jpg",
    blogPostBigImage: "img/demos/it-services/blog/JavaScriptBigImage.jpg",
  },

  // 4th Blog
  {
    id: "WhyAutomationIsImpotant",
    seconderyId: "4",
    blogShortHeading: "Why Automation is impotant",
    BlogLongHeading: "Why Automation is impotant...",
    blogPostedOnDate: "October 17, 2022",
    blogAuthor: AuthorShafiq,
    blogDisplayPara:
      "Software testing is a process that is used to identify errors, gaps or missing requirements in a software program. Software quality assurance (SQA) is a process that is used to ensure that a software program meets all of the standards and requirements that have been set for it.",
    blogPara1:
      "Manual software testing is the process of manually testing software for defects. It is usually carried out by a human tester who interacts with the software using a test script. Test scripts are usually written in a scripting language or a testing tool.",
    blogPara2:
      "Automated software testing is a process where software tools are used to automatically test software. This process can be carried out manually or automatically.",
    blogPara3:
      "API testing is a type of software testing that focuses on the application programming interface (API) of an application to verify its functionality, correctness, and security. API testing can be performed at the unit, integration, or system level, and it can be done manually or using automation.",

    blogImg: "img/demos/it-services/blog/JavaScriptSmallImage.jpg",
    blogPostBigImage: "img/demos/it-services/blog/JavaScriptBigImage.jpg",
  },
];

for (const singleBlogPost of BxBlogPosts) {
  if (ElidBlogsContainer) {
    ElidBlogsContainer.innerHTML += ` <div class="pt-5 BxBlogPost col-lg-6 isotope-item text-start">
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
    ElSideBlogsInfo.innerHTML += `
  <p
  
  class="text-color-default text-uppercase text-1 mb-0 d-block text-decoration-none"
>
 ${singleBlogPost.blogAuthor}
</p>
<a  id="${singleBlogPost.id}" onclick="FnClickedBlog('${singleBlogPost.id}')"
href="blog-post.html" 
  class="text-color-dark text-hover-primary font-weight-bold text-3 d-block pb-3 line-height-4"
  >${singleBlogPost.blogShortHeading}</a
>`;
  }
}

const FnClickedBlog = (ClickedBlog) => {
  sessionStorage.setItem("ClickedBlogPost", ClickedBlog);
};

//
//
//
//
// BLOGS PAGINATION :START
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("idBlogsContainer");
const listItems = paginatedList.querySelectorAll("div");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 2;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.classList = "pagination-number  page-item  page-link";
  pageNumber.style.float = "left";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
//BLOGS PAGINATION : END
