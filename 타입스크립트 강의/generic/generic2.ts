function helloBasic<T, U>(message: T, comment: U) : T {
  return message
}

helloBasic<string, number>('message', 39)  // 실행시에 지정한 타입이 아닌 변수는 넣을 수 없다.
helloBasic("Mark", "Jessi") // T가 추론이 된다. 이거와 같은 경우 "Mark"으로 추론이 된다.

