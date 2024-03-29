# Type script compiler

## 목표

> tsconfig 파일을 이해
>
> 어떤 방식으로 컴파일 되는지에 대한 이해

### Compliation Context

> 컴파일 할때의 맥락? 정도의 느낌
>
> fancy한 용어이며 group화된 typescript 파일을 js 파일로 변환할때 살짝의 맛을 가미해주는 것이라고 볼 수 있다.

`tsconfig.json` 파일안에 저장해 놓으며 어느정도의 맥락을 정할 수 있다.

https://json.schemastore.org/tsconfig -> tsconfig 구조를 파악할 수 잇다.

## tsconfig schema 최상위 프로퍼티 

1. `complieOnSave`

   > 이 프로젝트를 세이브하면 컴파일하겠다. true or false

   default -> false

   visual studio 2015 with type script 1.8.4 이상 or atom-typescript

   별로 중요한 프로퍼티는 아니다.

2. `extends`

   > 상속을 위한 keyword 이다.

   어떤 상속 받을 파일에 대한 경로를 값으로 가진다.

   typescript 2.1이상

   https://github.com/tsconfig/bases 에 기본 베이스로 삼을 만한 tsconfig 들을 소개하고 있다.

3. `files` `include` `exclude`

   > 디렉토리 안에 어떤 파일을 complie할 것인지에 대해 정한다.
   >
   > 파일 경로들의 배열을 값으로 가진다. => glob패턴의 string list

   - `files`

     `exclude`로 제하더라도 `files`에 포함되면 컴파일 된다.

   - `exclude`

     `include`안에 포함된 파일들만 제한다.

     defalut => node_modules, bower_components, jspm_packages, <outDir> 

     > outdir 은 컴파일 된 파일을 모은 폴더 이므로 자연스래 제외 된다.

      <outDir>  은 항상 제외한다. (`include`에 있어도)

   - `include`

4. `compileOptions`

   - `typeRoots`, `types` 

     > @types 와 같은 것들을 배운다.

   - `target`

     > ts파일이 어떤 런타임에 동작하는지 알 수 있다. 

     `target`에 맞는 버전으로 컴파일 된다.

   - `lib`

     - 기본 type definition 라이브러리르 어떤 것을 사용할 것이냐
     - lib를 지정하지 않으면 `target`에 따라 다른 것을 디폴트로 이용한다.

   - outDir

     컴파일 하고 자하는 대상이 컴파일 된 결과물의 경로

   - outFile

   - rootDir

     소스폴더를 특정 폴더로 지정할 수 있는데 이때 쓰는 것이다.

   - strict

     > true를 지정하는것이 기본이다. 

     - --noImplicitAny

       명시적이지 않게 any 타입을 사용하여, 표현식과 선언에 사용하면, 에러 발생

     - --noImplicitThis

       명시적이지 않게 any 타입을 사용하여, this 표현식에 사용하면, 에러를 발생합니다.

     - --strictNullCheck

       모든 타입에 null과 undefined가 포함되지 않은 타입을 가지게 된다.

       한기지 예외는 undefined에 void 할당 가능

     - --strictFunctionTypes

       함수 타입에 대한 bivariant 매겨변수 감사를 활성화 한다.

       반환 타입은 공변적이여야 하며

       인자타입은 반공변적이어야 한다.

     - --strictPropertyInitialization

       정의 되지 않은 클래스의 속성이 생성자에서 초기화 되었는지 확인합니다.

     - --strictBindCallApply

       bind, call, apply에 대한 더 엄격한 검사 수행

     - --alwaysStrict

       각 소스파일에 대해 strict mode로 ㄱ코드를 분석하고 엄격하게 사용을 해제한다.
