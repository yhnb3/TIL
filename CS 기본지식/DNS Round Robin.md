# DNS Round Robin

라운드 로빈 dns는 별도의 소프트웨어 혹은 하드웨어 로드밸런싱 장비를 사용하지 않고,  dns만을 사용하여 도메인 레코드 정보를 조회하는 시점에서 트래픽을 분산하는 기법이다. 웹 뿐만 아니라, 도메인을 사용하는 모든 서비스에서 사용한다.

## DNS란?

> 사람이 읽을 수 잇는 도메인 이름을 머신이 읽을 수 있는 IP주소로 변환합니다.

### 라운드 로빈 DNS의 원리

웹 서버로 예를 들자면, 웹서비스를 담당할 여러 대의 웹 서버는 자신의 공인 IP를 각각 가지고 있다. 웹 사이트에 접속을 원하는 사용자가 해당 도메인 주소를 브라우저에 입력하면, DNS는 도메인의 정보를 조회하는데, 이때 IP 주소를 여러 대의 서버 IP리스트 중에서 라운드 로빈 형태로 랜덤하게 하나 혹은 여러개를 선택하여 다시 사용자에게 알려준다.

결과적으로 웹 사이트에 접속하는 다수의 사용자는 실제로는 복수의 웹 서버에 나뉘어 접속하게 되면서 자연스럽게 서버의 부하가 분산되는 방식이다.

### 문제점

1. 서버 수 만큼 공인 IP 주소가 필요함 부하 분산을 위해 서버의 대수를 늘리기 위해서는 그 만큼의 공인 IP가 필요하다.

2. 균등하게 분산되지 않음

   스마트폰의 접속은 캐리어 게이트웨이라는 프록시 서버를 경유한다. 프록시 서버에서는 이름변환 결과가 일정시간 동안 캐싱되므로 같은 프록시 서버를 경유하는 접속은 항상 같은 서버로 접속된다. DNS의 TTL 값을 짧게 설정함으로써 어느 정도 해소가 되지만, TTL에 따라 캐시를 해제하는 것은 아니므로 반드시 주의 필요하다.

3. 서버가 다운되도 확인불가

   DNS 서버는 웹 서버의 부하나 접속 수 등의 상황에 따라 질의 결과를 제어 할 수 없다. 웹 서버의 부하가 높아서 응답이 느려지거나 접속수가 꽉 차서 접속을 처리 할 수 없는 상황인지를 전혀 감지할 수가 없기 때문에 어떤 원인으로 다운 되더라로 이름 검출하지 못하고 유저들에게 제공한다. 이때문에 다운된 IP서버로 유저를 인도하기도 한다.

### 해결방법

WRB

웹 서버에 가중치를 가미하여 처리능력이 빠른 웹 서버에 높은 가중치를 설정하는 방법.

least connection

접속 클라인언트 수가 가장 적은 서버를 선택한다. 로드밸런서에서  connection 수를 관리하거나 각 서버에서 주기적으로 알려주는 것이 필요하다.