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
        <div class="swiper-slide" data-pc="${obj.pc}" data-mb="${obj.mb}">
          <a href="${obj.url}">
            <img src="./images/${obj.pic}" alt="비주얼 슬라이드" />
            <!-- 추가 부분 -->
            <div class="visual-slide-title">${obj.title}</div>
          </a>
        </div>
        `;

        htmlSlide += tag;
      }

      const slideTag = document.querySelector("#slide-api");
      slideTag.innerHTML = htmlSlide;

      const slideList = document.querySelectorAll(
        ".visual-slide .swiper-wrapper .swiper-slide"
      );
      // console.log("innerHtml 이후 ", slideList);

      // 키핑
      slideList.forEach(function (aaa) {
        // console.log(aaa);
      });

      // 추가 : 현재 PC 화면인지 아닌지를 먼저 구분합니다.
      // 추가 : 현재 어떤 상태인지를 먼저 저장해 둡니다.
      // 추가 : 우리는 document.querySelector로
      // .visual-slide .swiper-wrapper . swiper-slide를 찾을 수 있을까요?

      let windowState = "PC";
      // 윈도우 너비 파악
      const windowWidth = window.innerWidth;

      if (windowWidth > 1024) {
        if (windowState != "PC") {
          windowState = "PC";
          // console.log("PC 버전");
        }
      } else {
        if (windowState != "MB") {
          windowState = "MB";
          // console.log("MB 버전");
        }
      }
      window.addEventListener("resize", function () {
        // 윈도우 너비 파악
        const windowWidth = window.innerWidth;
        // 조건에 따라서 버전 확인
        if (windowWidth > 1024) {
          if (windowState != "PC") {
            windowState = "PC";
            // console.log("PC 버전");
          }
        } else {
          if (windowState != "MB") {
            windowState = "MB";
            // console.log("MB 버전");
          }
        }
      });
    })
    .catch(function () {});
});
