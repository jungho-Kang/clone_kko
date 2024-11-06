// 협업에서는 소스 컨벤션 중요
window.addEventListener("load", function () {
  /*
    1. 사용자가 스크롤바로 화면아래로 이동시
    2. header 클래스 하단에 라인을 생성
    3. 사용자가 스크롤바로 화면 최상단으로 이동시
    4. header 클래스에 하단에 라인제거
    */
  //   header를 보관함에 담아둔다.
  const header = document.querySelector(".header");
  //   console.log(header);

  //   스크롤 체크하기
  window.addEventListener("scroll", function () {
    const scrollPositionY = window.scrollY;
    // console.log(scrollPositionY);
    // header에 class 추가하기
    if (scrollPositionY > 0) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
});

// 이미지 바꾸기 및 메뉴 펼침
window.addEventListener("load", function () {});
