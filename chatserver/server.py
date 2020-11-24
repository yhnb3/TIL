from socket import *
import threading

port = 10000

server_socket = socket(AF_INET, SOCK_STREAM)
server_socket.bind(('', port))
server_socket.listen(5)

user_list = {}
def receive(client_socket, addr, user):
    while 1:
        data = client_socket.recv(1024)
        string = data.decode()

        if string == "/종료" : 
            msg = f'{user.decode()}가 퇴장하였습니다.'
            for con in user_list.values():
              try:
                  con.sendall(msg.encode())
              except:
                  print("연결이 비 정상적으로 종료된 소켓 발견")
            print(msg)
            break
        string = "%s : %s"%(user.decode(), string)
        print(string)
        for con in user_list.values():
            try:
                con.sendall(string.encode())
            except:
                print("연결이 비 정상적으로 종료된 소켓 발견")
    del user_list[user]
    client_socket.close()

while True:
    client_socket, addr = server_socket.accept()
    user = client_socket.recv(1024)
    user_list[user] = client_socket
    print(f'{user.decode()}가 입장하였습니다.')

    receive_thread = threading.Thread(target=receive, args=(client_socket, addr,user))
    receive_thread.start()
  