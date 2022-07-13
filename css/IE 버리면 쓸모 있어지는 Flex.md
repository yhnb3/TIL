## IE 버리면 쓸모 있어지는 Flex

플렉스는 박스의 

### 방향 크기 정렬 순서

를 정할 수 있다.

### 아이템 크기 자동 분배

#### 진행축 정렬 : jusify-content

#### 교차축 정렬 : 

align-items : 한줄

/-self/ : 박스 하나만

-content : 여러 줄 일때

### 감싸기

flex-direction/-wrap/-flow

### 기본적인 용어

플렉스 컨테이너 속에 플렉스 아이템이 있다.

### 교차 축

진행 방향과 수직이 되는 방향 => align 속성의 기준이 되는 축이다.

### 팽창 과 수축

flex-grow: 팽창 지수 , default : 0

flex-shrink : 수축 지수, default : 1

flex-basis : auto, item의 width에 따라 정해진다.

flex-grow: 양의 free space 발생 시 플렉스 아이템의 팽창을 제어

flex-shirink: 음의 free space 발생 시 플렉스 아이템의 수축을 제어.

flex-basis : 플렉스 아이템의 진행 방향 기본 크기를 설정함으로 써 FS 초기 값에 영향을 준다.

기본을 0으로 하는걸 추천한다.

#### 실무에서

```css
.item {
  flex: 1
}
```

이런식으로 자주 사용.

### 플렉스 아이템의 방향과 순서

reverse를 쓰기 시작하면 헷갈려지기 시작하므로 사용을 자제하자.

order 는 상대적으로 적용된다.

### 플렉스 아이템의 정렬과 간격

justify-content : space-evenly => 플렉스 아이템 양끝 freespace와 아이템 사이 freespace를 같게 한다.

align-content : 여러 줄의 교차축 정렬과 간격

gap: 다중 컬럼, 플렉스, 그리드 아이템 상의 간격 `<row-gap> <column gap>?`





