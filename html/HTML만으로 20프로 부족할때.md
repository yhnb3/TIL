## HTML만으로 20프로 부족할때

아리아 명세와 기법들

ARIA : 접근가능한 고기능 인터넷 애플리케이션

HTML의 접근성 문제를 보완하는 W3C 명세

return to HTML

웹 접근성 문제의 80%는 HTML 문제이다.

#### 실전 ARIA

역할(roles)

- tablist | tab | tabpanel

  현재 페이지 내용에 색인을 제공하는 구조를 의미.

  네이게이션하고는 명확히 다르다.

- tooltip

  보통 초점을 받으면 설명을 표시하는 문맥 팝업

  툴팁은 초점을 받지 않아야한다.

  참조하는 콘트롤에는 `aria-describedby="ID reference list"`속성으로 연결

- status

  실시간 결과정보 이며 `alert`만큼 중요하지 않음.

  이 요소를 갱신할 때 초점을 받지 않아야 합니다.

  이 역할을 선언하면 `aria-live="polite" aria-atomic="true"`가 할당 됩니다.\

  의미론에 따라 `output`요소를 사용 가능.

- alert

  **긴급한 사항**

  시간에 민감하고 중요한 실시간 콘텐츠

  이 요소를 갱신할 대 초점을 받지 않아야 한다.

  `aria-live="assertive"` 속성과 `aria-atomic="true"` 할당

  ex) 송금 실패

상태(states)

- aria-current

  현재 맥락과 일치하는 항목을 의미

  - page : 현재 페이지 와 일치하는 시각적으로 강조한 링크

    ex) 네비게이션 링크 중 현재 페이지 링크에 적용가능

  - step : 현재 단꼐와 일치하는 시각적으로 강조한 링크

- aria-selected

  단일 또는 다중 선택이 가능한 요소에 선택 상태에 명시하는 의미

  tab요소에 가장 흔희 사용 `true or false`

- aria-haspopup

  a or button 요소

  눌렀을때 팝업이나 서브요소가 있다면? 이것을 알려준다,

  팝업 유형은 menu, dialog 유형이 빈번

- aria-expanded

  제어 대상의 확정 또는 축소 상태

  a or button 

  true or false

- aria-hidden

  보조기기가 무시하는 영역을 설정

- aira-invalid

  인풋 요소에 사용

  사용자의 입력값이 요구하는 형식과 일치하는지 여부를 나타냄

  오류가 있을 때만 true 설정

속성(properties)

- aria-controls

  현재 요소가 제어하는 대상을 명시 `role="tab"`

  값은 하나 이상의ID 참조 공백을 기준으로 여러 아이디 참조

- arai-live

  실시간으로 내용을 갱신하는 영약

- aria-labelledby

  간결한 설명을 참조 

  label을 대신한다.

  aria-label 속성보다 운선 순위다 높다

  