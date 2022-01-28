```typescript
class LocalDB<T> {
    contructor(private localStorageKey: string) {
        
    }
    add(v : T) {
        localStorage.setItem(this.localStorageKey, JSON.stringfy(v))
    }
    get(): T {
        const v = localStorage.getItem(this.localStorageKey)
        return (v) ? JSON.parse(v) : null
    }
}
interface User { name: string }

const userDB = new LocalDB<User>('user')
userDB.add({ name: 'jay'})
const user1 = userDB.get()
```

클래스에 제네릭 할 수 있다.

위 함수를 예를 들면 `add()`함수로 받은 객체타입을 `get()`함수로 리턴하게 된다. 좀 더 직관적으로 바라볼 수 있게 된다.

그리고 인스턴스를 만들때 제네릭을 설정하면 또 특정한 매개변수만을 다루는 인스턴스로 설정가능하다.

