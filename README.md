# 카드리스트 만들기

## 1. 주의 사항

```
a 태그는 너비와 높이를 줄 수 없다.
이유는 초기값이 display: inline이기 때문이다.
```

```
a 태그에 너비, 높이, 마진, 패딩 주려면
diplay: block을 손으로 적어준다.
팁! display: flex를 준다.
```

```
span 태그는 너비와 높이를 줄 수 없다.
이유는 초기값이 display: inline이기 때문이다.
```

```
span 태그에 너비, 높이, 마진, 패딩 주려면
diplay: block을 손으로 적어준다.
팁! display: flex를 준다.
```

## 2. 정말 중요한 내용

### 2.1. position

#### 2.1.1. position:fixed

```
웹 브라우저 기준으로 위치 고정
스크롤 되어도
화면이 넓어도
화면이 좁아도
화면이 짧아도
위치가 고정됨
```

- 주의사항

```
position:fixed 하면 웹 브라우저 기준이라서
화면에 보이는 내용의 레이아웃에서 높이가 반영이 안된다.
```

```
position:fixed 하면 너비를 설정해야 한다.
배경색도 설정해야 함
웹 브라우저 기준으로 left, top, bottom, right도 설정
```

```
position:fixed하면
우선 전체너비를 기준으로
내용과 구분해서 div 구성하기를 추천
```

```
화면 즉, z-index값을 많이줘야함
z-index: 99999999999 (화면 젤 앞에 표시 되도록 하는 것)
```

#### 2.1.2. position:absolute

- fixed와 똑같다.
- 차이점은 body를 기준으로 한다.
- 반드시 원하는 css에 relative가 있으면 기준이 바뀐다.

#### 2.1.3. position:relative

- absolute의 기준을 세운다.
