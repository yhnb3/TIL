# TCP & UDP

## UDP

`udp(user datagram protocol)` 비연결형 프로토콜이다. IP 데이터 그램을 캡슐화 하여 보내는 방법과 연결 설정을 하지 않고 보내는 방법을 제공한다. `UDP`는 흐름제어, 오류제어 또는 손상된 세그먼트의 수신에 대한 재전송을 하지 않는다.

종종 클라이언트는 서버로 짧은 요청을 보내고, 짧은 응답을 기대한다. 만약 요청 또는 응답이 손실된다면, 클라이언트는 timeout 되고 다시 시도할 수 있으면 된다. 

`udp`를 사용하는 것에는 `dns`가 있다. 어떤 호스트 네임의 IP주소를 찾을 필요가 있는 프로그램은, DNS 서버로 호스트 네임을 포함한 UDP 패킷을 보낸다. 이 서버는 호스트 IP주소를 포함한 UDP패킷으로 응답한다. 사전에 살정이 필요하지 않으며 그 후에 해제가 필요하지 않다.

## TCP

대부분의 인터넷 응용 분야들은 신뢰성과 순차적인 전달을 필요로 한다. UDP는 이부분을 만족 시키기 어려우므로TCP가 탄생한 것이다. TCP는 신뢰성이 없는 인터넷을 통해 종단간 신뢰성 잇는 바이트 스트림을 전송하도록 설계되었다. TCP 서비스는 송신자와 수신자 모두 소켓이라고 부르는 종단점을 생성함으로써 이루어진다. TCP에서 연결설정은 3-way-handshake를 통해 행해진다.

모든 TCP 연결은 전이중, 점대점 방식이다. 전이중이란 전송이 양방향으로 동시에 일어날 수 있음을 의미한다. 점대점이란 각 연결이 정확히 2개의 종단점을 가지고 있음을 의미한다. TCP는 멀티캐스팅이나 브로드캐스팅을 지원하지 않는다.