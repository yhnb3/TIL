###  포토샵 닫고 css 열기

#### 삼각형 만들기

```css
p {
}
p::before {
  content: '';
  float: left;
  vertical-align: middle;
  margin-right: 8px;
  border: 40px solid transparent;
  border-left-color: red;
}
```

### 꺽쇠 화살표 만들기

```css
p::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 8px;
  margin-right: 8px;
  border: 2px solid red;
  border-top: 0;
  border-right: 0;
  transform: rotate(-45deg);
  transform-origin: 25% 25%;
}
```

#### 스피너 만들기

- 정사각형 border-radius => 50%
- 원하는 만큼 border 주고
- border-top-color => transparent 
- animation으로 spin 돌리기

### 격자 배경 만들기

- liner-gradient(to bottom, transperent 47px, silver 47px) 0 0 / 100vw 48px repeat-y, x축 실선 그리기
- liner-gradient(to right, transperent 47px, silver 47px) 0 0 / 100vh 47px repeat-x, y축 실선 그리기
- black 배경 색

#### 체커 배경 만들기

#### 햄버거 메뉴 만들기

- 첫번째 박스로 그림자로 아래 두 줄 그리기
- ::after로 알림 표시 동그라미 그릴 수 있다.

#### 선택 컨트롤 만들기

