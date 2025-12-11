/**
 * ❓ 문제: this 바인딩 + 클로저 + call/apply/bind + 비동기까지 섞인 중급 문제
 *
 * 아래 코드에서 console.log는 총 7번 실행된다.
 * 1) 각 줄의 출력값(1~7)을 정확히 예측하시오.
 * 2) 왜 그런 결과가 나오는지 this/클로저/call/apply/bind/화살표 함수/이벤트 루프 관점에서 설명하시오.
 * 3) 특히 아래 상황에서 this가 어떻게 바인딩되는지 필수로 설명:
 *    - 메서드 호출
 *    - 일반 함수 호출
 *    - call/apply로 강제 바인딩
 *    - bind로 영구 바인딩된 함수
 *    - 화살표 함수의 렉시컬 this
 *    - setTimeout(function) vs setTimeout(arrow)
 */

var name = "Global";

const obj = {
  name: "OBJ",
  count: 1,
  get() {
    return this.count;
  },
  run() {
    console.log("1:", this.get());

    const f1 = this.get;
    const f2 = this.get.bind(this);

    console.log("2:", f2());

    f1.call({ count: 10, name: "X" });
    console.log("3:", f1.call({ count: 10, name: "X" }));

    setTimeout(function () {
      console.log("4:", this.name);
    }, 0);

    setTimeout(() => {
      console.log("5:", this.name);
    }, 0);

    Promise.resolve().then(function () {
      console.log("6:", this ? this.name : "NO_THIS");
    });

    Promise.resolve().then(() => {
      console.log("7:", this.name);
    });
  },
};

obj.run();
