## CSS 디스플레이와 포지션

### Display

inline, block, inline-block, flex, grid, contents, contents

### changed Display

position : absoulte | fixed

float : left | right

=> display : block

### inline

요소를 행으로 배치 흐름방향

높이, 너비, 수직 마진 : X

### Block

흐름 방향은 수직 폭이 100%에 가깝게 설정된다.

수직 마진은 중첩된다.

### Inline Block

흐름 방향은 수평이지만

너비 높이 수직 마진 설정가능하고

수직마진은 중첩되지 않는다.

### Display none

어떤 장치도 표시하거나 접근할 수 없음.

### display none vs [hidden]

태그에 `hidden attribute` 사용

### Flow root

블록 컨테이너가 되고

포함 컨텐츠는 새 블록 형식 문맥이 된다.

float margin 속성을 다르게 처리

-> 블록이 된다.

-> 포함한 float요소는 컨테이너 끝에서 clear된다.

->부모 자식 요소의 수직 마진을 병햡하지 않는다.

### positon

#### static

배치기준 없음. 흐름에 따라 배치

#### relative

left, right, top, bottom, z-index, inset(left, right, top, bottom을 한꺼번에 작성가능한 단축 속성)

박스의 현재 위치가 배치 기준

배치를 변경할 때 다른 박스의 흐름을 깨지 않음

자식 또는 자손 요소의 absolute 배치 기준이 됨.

 #### absolute

일반적인 흐름에서 완전히 이탈.

부모, 형제의 크기나 위치에 전형 영향을 미치지 않음.

조상 박스가 relative, absolute, fixed, **transform**일때 조상 기준으로 배치

#### fixed

뷰포트가 배치 기준

조상 요소에 **transform** 속성이 있으면 **transform**속성이 배치 기준이 된다.

#### sticky

스크롤 포트가 배치 기준

부모쇼소가 스크롤 포트에 보이는 동안 스크롤 포트 기준으로 고정

부모요소가 스코롤 밖으로 이탈 하면 고정을 멈춤.

조건

1. 스크롤 포트라 불리는 스크롤바 박스
2. 스크롤 포트 안에 자기자신
3. 스크롤 포트안에서 자식요소를 감싸는 부모요소

#### z-index

z-index는 부모요소보다 높을 수 가 없다.