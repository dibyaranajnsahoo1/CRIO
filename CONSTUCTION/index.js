// function car(color,model,feultype){
//     this.color = color;
//     this.model = model;
//     this.feultype = feultype;
//     this.start = function(){
//         console.log(`Car${this.color}`);
//     }
// }

// let vn = new car("black", "BMW", "petrol")
// console.log(vn)


















// function circle(radius,x,y,){
//     this.radius = radius;
//     this.loction = {
//         x:x,
//         y:y,    

//     }
//     this.draw = function(){
//         console.log(this.loction);
//     }
//     this.move = function(nextX, nextY){
//         this.loction.x = nextX;
//         this.loction.y = nextY;
//     }

// }

// let obj = new circle(10,0,0);


// for ( let i = 1; i<=10; i++){
//     obj.move(i,i);
//     obj.draw();
   
// }











// function user(fullName){
//     this.fullName = fullName;
//     this.friendList = [];
//     this.addfriend = function(friendName){
//         this,this.friendList.push(friendName);
//     }
//     this.printfriendList = function(){
//         console.log(this.friendList);
//     }
//     this.findMutual  = function(obj){};
// }


// const dibya = new user("dibya");
// dibya.addfriend('chinku');
// dibya.addfriend("sameer")
// dibya.printfriendList()







/**
 * @param {string} par1
 * @param {string} par2
 * @param {number} par3
 * @return {object}
 */



function constructor(par1, par2, par3) {
    // You need to debug this problem. Just a hint constructor is not defined.
    let terrier = new Dog(par1, par2, par3);
    return terrier;
  }
  function Dog(par1, par2, par3){
    this.par1 = par1;
    this.par2 = par2;
    this.par3 = par3;
  }
  
  console.log(constructor("George", "White", 4));
  
  if (
    constructor("George", "White", 4).name === "George" &&
    constructor("George", "White", 4).color === "White" &&
    constructor("George", "White", 4).numLegs === 4
  )
    console.log(
      "Sample test case for input par1 = Geroge, par2 = White and par3 = 4 passed!"
    );
  else
    console.log(
      "Test fails: Expected output{name: George,color: White, numLegs: 4}"
    );
  
  module.exports = constructor;
  
  