# Statement vs Prepared Statement

### Statement

connection  객체로부터 instance화 하여 만들어 내며 DB에 SQL을 보내기 위한 준비작업과 실제 SQL을 실행하여 결과값을 주는 API를 제공한다.

### Prepared Statement

`DBMS`에서 동일하거나 비슷한 데이터베이스 문을 높은 효율성으로 반복적으로 실행하기 위해 사용되는 기능

1. 준비

   먼저 어플리케이션은 문의 틀을 만들고 이를 DBMS로 보낸다.

2. 그 다음 DBMS는 문의 틀을 컴파일(최적화 및 변환)하며 아직 실행하지 않고 결과만 저장

3. 실행

   나중에 어플리케이션이 문의 틀의 변수 값을 지정하면 DBMS는 결과를 반환하는 문을 실행한다. 어플리 케이션은 여러값으로 원하는 횟수 만큼 문의를 실행할 수 있다.

### 둘의 차이점은 무엇일까?

우선 속도면에서 `prepared statement`가 빠르다고 알려져 있다. 이유는 쿼리를 수행하기 전에 이미 쿼리가 컴파일 되어 있으며, 반복 수행의 경우 프리 컴파일된 쿼리를 통해 수행이 이루어지기 때문이다.

`statement`에는 보통 변수를 지정하고 바인딩하는 `static sql`이 사용되고 `preapred statement`에서는 쿼리 자체에 조건이 들어가는 `dynamic sql`이 사용된다. `PreparedStatement`가 피싱 타임을 줄여주는 것은 분명하지만 `dynamic sql`을 사용하는데 따르는 퍼포먼스 저하를 고려해야한다.

하지만 성능을 고려할 때 시간 부분에서 가장 큰 비중을 차지하는것은 테이블에서 레코드를 가져오는 과정이고 SQL문 파싱하는 시간은 10분의 1에 불과하다. 그렇기 대문에 `SQL injection`등의 문제를 보완해주는 `PreparedStatement`를 사용하는 것이 옳다.