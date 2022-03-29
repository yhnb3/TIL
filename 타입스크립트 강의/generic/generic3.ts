function helloArray<T>(message: T[]): T {
  return message[0]
}

helloArray(['hello world', 'world'])

helloArray(["Hello", 4]) // T => string | number


function helloTuple<T, K>(message: [T, K]) : T {
  return message[0]
}

helloTuple(["Hello", "hi"])
helloTuple(["Hello", 5])