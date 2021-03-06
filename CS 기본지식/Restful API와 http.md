## RESTful API

restful 한 API를 의미한다.

REST 의 6가지 원칙

- uniforn interface
- stateless
- caching
- Client-server
- hierarchical system
- code on demand

### RESTful 하게 API를 디자인 한다는 것은 무엇을 의미하는가?

1. `리소스`와 `행위`를 명시적이고 직관적으로 분리한다.
   - `리소스`는 반드시 명사로 명시 되어야한다.
   - `행위`는 `Http method`로 표현한다 (`GET`,`PUT`,`POST`,`PATCH`,`DELETE`)
2. Message는 Header 와 Body를 명확하게 분리해서 사용한다.
   - `Entity`에 대한 내용은 body에 담는다.
3. API 버전을 관리한다.
   - 환경은 항상 변하기때문에 API의 signature가 변할 수 있을에 유의하자.
   - 특정 API를 변경할때는 하위호환성을 보장해야한다.
4. 서버와 클라이언트가 같은 방식을 사용해서 요청하도록한다.
   - 브라우저와 서버 모두 `form-data`로 보내던지, `json`으로 보내던지 하나의 방법으로 통일한다.

### 장점

1. `open api`를 제공하기 쉽다
2. 멀티 플랫폼 지원 및 연동 용이
3. 원하는 타입으로 데이터를 주고 받을 수 있다.
4. 기존 웹 인프라(HTTP)를 그대로 사용할 수 있다.

### 단점

1. 사용할 수 있는 메소드가 4가지 뿐이다.
2. 분산 환경에는 부적합하다.
3. HTTP 통신모델에 한해서만 사용가능하다.



## HTTP

Hyper Text Transfer Protocol :  인터넷에서 데이터를 주고받을 수 있는 프로토콜, 즉 규칙

### 요청

클라이언트가 요청을 보내면 서버가 응답에 대해 정보를 담아 클라이언트에 보냅니다. 이런 정보가 담긴 메시지를 HTTP 메시지라고 합니다. HTTP 메시지는 시작줄, 헤더, 본문 으로 구성됩니다.

### 응답

응답 또한 시작줄, 헤더, 본문으로 구성 되어있으며 흔히 우리가 주소창에 주소를 치면 그것이 서버에 요청되고 서버는 html을 본문에 담에 응답메시지를 보냅니다.

