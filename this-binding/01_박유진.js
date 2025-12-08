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
user.getNameLater2();
user.getNameLater3();
user.getNameLater4();

