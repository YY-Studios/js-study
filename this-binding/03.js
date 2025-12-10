/**
 * ❓ 문제: this 바인딩 + 클로저 + 비동기 흐름까지 종합 예측하기 (중급)
 *
 * 출력 결과를 각 줄마다 예측하세요.
 * 요구사항:
 * 1) console.log가 총 5번 실행되는데, 순서와 값을 각각 예측할 것
 * 2) 왜 그런 결과가 나오는지 this 바인딩 / 클로저 / 마이크로태스크(Promise) 관점에서 설명
 * 3) 특히 setTimeout 내부 this, 화살표 함수 this, bind된 함수 this, call로 변경된 this 등 차이를 반드시 언급할 것
 */

var name = "Global";

const obj = {
  name: "OBJ",
  x: 10,

  getX() {
    return this.x;
  },

  run() {
    // 1) 클로저가 원본 this를 유지하지 않는 경우
    const fn1 = this.getX;
    console.log("1:", fn1()); // ?

    // 2) call로 this를 즉시 변경
    console.log("2:", fn1.call(obj)); // ?

    // 3) bind로 this 영구 고정
    const fn2 = this.getX.bind(this);
    console.log("3:", fn2()); // ?

    // 4) setTimeout 전통 함수 → this 자동 바인딩 없음
    setTimeout(function () {
      console.log("4:", this.name); // ?
    }, 0);

    // 5) Promise + 화살표 함수 → 상위 this를 캡처
    Promise.resolve().then(() => {
      console.log("5:", this.name); // ?
    });
  },
};

obj.run();
