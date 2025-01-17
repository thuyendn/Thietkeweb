//1
let a=10; 
let b=20;
if (a>b){
    console.log(a + " lớn hơn "+ b)
}
else if (a<b){
    console.log(b+" lớn hơn "+a)
}
else {
    console.log(a + " bằng "+ b)
}

//2
let sc=72;
if (sc>=85){
    console.log("A")
}
else if (sc>=70){
    console.log("B")
}
else if (sc>=50){
    console.log("C")
}
else {
    console.log("D")
}


let score = 72;
let grade;

if (score >= 85) {
  grade = 'A';
} else if (score >= 70) {
  grade = 'B';
} else if (score >= 50) {
  grade = 'C';
} else {
  grade = 'D';
}

console.log(`Điểm số: ${score}, Loại: ${grade}`);

//3
let y=2024
if ((y%4==0 && y%100!=0) || y%400==0){
    console.log("Năm "+ y +" là năm nhuận")
}
else{
    console.log("Năm "+ y +" là năm không nhuận")
}

//lặp
//1
for (let i=1;i<=20;i++){
    console.log(i)
}
//2
for (let i=1;i<=10;i++){
    console.log("5*"+i+ "="+ 5*i)
}

//3
fr=['apple','banana','orange','mango']
for (let i=0;i<fr.length;i++){
    console.log(fr[i])
}
//4
n=[3,5,7,2,8,1,4]
let max=n[0]
for (let i=1; i<n.length;i++){
    if (n[i]>max){
        max=n[i]
    }
}
console.log("Số lớn nhất là "+max)