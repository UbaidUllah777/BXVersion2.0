const ElidFAQ = document.getElementById("idFAQ");

const AllFAQs = [
  {
    id: "idProductCreation",
    careerHeading: "How do I create a product with you?",
    careerPara1:
      "If you have an idea contact us by our online form, e-mail or phone. We'll meet and talk it over. Just be sure to prepare as much info about your idea as possible, it will smoothen the meeting and benefit further cooperation.",
  },
  {
    id: "idMobAppOrWebApp",
    careerHeading: "Should I create a mobile or a web app?",
    careerPara1:
      "Both have their benefits and flaws. Mobile apps are surely more expensive but can provide you with many more data collecting, monetization capabilities than web applications. Progressive Web Apps are a good compromise between a mobile and web app. But remember that sooner or later you may need both mobile and web app and when that moment comes we are here for you.",
  },

  {
    id: "idMethodologies",
    careerHeading: "What methodologies do you use?",
    careerPara1:
      "We have always incorporated the best of modern technologies balanced against the constraints of the context. Agile is a loaded (and bloated!) term, but many of our teams will resemble a Scrum team doing typical ceremonies. We deeply embrace Lean and the Lean Startup practices, putting people over process, and deliberate experimentation.",
  },

  {
    id: "idGurantee",
    careerHeading: "How do you guarantee product quality?",
    careerPara1:
      "We evaluate the result after every two weeks, we test our work (we conduct both development and acceptance tests), we present it to you, we apply your feedback so you know you get what you are paying for.",
  },

  {
    id: "idAfterFinishingApp",
    careerHeading: "What happens after you finish my app?",
    careerPara1:
      "Hopefully the app is exactly what you dreamed of :) But apart from delivering a finished product, we are happy to provide you with technical support and app maintenance should you need it. After all, we know our work inside out. Of course if you want to maintain the app by yourself the source code and all technical data is at your disposal, but even in that case, feel free to contact us if you need any help.",
  },
];

for (const singleFAQ of AllFAQs) {
  ElidFAQ.innerHTML += `
      
      <div class="card card-default">
      <div class="card-header">
        <h4 class="card-title m-0">
          <a
            class="accordion-toggle px-4 pt-3"
            data-bs-toggle="collapse"
            data-bs-parent="#accordion11"
            href="#${singleFAQ.id}"
          >
            ${singleFAQ.careerHeading}
          </a>
        </h4>
      </div>
      <div id="${singleFAQ.id}" class="collapse">
        <div class="card-body px-4 pt-2 pb-5">
          <p class="custom-text-size-1 pb-1 mb-4">
           ${singleFAQ.careerPara1}
          </p>          
        </div>
      </div>
    </div>
      `;
}
