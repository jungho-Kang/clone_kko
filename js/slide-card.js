window.addEventListener("load", function () {
  const CARDS_DATA_URL = "/apis/cards.json";
  fetch(CARDS_DATA_URL)
    .then(function (response) {
      console.log("카드 : ", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      console.log("카드 결과 : ", result);
      let htmlCards = "";
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];

        const tag = `
        <div class="swiper-slide">
          <a href="${obj.link}" class="card-wrap">
            <div class="card-img">
              <img src="./images/${obj.imgpath}" alt="card" />
            </div>
            <div class="card-info">
              <h5 class="card-cate">${obj.cardname}</h5>
              <span class="card-count">${obj.cardno}</span>
            </div>
          </a>
        </div>
        `;
        // console.log(tag);
        htmlCards += tag;
      }
      // console.log(htmlCards);
      const cardsTag = document.querySelector(
        ".mb-card-slide-wrap .swiper-wrapper"
      );
      // console.log(cardsTag);
      cardsTag.innerHTML = htmlCards;

      // Swiper 적용
      const cardSlide = new Swiper(".mb-card-slide-wrap", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
      });
    })
    .catch(function () {});
});

// 슬라이드 만들기
// window.addEventListener("load", function () {
//   const cardSlide = new Swiper(".mb-card-slide-wrap", {
//     slidesPerView: 4,
//     spaceBetween: 20,
//     loop: true,
//   });
// });
