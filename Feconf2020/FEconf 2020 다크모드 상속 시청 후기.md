# FEconf 2020 다크모드 상속 시청 후기

일단 다크모드를 하나 설정하는데 굉장한 고민이 들어가 있다는 것에 감동을 받았다. 버튼하나를 통해 클래스를 추가하면 간단히 될것 이라는 생각이었지만 처음 렌더링 되는 순간 부터 사용자의 좋은 경험을 위해 많은 고민을 한다는 것 자체가 저에게는 좋은 도움이 된것 같습니다.  

1. 다크 모드를 설정하기 위해 클래스 설정을 이용하려 하였다.
2. 앱과의 통신을 통해 다크모드인지를 판단
3. 요청을 받은후 클래스를 추가 하다 보니 기본적으로 렌더링을 라이트 모드를  하게 되니 라이트 모드에서 다크모드로 바뀌는 순간 사용자는 불편함을 느끼게 된다.
4. 앱이 다크모드를 이용하고 있다는 것을 알기 위해 앱에서 받는 요청의 헤더에 다크모드 유무를 추가 하였다. 그래서 서버사이드 렌더링을 한 후 클라이언트에게 전달
5. 하지만 ssr을 모든 환경에서 적용할 수 가 없다.
6. 그래서 css 서버를 만들어서 css를 동적으로 생성하기로함.
7. 그럼 어떻게 다크모드를 인지 할 것인가? => user-agent에 다크모드 유무를 추가한다.
8. 그리고 lendering-blocking-css를 통해 css가 추가되면 렌더링이 되도록 한다.
9. 완성!

사실 모든 것을 이해한 것은 아닙니다. 앱에서의 요청, 서버에서의 요청을 구분하는 것도 쉽지 않았고, 모든 브라우저에서 받는 user-agent도 잘 이해가 되진 않았지만 뭔가 사용자의 경험을 좋게 하기 위해 이러한 노력을 했다는 것이 몸소 느껴져서 굉장히 좋았던 것 같습니다.

