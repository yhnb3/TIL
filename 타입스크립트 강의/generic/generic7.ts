interface IPerson {
  name: string;
  age: number;
}

type Keys = keyof IPerson; // IPerson의 key를 가진다.

const person : IPerson = {
  name: 'kw',
  age: 30
}

function getPrpop<T, K extends keyof T>(obj: T, key: K): T[K] {  // 이런식으로 정의하면 K는 union type이 아니라 지정된 type 형식으로 나온다. 
  return obj[key]                                                // 그림 리턴 값인 T[K]도 지정된 타입으로 설정된다.
  
}

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value
}
