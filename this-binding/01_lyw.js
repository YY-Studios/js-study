//아래 코드의 출력 결과를 순서대로 모두 맞추세요.
//정답은 4줄로 적어주세요.

var name = "Global";

const user = {
  name: "Yujin",
  getName() {
    return this.name;
  },
  getNameLater1() {
    setTimeout(function () {
      console.log("1:", this.name); // setTimeout은 window객체 바인딩
    }, 0);
  },
  getNameLater2() {
    console.log(this) // this는 함수를 호출한 객체를 바인딩 -> user.getNameLater1() user가 호출 했기때문에 user를 바인딩함
    setTimeout(() => {
      console.log("2:", this.name); // 화살표함수는 화살표 함수를 감싸고 있는 스코프의 this를 가져옴 -> getNameLater2가 감싸고있는데 getNameLater2 의 this는 user임
    }, 0);
  },
  getNameLater3() {
    const fn = this.getName;
    setTimeout(fn, 0); // setTimeout은 window객체 바인딩
  },
  getNameLater4() {
    const fn = this.getName.bind(this); // this에 강제로 user를 바인딩 
    setTimeout(fn, 0);
  },
};
    
user.getNameLater1(); //Glrobal
user.getNameLater2(); //Yujin
user.getNameLater3(); //Glrobal
user.getNameLater4(); //YujinYujin
