# TCP

## 3-way-handshake

TCP는 장치들 사이에 논리적인 접속을 성립하기 위하여 three-way-handshake를 사용한다.

three-way-handshake는 TCP/IP 프로토콜을 이용해 통신을 하는 응용프로그램이 데이터를 전송하기 전에 먼저 정확한 전송을 보장하기 위해 상대방 컴퓨터와 사전에 세션을 수립하는 과정이다.

​	Clinent -> Server : TCP SYN

​	Server -> Client : TCP SYN ACK

​	Client -> Server : TCP ACK

syn = synchronize sequence numbers

ack = acknowledgement

이러한 절차는 TCP 접속을 성공적으로 성립하기위해 반드시 필요하다.

### 역할

- 양쪽 데이터를 전송할 준비가 되어있다는 것을 보장하고, 실제로 데이터 전달을 시작하기 전에 한쪽에서 다른쪽이 분비 되었다는 것을 알 수 있게 한다.
- 양쪽 모두 상대편에 대한 초기 순차일련번호를 얻을 수 있도록한다.

### 과정

1. Client에서 Server로 접속을 요청하는 SYN 패킷을 보낸다. 이때 Client는 SYN, ACK 패킷 응답을 기다리는 SYN_SENT 상태가된다.
2. Server에서 STN 요청을 받고 Client로 SYN와 ACK 응답을 보내고 다시 ACK 응답을 기다린다. SYN_RECEIVED 상태가된다.
3. Clinet가 다시 Server에 ACK를 보낸이후 연결이 이루어지고 데이터가 오가게 된다. 이때 Server는 ESTABLISHED 상태이다.

## 4-way-handshake

3way가 연결을 초기화 하기 위한 단계 였다면, 4way는 세션을 종료하기 위한 단계입니다.

1. Client가 연결을 종료하겠다는 FIN을 전송합니다.
2. 서버는 확인 메시지를 보낸 후 통신이 끝날때까지 TIME_WAIT상태가 됩니다.
3. 서버가 통신이 끝난후 연결이 종료된 후 클라이언트에 FIN flag를 전송합니다.
4. 클라언트가 확인 메시지를 전송합니다.

다양한 상황에서 서버에서 FIN flag를 보낸 후 늦제 도착하는 데이터가 존재할 수 있습니다. 이럴때 데이터 유실을 막기위해  TIME_WAIT상태가 존재하며 일정시간 동안 세션을 유지하여 나머지 패킷을 기다립니다.