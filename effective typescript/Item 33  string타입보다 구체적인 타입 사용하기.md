## Item 33 : string타입보다 구체적인 타입 사용하기.

string이라고 하지만 결국에는 우리는 좀 더 구체적인 타입만을 사용할 때가 있습니다.

```tsx
interface Album {
  artist: string;
  title: string;
  releaseDate: string;
  recordType : string;
}

// releaseDate와 recordType은 string이 아닌 좀 더 좁은 타입을 사용하는 것이 맞습니다.
type RecodingType = 'live' | 'studio'

interface Album {
  artist: string;
  title: string;
  releaseDate: Date;
  recordType: RecodingType;
}
```

이러한 방식을 타입을 지정하는 것에는 3가지 장점이 있습니다.

첫번째로 타입을 명시적으로 지정함으로 써 다른곳으로 값이 전달 되어도 타입의 정보가 유지 됩니다.

두번째로 타입을 명시적으로 정의하고 해당 타입의 의미를 설명하는 주석을 붙여 넣을 수 있습니다.

세번째로 keyof 연산자로 더욱 세밀하게 객체의 속성 체크가 가능합니다.

예를들어 어떤 배열에서 한 필드의 값만 추출하는 함수를 작성한다고 생각해 봅시다.

> 이를 구현한 라이브러리에서는 이를 pluck이라 부릅니다.

```tsx
function pluck(records, key) {
  return records.map(record => record[key]);
}

function pluck(records: any[], key: string): any[] {
	  return records.map(record => record[key]); // any는 정밀하지 못하니 좀 더 바꿔 봅시다.
}

function pluck<T>(records: T[], key: string): any[] {
	  return records.map(record => record[key]); 
} // key 타입이 string이라 범위가 너무 넓다는 에러를 보여줍니다.

function pluck<T>(records: T[], key: keyof T) {
	  return records.map(record => record[key]); 
} // 이렇게 만들면 오류는 줄어들지만

const releaseDates = pluck(albums, 'releaseDate') // (string | Date)[]  리턴 타입이 원하는대로 유추 되지 않습니다.

function pluck<T, K extends keyof T>(records: T[], key: K): T[k][] {
	  return records.map(record => record[key]); 
} // 드디어 완성했습니다.
```

다음과 같이 명시적으로 타입을 지정함으로써 제대로된 반환타입을 추론하고 무효한 매개변수를 효과적으로 방지할 수 있습니다.

## Item 34 : 부정확한 타입보다는 미완성 타입을 사용하기

타입을 더 정확하게 만드려는 시도가 오히려 더 나쁜 결과를 만들기도 합니다.

타입에 의존할 수 있는 경우를 피하고 오히려 미완성 타입을 사용하는 것이 더 효과적일 수 있습니다.

## Item 35: 데이터가 아닌 API와 명세를 보고 타입 만들기

api를 통해서 데이터를 받아오는 경우 데이터만 보고 타입을 생성할 경우 예상치 못한 오류가 생길 수 있습니다.

그래서 api와 명세를 기반으로 타입을 만들어서 이러한 오류를 사전에 차단하는 것이 좋습니다.

GraphQL을 사용할 경우 GraphQL이 제공하는 타입 생성 기능을 이용할 수 도 있습니다.

## Item 36 : 해당 분야의 용어로 타입 이름 짓기

타입의 이름을 지정할 때 어떠한 특정 분야에서 사용하는 용어를 활용하여 이름을 지어야합니다.

```tsx 
interface Animal {
  name: string;
  endangered: boolean;
  habitat: string;
}
```

동물에 대한 정보를 저장하는 `Animal` type 입니다. 이 타입은 어떤 문제가 있을까요

1. name은 매우 모호한 정보입니다.
2. endangered 또한 멸종 위기 종을 표현하는 프로퍼티 이지만 멸종 위기에 대한 여러가지 상태를 모두 표현하지 못하고 있습니다.

```tsx
interface Animal {
  commonName: string;
  genus: string;
  species: string;
  status: ConverstionStatus;
  climates: KoppendClimate[];
}
```

name을 commonName, genus, species로 나누어 표현하여서 더 디테일 하게 표현할 수 있고

stats를 이용해서 좀 더 디테일한 상태 표현을 할 수 있고

climates를 이용해서 어떤 기후에 생존 하는지에 대해 표현하엿습니다.

이런 식으로 디테일하게 이용하는것이 필요하냐에 대해 생각해 볼 수 있지만 전문적인 용어를 사용하는 것은 코드를 읽는다른 사람과의 소통을 더욱 효율적으로 만들어 준다는 것을 잊어서는 안되겠습니다.

## Item 37 : 공식 명칭에는 상표 붙히기

이전에 Vecter2D를 이용해 구조적 타이핑에 대한 허점에 대해 언급한 적이 있습니다. 

```tsx
interface Verctor2D {
  x: number;
  y: number;
}

function calculateNorm(p : Vector2D) {
  return Math.sqrt(p.x * p.x + p.y * p.y)
}

cosnst vec3D = calculateNorm({x:1, y:2, z:3}); //오류 안남.
```

이런식으로 이차원 벡터를 위한 함수이지만 삼차원 벡터 또한 오류없이 동작하고 있음을 볼 수 있습니다. 이를 방지하기 위해 `_brand`를 추가하면 됩니다.

그럼 이차원과 삼차원을 명확하게 분리할 수 있습니다.

이는 어떠한 조건을 만족하는 변수를 확용하고자 할 때도 사용할 수 있으며

예를 들면 binarySearch를 하는 배열이 필요할때 이 배열은 무조건 sorted된 배열이어야 합니다. 그럼 binarySearch에서 매개변수로 받는 배열은 sorted라는 `_brand`를 가지는 객체 로 타입을 지정하고 sorted된 배열에만 sorted라는 `_brand`를 붙히면 정렬되지 않은 객체를 이용하는 오류를 미연에 방지할 수 잇습니다.

## Item 38 : any 타입은 가능한 한 좁은 범위에서만 사용하기

어떠한 변수에서 any를 사용하고자 할 때는 최대한 좁은 범위로 사용해야합니다.

```tsx
function f1() {
  const x = expressionReturningFoo();
  processBar(x);  // 'Foo' 형식의 인수는 'Bar' 형식의 매개변수에 할당 될 수 없습니다.
}
// 이때 any를 사용하면 됩니다.
function f1() {
  const x : any = expressionReturningFoo(); // 이렇게 사용하면 안됩니다.
  processBar(x);
} // 그 이유는 x는 processBar에서 타입 에러를 피하기 위해 any를 쓰는것이지 x를 any로 만들기 위함은 아닙니다. 그래서 다음에 x를 사용할때 Foo로 타입추론하기 위해서는 저런 식으로 사용해서는 안되겠습니다.

function f1() {
  const x = expressionReturningFoo();
  processBar(x as any);  // 이런식으로 사용하여 any로서의 x를 가장 좁은 범위에서만 사용하는 것이 좋습니다.
}
```

## Item 39 : any를 구체적으로 변형해서 사용하기

배열 매개변수에 any를 사용하려면 `function f1(arr: any)`가 아닌 `function f1(arr: any[])`로 사용하는 것이 맞습니다. any를 사용하더라도 최대한 구체적으로 변형해서 사용해야합니다.

## Item 40 : 함수 안으로 타입 단언 감추기

