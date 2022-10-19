const ElidIndex1stBlogImg = document.getElementById("idIndex1stBlogImg");
const ElidIndex2ndBlogImg = document.getElementById("idIndex2ndBlogImg");
const ElidIndex3rdBlogImg = document.getElementById("idIndex3rdBlogImg");
const ElidIndex1stBlogHeading = document.getElementById(
  "idIndex1stBlogHeading"
);
const ElidIndex2ndBlogHeading = document.getElementById(
  "idIndex2ndBlogHeading"
);
const ElidIndex3rdBlogHeading = document.getElementById(
  "idIndex3rdBlogHeading"
);

const ElidIndex1stBlogDate = document.getElementById("idIndex1stBlogDate");
const ElidIndex2ndBlogDate = document.getElementById("idIndex2ndBlogDate");
const ElidIndex3rdBlogDate = document.getElementById("idIndex3rdBlogDate");
const ElidIndex1stBlogAUthorName = document.getElementById(
  "idIndex1stBlogAUthorName"
);
const ElidIndex2ndBlogAUthorName = document.getElementById(
  "idIndex2ndBlogAUthorName"
);
const ElidIndex3rdBlogAUthorName = document.getElementById(
  "idIndex3rdBlogAUthorName"
);
const ELidIndex1stBlogPara = document.getElementById("idIndex1stBlogPara");
const ELidIndex2ndBlogPara = document.getElementById("idIndex2ndBlogPara");
const ELidIndex3rdBlogPara = document.getElementById("idIndex3rdBlogPara");

for (const singBlogForIndex of BxBlogPosts) {
  if (singBlogForIndex.id === "WhyAgileIsTheKeyToSuccess") {
    ElidIndex1stBlogImg.src = `${singBlogForIndex.blogImg}`;
    ElidIndex1stBlogHeading.textContent = `${singBlogForIndex.blogShortHeading}`;
    ElidIndex1stBlogDate.textContent = `${singBlogForIndex.blogPostedOnDate}`;
    ElidIndex1stBlogAUthorName.textContent = `${singBlogForIndex.blogAuthor}`;
    ELidIndex1stBlogPara.textContent = `${singBlogForIndex.blogDisplayPara}`;
  }
  //2nd Blog
  else if (singBlogForIndex.id === "InOverviewOfDesignPatterens") {
    ElidIndex2ndBlogImg.src = `${singBlogForIndex.blogImg}`;
    ElidIndex2ndBlogHeading.textContent = `${singBlogForIndex.blogShortHeading}`;
    ElidIndex2ndBlogDate.textContent = `${singBlogForIndex.blogPostedOnDate}`;
    ElidIndex2ndBlogAUthorName.textContent = `${singBlogForIndex.blogAuthor}`;
    ELidIndex2ndBlogPara.textContent = `${singBlogForIndex.blogDisplayPara}`;
  }

  //3rd Blog
  else if (singBlogForIndex.id === "WhyJavaScriptPopular") {
    ElidIndex3rdBlogImg.src = `${singBlogForIndex.blogImg}`;
    ElidIndex3rdBlogHeading.textContent = `${singBlogForIndex.blogShortHeading}`;
    ElidIndex3rdBlogDate.textContent = `${singBlogForIndex.blogPostedOnDate}`;
    ElidIndex3rdBlogAUthorName.textContent = `${singBlogForIndex.blogAuthor}`;
    ELidIndex3rdBlogPara.textContent = `${singBlogForIndex.blogDisplayPara}`;
  }
}
