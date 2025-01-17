// let dtb = 7.2;

// if (dtb >= 8) {
//     console.log("Học lực Giỏi");
// } else if (dtb >= 6.5) {
//     console.log("Học lực Khá");
// } else if (dtb >= 5) {
//     console.log("Học lực Trung bình");
// } else {
//     console.log("Học lực Yếu");
// }


// let $dtb = 7.2;
// if ($dtb >= 8) {
// console.log("Học lực Giỏi");
// } else if ($dtb >= 6.5) {
// console.log("Học lực Khá");
// } else if ($dtb >= 5) {
// console.log("Học lực Trung bình");
// } else {
// console.log("Học lực Yếu");
// }

for (let i=0 ; i<5; i++){
    text='the number is'+i
    console.log(text)

}


sum=0
for (let i=1; i<=10;i++){
    if (i%2==0){
        sum+=i
    }

}
console.log(sum)


const number=[45,4,16,25,9]
let n=0
for (let x in number){
    n+=number[x]
}

console.log(n)


let i=1
while (i<10){
    console.log(i)
    i++
}

let i=0
do {
    text=i
    console.log(text)
    i++
}
while (i<9)

// vd1
const cars ['mazda','vin','bmw']
//vd2

const cars = [];
 cars[0]= "Mazda";
 cars[1]= "VinFast";
 cars[2]= "BMW";
 console.log(cars)

//  Thêm phần tử cho mảng

 const fruits = ["Banana", "Orange", "Apple"];
 fruits.push("Lemon");
 console.log(fruits)
 //đếm
 console.log(fruits.length)

 let numbers = [1, 2, 3, 4, 5]; 
 let sum = 0; 
 for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  }
  console.log("Tổng các phần tử trong mảng là: " + sum);



for (let i = 1; i <= 10; i++) {
    console.log(`5*${i} = ${5 * i}`);
}

//
const PI=3.14
let bk=7

let cv=2*PI*bk
let dt=PI*bk*bk

console.log("cv là "+cv)
console.log("bk là "+dt)

//
s=0
for (let x=2; x<=10; x+=2){
    s+=x
}
console.log(s)

//tính và in lên mh tổng từ 1 đến n bằng for while do...while
let n=100
let s=0
for (let i=2; i<=n; i+=2){
    s+=i
}
console.log(s)

//while
let n=100
s=0
let i=2
while (i<=n){
    s+=i
    i+=2}
console.log(s)

//do...white
let n=100
s=0
i=2
do {
    s+=i
    i+=2
}while(i<=n)
console.log(s)