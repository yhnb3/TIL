# What is Redis?

`Redis`를 언급하기 전에 우리는 `NOSQL`에 대해서 알고 있어야만 한다.

### NOSQL이란?

RDBMS는 관계형데이터 베이스 이며 우리가 일반적으로 마주하는 데이터 베이스이다. 반면에 NOSQL은 비관계형 데이터베이스이다. 보통 NOSQL은 키-밸류나 컬럼, 문서 형식의 데이터 모델을 이용한다. 

### 왜?  언제? NOSQL을 쓰는 걸까?

아주 많은 양의 데이터를 효율적으로 처리가 필요할 때, 데이터의 분산처리, 빠른 쓰기 및 데이터의 안정성일 필요할때 사용한다. 특정서버에 장애가 발생했을 때에도 데이터 유실이나 서비스 중지가 없는 형태의 구조이기 때문이다.

### NOSQL의 종류

1. 키- 밸류 형태 : Redis, memcahced, oracle, coherence
2. 열 지향 와이드 컬럼 스터어 : cassandra, hbase, cloud database
3. 문서형 : mongodb, couchbase, marklogic, potgreSQL, mySQL
4. 그래프형: Neo4j

## Redis란?

`Redis(Remote Dictionary server)`는 메모리 기반의 `key-value`구조 데이터 관리 시스템이며, 모든 데이터를 메모리에 저장하고 조회하기에 따른 Read, Write 속도를 보장하는 비 관계형 데이터 베이스이다.

레디스는 <string, set, sorted set, hash, list>의 데이터 형식을 지원한다.

#### 특징

- 영속성을 지원하는 인메모리 데이터 저장소
- 읽기 성능 증대를 위한 서버 측 복제를 지원한다.
- 다양한 데이터형을 지웒나다.

#### 장점

- 리스트, 배열과 같은 데이터 처리하는데  유리\
- 리스트형 데이터 입력과 삭제가 MySQL에 비해 10배정도 빠르다.
- 메모리를 활용하면서 영속적인 데이터 보존
- Redis Server는 1개의 싱글쓰레드로 수행되며, 따라서 서버 하나에 여러개의 서버를 띄우는 것이 가능하다.
- master-slave 형식으로 구성이가능함, 데이터 분실 위험을 없애준다.



