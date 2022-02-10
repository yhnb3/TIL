# hook flow 이해하기 2

### rendering & useEffect

parent component render -> child component render -> child component useEffect -> parent component useEffect

### 정리

useEffect 렌더가 끝난뒤 실행

update시 useEffect clean up -> useEffect 부모의 클린업이 먼저 된다.

마운트 될때는 clean up 안된다.

