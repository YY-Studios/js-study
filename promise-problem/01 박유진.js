/**
 * ❓ 문제: 비동기 실행 순서 예측하기 (초급)
 *
 * 아래 코드에서 console.log가 찍히는 순서를 정확히 예측하세요.
 *
 * 요구사항:
 * 1) 출력되는 문자열 순서를 1번부터 마지막까지 번호로 나열할 것
 * 2) 왜 그 순서가 되는지 콜스택 → 마이크로태스크(Promise) → 태스크큐(setTimeout) 실행 흐름 관점에서 1~2줄로 설명할 것
 * 정답: 
 * A -> D -> C -> B
 * setTimeout = 태스크큐, Promise = 마이크로 태스크 항상 마이크로 태스크가 테스크큐보다 일찍 실행된다.
 */

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
