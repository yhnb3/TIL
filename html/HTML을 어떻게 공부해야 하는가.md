## HTML을 어떻게 공부해야 하는가?

#### HTML 명세 읽는법

```html
<a>Is is valid?</a>  {/* 유효한 코드 */}
<a>
  <div>Is is valid?</div>
</a>                         {/* 유효한 코드 */}
<p>
  <a>
 		<div>Is is valid?</div>
	</a>                         
</p>                         {/* 유효하지않다. */}
```

#### 현재 HTML standard

[https://html.spec.whatwg.org](https://html.spec.whatwg.org)

- 브라우저 제조사 연합
- HTML 표준은 탈 권위적이고 살아 있는것이됨.
- W3C HTML 명세는 대체됨.

#### 구현된 기준

[Can I use](https://caniuse.com)

- 웹 표준 명세의 구현정도 

#### HTML 콘텐츠 분류

- Flow content

  body 에 포함할 수 있는 모든 요소.

  base, style , title요소를 제외한 나머지 요소

- Metadata content

  base, link, meta, noscript, script, style, template, title

- Heading Content

- Sectioning Content

  article, aside, nav, section

  문서의 개요를 형성. 헤딩, 헤더, 풋터의 범위

  각 섹셔닝 콘텐츠는 암시적인 개요를 형성

- Phrasing Content

  구문 컨텐츠, 단락을 형성하는 콘텐츠

- Embedded Content

  외부자원을 참조하는 콘텐츠

  iframe, picture, video

- Interactive content

  사용자와 상호작용할 수 있는 콘텐츠

### 기타 HTML 컨텐츠 분류

- Palpable content

  비어있지 않은 콘텐츠 

- Transparent content models

  투명 콘텐츠 모델. 부모의 콘텐츠 모델을 따른다.

  이 태그가 빠졋을때 문법 구조가 유효해야한다.

#### HTML 명세 활용 방법

- Categories

  엘리먼트가 포함된 카테고리

- Context

  이 엘리먼트가 어떤 맥락에서 사용될 수 있는지 확인

  이 엘리먼트의 부모요소가 어떤 요소인지 유추할 수 있게 해준다.

  비규범적이다 => 보통 그렇게 쓰여진다.

- Content model

  Transparent  를 포함한 설명은 자식 요소가 아닌 자기 자신에 대한 설명이다.

  엘리먼트가 가지는 자식 요소를 설명해준다.

  규범적인 설명이다. 반드시 지켜야 한다.

- Tag ommission