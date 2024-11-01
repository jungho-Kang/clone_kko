# 참고사항

## 1.아이콘 폰트

- https://fontawesome.com
- https://xpressengine.github.io/XEIcon
  : index.html link 태그 확인

### 1.1. 본 프로젝트 활용 아이콘 폰트

- https://react-icons.github.io/react-icons

## 2. css 초기화

- reset.css
  : https://meyerweb.com/eric/tools/css/reset/reset.css
  : 간략한 정리

- normalize.css
  : https://necolas.github.io/normalize.css/8.0.1/normalize.css
  : 상세한 정리

- 우리가 만든 common.css 파일

```css
@charset "utf-8";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  /* outline-style: none; */
}
a {
  color: #1e1e1e;
  text-decoration: none;
}
ul,
ol,
li {
  list-style: none;
}
html {
  font-size: 14px;
  overflow-x: hidden;
}

body {
  font-family: "Inter", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-optical-sizing: auto;
  color: #1e1e1e;
  font-size: 14px;
}
```

- 필수 주의 사항

```
반드시 reset 또는 normalize를 먼저 배치하고
본인의 css를 배치해야함
그렇지 않으면 본인의 css가 덮어써져서 정상적 구성 불가능
```

```html
<link
  rel="stylesheet"
  href="https://meyerweb.com/eric/tools/css/reset/reset.css"
/>
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
/>
<link rel="stylesheet" href="./css/common.css" />
<link rel="stylesheet" href="./css/header.css" />
<link rel="stylesheet" href="./css/main.css" />
<link rel="stylesheet" href="./css/card-list.css" />
<link rel="stylesheet" href="./css/footer.css" />
```

## 3. inline, block, inline-block 정리

### 3.1. display:inline

```
<span>, <b>, <strong>, <a>, <img> ...
```

- 가로로 배치됨
- 너비, 높이 비활성
- 패딩, 마진 일부 미지원
- 글자처럼 앞으로 계속 배치됨

### 3.2. display:block

```
<div>, <header>, <main>, <footer>
<ul>, <li>, <h1> ...
```

- 자동으로 너비가 100% 기본값
- 너비, 높이, 마진, 패딩 ... 모두 가능

### 3.3. display:inline-block

- inline 이면서 너비, 높이 등을 셋팅, 즉 block도 같이 부여
- 기본 너비는 지정하지 않으면 내용물 만큼 소비
- 가로로 연속 배치 가능

## 4. css 정리

- VSCode Extentsions : PostCSS Sorting 설치

```
정렬 속성 셋팅
관리 도구 > 설정 > setting.json 검색 > 파란색 글자 "Edit in settings.json" 클릭
```

- 다음 항목을 추가 (쉼표!!! 꼭 넣어주기)

```json
"postcssSorting.config": {
  "properties-order": ["display", "list-style", "position", "top", "right", "bottom", "left", "float", "clear", "width", "height", "padding", "margin", "border", "background", "color", "font", "font-weight", "font-size", "line-height", "font-family", "letter-spacing", "text-decoration", "text-align", "verticla-align", "white-space", "content", "animation"]
}
```

- 키보드 단축키 셋팅하기

```
관리 도구 > 바로가기 키 > 클릭 > post 검색 > 중복 안된 키 조합
Ctrl + Alt + C
```

## 5. css 표준검사

- https://jigsaw.w3.org/css-validator
- https://caniuse.com

## 6. html 표준검사

- https://validator.w3.org
- https://caniuse.com

## 7. favicon

- 예의, 신뢰도 향상
- https://realfavicongenerator.net

```html
<link rel="icon" href="경로/파일명" type="image/x-icon" />
```
