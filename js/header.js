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
    // header에 class 추가하기 -> <div class = "header header-active"></div>가 된다.
    if (scrollPositionY > 0) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
});

// 이미지 바꾸기 및 메뉴 펼침
window.addEventListener("load", function () {
  /**
   * 아이콘 이미지 바꾸기
   * <img src="경로" alt="" />
   * 클릭시 이미지 바꾸기 (토글)
   */

  // 1. 버튼 역할하는 ID 찾기
  const mobileButton = document.querySelector("#mb-menu-bt");
  // console.log(mobileButton);

  // 2. 버튼 안에 있는 이미지를 찾기
  const mobileButtonImage = document.querySelector("#mb-menu-bt img");
  // console.log(mobileButtonImage);

  // 3. 버튼 안에 있는 이미지의 src는 무엇일까?
  // const srcString = mobileButtonImage.getAttribute("src");
  // console.log(srcString);

  // 4. 버튼 클릭 처리
  const openIcon = "./images/icon/icon-hbr.png";
  const closeIcon = "./images/icon/icon-close.png";

  mobileButton.addEventListener("click", function () {
    // 이미지의 src에 담겨진 글자를 수정하겠다.
    const imageSrc = mobileButtonImage.getAttribute("src");
    if (imageSrc == openIcon) {
      // 이미지 src를 교체하겠다.
      mobileButtonImage.setAttribute("src", closeIcon);
      mobileMenuBg.classList.add("bg-mb-menu-active");
      mobileMenu.classList.add("mb-menu-active");
    } else {
      // 이미지 src를 교체하겠다.
      mobileButtonImage.setAttribute("src", openIcon);
      mobileMenuBg.classList.remove("bg-mb-menu-active");
      mobileMenu.classList.remove("mb-menu-active");
    }
  });

  // 모바일 메뉴 관련 내용을 찾아서 이름을 주고 보관하자.
  // 1. 모바일 배경
  const mobileMenuBg = document.querySelector(".bg-mb-menu");
  // console.log(mobileMenuBg);

  // 2. 모바일 메뉴
  const mobileMenu = document.querySelector(".mb-menu");
  // console.log(mobileMenu);

  // 반응형 테스트
  // PC버전에서는 모두 다 즉, 버튼도 초기화, 모바일 메뉴도 초기화
  window.addEventListener("resize", function () {
    // 웹브라우저의 너비를 체크한다.
    const windowWidth = window.innerWidth;
    // console.log(windowWidth);

    // css 코드에 반응형 작동이 1024px부터 작동하니까.
    if (windowWidth > 1024) {
      // 모바일 메뉴 버튼을 원래대로 되돌린다.
      mobileButtonImage.setAttribute("src", openIcon);
      mobileMenuBg.classList.remove("bg-mb-menu-active");
      mobileMenu.classList.remove("mb-menu-active");
    }
  });
});
