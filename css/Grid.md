## Grid

코드는 짧고 사연은 길다.

격자를 이용하여 내용의 크기와 위치를 제어하는 방법

#### 명시적 그리드

트랙의 크기와 수량을 분명하게 선언한 그리드

#### 암시적 그리드

명시적 그리드 외부에 배치되어 `grid-auto` 속성으로 흐름 방향과 크기를 결정하는 그리드

#### gap

#### grid track 생성 (제어)

grid: auto-flow : 컬럼 진행 방향을 결정할 수 있다.

### 배치와 병합

grid-area: 2/ 3 => row start : 2, col start: 3

grid-area : span을 이용하여 병합이 가능하다.

### Dense

비어있는 공간을 메꾸는 개념

채우지 못한 빈 영역이 있으면 흐름을 거꾸로 올라가서 빈 공간을 채우는 개념이다.

#### grid auto-full/fit

