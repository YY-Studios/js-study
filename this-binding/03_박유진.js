/**
 * ❓ 문제: this 바인딩 + 클로저 + 비동기 흐름까지 종합 예측하기 (중급)
 *
 * 출력 결과를 각 줄마다 예측하세요.
 * 요구사항:
 * 1) console.log가 총 5번 실행되는데, 순서와 값을 각각 예측할 것
 * 2) 왜 그런 결과가 나오는지 this 바인딩 / 클로저 / 마이크로태스크(Promise) 관점에서 설명
 * 3) 특히 setTimeout 내부 this, 화살표 함수 this, bind된 함수 this, call로 변경된 this 등 차이를 반드시 언급할 것
 * 정답:
 * 1, 2, 3, 5, 4
 * 답이 왜그렇게 나오는지에 대한 이유는 아래 적었고 순서에 대한 이유는 setTimeout는 테스크큐고 Promise는 마이크로태스크이다
 * 그런데 항상 마이크로태스크가 테스크큐보다 먼저 실행된다.
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
    //undefind
    //this풀려서 글로벌로 가게되는데 그러면 없으니까 undefind
    const fn1 = this.getX;
    console.log("1:", fn1());
    
    // 2) call로 this를 즉시 변경
    // 10
    // call이 뭔지 모르겠는데? 근데 this로 즉시 변경이 써있어서 아마 obj가 this로 되는거게찌
    //그러면 this 바인딩이 obj객체로 되어서 10
    console.log("2:", fn1.call(obj)); 

    // 3) bind로 this 영구 고정
    // 10
    // this 바인딩이 obj객체 고정해서 10
    const fn2 = this.getX.bind(this);
    console.log("3:", fn2()); 

    // 4) setTimeout 전통 함수 → this 자동 바인딩 없음
    // Global
    // 아 이거 위에 해설이 있어서 답을 알겠네 자꾸 근데 나도 알고있었어 setTimeout는 this가 없어서 그 상위 객체를 그냥 바인딩 해버림
    setTimeout(function () {
      console.log("4:", this.name); // ?
    }, 0);

    // 5) Promise + 화살표 함수 → 상위 this를 캡처
    // 화살표 함수도 상위꺼를 가져옴
    // OBJ
    Promise.resolve().then(() => {
      console.log("5:", this.name); // ?
    });
  },
};

obj.run();
