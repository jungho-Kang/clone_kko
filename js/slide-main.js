window.addEventListener("load", function () {
  const visualSlideSW = new Swiper(".visual-slide", {
    loop: true,
    pagination: {
      el: ".visual-slide .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
  });
  // 개발자 추가 작업 : 마우스가 Enter가 되면 (마우스 걸치면)
  const visualSlide = document.querySelector(".visual-slide");
  // console.log(visualSlide);

  visualSlide.addEventListener("mouseenter", function () {
    // console.log("오버");
    visualSlideSW.autoplay.stop();
  });
  visualSlide.addEventListener("mouseleave", function () {
    // console.log("아웃");
    visualSlideSW.autoplay.start();
  });

  const MAIN_SLIDE_DATA_URL = "/apis/main.json";

  fetch(MAIN_SLIDE_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      // console.log("슬라이드 : ", result);
      let htmlSlide = "";

      for (let i = 0; i < result.length; i++) {
        const obj = result[i];

        const tag = `
        <div class="swiper-slide">
          <a href="${obj.url}">
            <img src="./images/${obj.pic}" alt="비주얼 슬라이드" />
            <div class="visual-slide-title">${obj.title}</div>
          </a>
        </div>
        `;

        htmlSlide += tag;
      }

      const slideTag = document.querySelector("#slide-api");
      slideTag.innerHTML = htmlSlide;
    })
    .catch(function () {});
});
