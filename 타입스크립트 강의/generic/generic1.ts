function helloString(message: string) : string {
  return message
}

function helloNumber(message: number) : number {
  return message
}

// 더 많은 반복된 함수들...

function hello(message: any) : any {
  return message
}

console.log(hello('meesage'))
console.log(hello(1))

function helloGeneric<T>(meesage: T): T {
  return meesage
}

console.log(helloGeneric('Mark').length)
console.log(helloGeneric(1))
console.log(helloGeneric(true))