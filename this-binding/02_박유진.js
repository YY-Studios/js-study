//❓ 답해야 하는 것
//각 줄의 출력 결과 (1~5)는 무엇인가?
//왜 그렇게 되는지 this와 클로저 관점에서 설명하시오.
//특히 아래 4개 상황에서 this가 어떻게 바인딩되는지 설명하시오:
//일반 함수 호출, 메서드 호출, bind로 고정한 함수, this가 없는 상황에서의 화살표 함수
// 1. 1 => counter 객체 바인딩해서 1됨
// 2. Global => setTimeout때문에 바인딩이 풀려서 전역으로 바인딩 하게됨
// 3. 1 => 화살표함수는 this가 없어서 상위객체껄로 자동 바인딩
// 4. 모르겠어요..
// 5. Global => this는 전역인데 inc가 없어서

var name = "Global";

const counter = {
  name: "Counter",
  value: 0,
  inc() {
    this.value++;
    return this.value;
  },
  run() {
    console.log("1:", this.inc());

    const fn1 = this.inc;
    const fn2 = this.inc.bind(this);

    setTimeout(function () {
      console.log("2:", this.inc ? this.inc() : this.name);
    }, 0);

    setTimeout(() => {
      console.log("3:", this.inc());
    }, 0);

    const arr = [1, 2, 3].map(function (x) {
      if (x === 2) {
        console.log("4:", this.inc ? this.inc() : this.name);
      }
      return x;
    });

    (function () {
      console.log("5:", this.inc ? this.inc() : this.name);
    })();
  },
};

counter.run();
