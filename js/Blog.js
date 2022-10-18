// const ElblogImg = document.getElementById("blogImg");
// const ElidBlogPostHeading = document.getElementById("idBlogPostHeading");
const ElidBlogsContainer = document.getElementById("idBlogsContainer");
const ElSideBlogsInfo = document.getElementById("SideBlogsInfo");

const AuthorShafiq = "M.SHAFIQ";
const AuthorUbaid = "UBAID";

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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus. Vestibulum ante ipsum  primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur Vestibulum vehicula scelerisque facilisis.ONE",
    blogPara1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus. Vestibulum ante ipsum  primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur Vestibulum vehicula scelerisque facilisis. Sed  mauris.",
    blogPara2:
      "Curabitur non erat quam, id volutpat leo. Nullam pretium gravida urna et interdum. Suspendisse in dui tellus. Cras luctus nisl vel risus adipiscing aliquet.Phasellus convallis lorem dui. Quisque hendrerit,lectus ut accumsan gravida, leo tellus porttitor mi, ac mattis eros nunc vel enim. Nulla facilisi. Nam non",
    blogPara3:
      "Ut ac elit non mi pharetra dictum nec quis nibh. Pellentesque ut fringilla elit. Aliquam non ipsum id leo eleifend sagittis id a lorem. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam massa mauris, viverra et rhoncus a, feugiat ut sem. Quisque ultricies diam tempus quam molestie vitae sodales dolor sagittis.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus. Vestibulum ante ipsum  primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur Vestibulum vehicula scelerisque facilisis.TWO",
    blogPara1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus. Vestibulum ante ipsum  primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur Vestibulum vehicula scelerisque facilisis. Sed  mauris.",
    blogPara2:
      "Curabitur non erat quam, id volutpat leo. Nullam pretium gravida urna et interdum. Suspendisse in dui tellus. Cras luctus nisl vel risus adipiscing aliquet.Phasellus convallis lorem dui. Quisque hendrerit,lectus ut accumsan gravida, leo tellus porttitor mi, ac mattis eros nunc vel enim. Nulla facilisi. Nam non",
    blogPara3:
      "Ut ac elit non mi pharetra dictum nec quis nibh. Pellentesque ut fringilla elit. Aliquam non ipsum id leo eleifend sagittis id a lorem. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam massa mauris, viverra et rhoncus a, feugiat ut sem. Quisque ultricies diam tempus quam molestie vitae sodales dolor sagittis.",

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
];

for (const singleBlogPost of BxBlogPosts) {
  if (ElidBlogsContainer) {
    ElidBlogsContainer.innerHTML += ` <div class="BxBlogPost col-lg-6 isotope-item text-start">
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
