# Memoization

동일한 계산을 반복해야할 대 계산된 값을 메모리에 저장함으로 반복수행을 제거하여 성능 향상을 하는 기술이다.

## React. memo

오직 성능 최적화를 위한 hoc이며 props가 변하지 않은 컴포넌트가 있다면 가장 늦게 렌더링된 컴포넌트를 이용해 렌더링 한다.

렌더링을 막기위해 사용하면 버그가 일어날 수 있다.