# React Docs

### JSX란?

```react
const component = <div>hello</div>
```

### 렌더링

ReactDOM.render(element, rootElement) 와 같은 식으로 렌더링을 시도합니다.

element의 state가 변경되면 그에 맞춰서 리렌더링이 된다.

+ 생명주기

```react
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

다음과 같이 구현햇다고 하면.

1. <Clock /> ReactDOM.render에 전달되면 Clock 컴포넌트의 생성자를 호출한다. this.state를 초기화 한다. 
2. Clock 컴포넌트의 render를 호출하고 DOM을 업데이트 한다.
3. Clock 출력값이 DOM에 삽입이 되면, componentDidMount를 호출하고 타이머를 설정하도록 브라우저에 요청한다.
4. 매초 부라우저가 tick()를 호출하면 setState()가 호출 되면서 React가 state가 변경되는 것을 인지하고 다시 render를 호출한다. 이때 render안에 this.state.data가 달려지고 업데이트된 시각을 포함한다. react는 이에 DOM을 업데이트한다.
5. Clock컴포넌트가 DOM으로 부터 한번이라도 삭제된적이 있다면 componentWillUMount를 통해 타이머를 삭제한다.

### state

state는 직접 수정하면 안된다. 그러면 리렌더링이 안된다.

state의 업데이트는 비동기적일 수 잇다. 왜냐면 많은 setState()의 호출때마다 state를 업그레이드 하면 너무 많은 리렌더링이 필요 할 수 있기때문이다.

setState에 콜백함수를 통해 업데이트 후 바로 새 변수를 쓰게끔 할 수 잇다.

### props

props는 읽기 전용이다.

### Key

리액트에서 list를 정의하면 무조건 적으로 key를 입력하게 끔 되어있습니다. 그 이유는 key를 가지고 있는 list는 재조정을 할때 더 효율적으로 가능하기 때문이다. 하지만 list를 재배열할 필요가 생길때 index를 key로 이용하면 제대로 리렌더링이 안될 수 있기 때문이다.

key는 전체 html에서 유일할 필요는 없고 map로 li 태그를 생성한다고 하념 map 함수 내에서만 유일하면 된다.

### 폼

#### 제어 컴포넌트

폼 태그 내에 있는 값을 state로 관리하는 컴포넌트이다, => 바뀔때 마다 리렌더링 된다.

#### 비제어 컴포넌트

폼 태그 내에 있는 값은 ref로 직접 DOM과 연결하여 사용하는 방식이다.

### 리액트처럼 사고하기.

1. ui를 컴포넌트 계층 구조로 나누기 => 단일책임 원칙 -> 오류가 나면 어떤 컴포넌트를 고쳐야하는지 한눈에 파악 가능
2. react로 정적인 버전 만들기
3. ui state에 대한 최소한의 표현 찾아내기 => 최소한의 state로 구현하자.
4. state가 어디있어야 할 지 찾기. -> 공통적으로 state를 사용하는 바로 상위 컴포넌트에 넣는것이 가장 좋을 것이다.
5. 역방향 데이터 흐름 추가하지 -> 