//❓ 답해야 하는 것
//각 줄의 출력 결과 (1~5)는 무엇인가?
//왜 그렇게 되는지 this와 클로저 관점에서 설명하시오.
//특히 아래 4개 상황에서 this가 어떻게 바인딩되는지 설명하시오:
//일반 함수 호출, 메서드 호출, bind로 고정한 함수, this가 없는 상황에서의 화살표 함수

var name = "Global";

const counter = {
  name: "Counter",
  value: 0,
  inc() {
    this.value++;
    return this.value;
  },
  run() {
    console.log("1:", this.inc()); // counter가 run을 호출 -> this는 counter, this가 inc를 호출 -> this는 counter = 출력 결과 1

    const fn1 = this.inc;
    const fn2 = this.inc.bind(this);

    setTimeout(function () {
      console.log("2:", this.inc ? this.inc() : this.name); // setTimeout은 전역객체(window)를 참조 -> winsodw에 inc가 없음 = 출력 결과 'Global'
    }, 0);

    setTimeout(() => {
      console.log("3:", this.inc()); // setTimeout은 전역객체(window)를 참조하지만 화살표함수에는 this가 없음 -> this는 함수를 감싸고있는 부모를 바라봄 -> 1번에서 vlaue++ 됨 -> 같은 객체를 참조 = 출력 결과 2
    }, 0);

    const arr = [1, 2, 3].map(function (x) {
      if (x === 2) {
        console.log("4:", this.inc ? this.inc() : this.name); // map의 콜백함수는 전역객체(window)를 카리킴 = 출력 결과 'Global'
      }
      return x; 
    });

    (function () {
      console.log("5:", this.inc ? this.inc() : this.name); // 즉시실행 함수는 this가 전역객체(window)를 카리킴 = 출력 결과 'Global'
    })();
  },
};

counter.run();
/*
실행 순서
1: 1
4: Global 
5: Global
2: Global
3: 2
*/
