//아래 코드의 출력 결과를 순서대로 모두 맞추세요.
//정답과 이유를 함께 적어주세요.

var name = "Global";

const user = {
  name: "Yujin",
  getName() {
    return this.name;
  },
  getNameLater1() {
    setTimeout(function () {
      console.log("1:", this.name);
    }, 0);
  },
  getNameLater2() {
    setTimeout(() => {
      console.log("2:", this.name);
    }, 0);
  },
  getNameLater3() {
    const fn = this.getName;
    setTimeout(fn, 0);
  },
  getNameLater4() {
    const fn = this.getName.bind(this);
    setTimeout(fn, 0);
  },
};
    
user.getNameLater1();
// 답: Global, setTimeout내에 this는 항상 전역 객체를 바인딩해서
user.getNameLater2();
// 답: Yujin, setTimeout내에 this는 항상 전역 객체를 바인딩하지만
// 화살표 함수는 this라는게 없어서 그 상위 객체를 바인딩한다.
user.getNameLater3();
// 답: Global, fn은 전역객체여서  
user.getNameLater4();
// 답: Yujin, 바인드를 this로 했는데.. fn은 전역객체지만 바인드를 user로 하고있어서
