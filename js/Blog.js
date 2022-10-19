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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus. Vestibulum ante ipsum  primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur Vestibulum vehicula scelerisque facilisis.THREE",
    blogPara1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus. Vestibulum ante ipsum  primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur Vestibulum vehicula scelerisque facilisis. Sed  mauris.",
    blogPara2:
      "Curabitur non erat quam, id volutpat leo. Nullam pretium gravida urna et interdum. Suspendisse in dui tellus. Cras luctus nisl vel risus adipiscing aliquet.Phasellus convallis lorem dui. Quisque hendrerit,lectus ut accumsan gravida, leo tellus porttitor mi, ac mattis eros nunc vel enim. Nulla facilisi. Nam non",
    blogPara3:
      "Ut ac elit non mi pharetra dictum nec quis nibh. Pellentesque ut fringilla elit. Aliquam non ipsum id leo eleifend sagittis id a lorem. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam massa mauris, viverra et rhoncus a, feugiat ut sem. Quisque ultricies diam tempus quam molestie vitae sodales dolor sagittis.",

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
    blogAuthor: AuthorUbaid,
    blogDisplayPara:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus. Vestibulum ante ipsum  primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur Vestibulum vehicula scelerisque facilisis.THREE",
    blogPara1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus. Vestibulum ante ipsum  primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur Vestibulum vehicula scelerisque facilisis. Sed  mauris.",
    blogPara2:
      "Curabitur non erat quam, id volutpat leo. Nullam pretium gravida urna et interdum. Suspendisse in dui tellus. Cras luctus nisl vel risus adipiscing aliquet.Phasellus convallis lorem dui. Quisque hendrerit,lectus ut accumsan gravida, leo tellus porttitor mi, ac mattis eros nunc vel enim. Nulla facilisi. Nam non",
    blogPara3:
      "Ut ac elit non mi pharetra dictum nec quis nibh. Pellentesque ut fringilla elit. Aliquam non ipsum id leo eleifend sagittis id a lorem. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam massa mauris, viverra et rhoncus a, feugiat ut sem. Quisque ultricies diam tempus quam molestie vitae sodales dolor sagittis.",

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
