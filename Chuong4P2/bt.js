// 2
let n=[1,2,3,4,5];
let sum=0;
for (let i=0; i<n.length;i++){
    sum+=n[i]
}
console.log(sum);



const m=[1,2,3,4,5]
const sum=(m)=>
{
  let s=0
  for (let i=0; i<m.length;i++)(
    s+=m[i]
  )
  return s
    
}
console.log(sum(m));





//4
for (let i=0; i<=10;i++){
    console.log(i)
}

const number=() =>{
  for (let i=0; i<=10; i++){
    console.log(i);
  }
}
number()




//6
let n = 7; 
if (n < 2) {
  console.log("Không phải số nguyên tố")}
else{
  let snt=true;
  for (let i = 2; i <n; i++) { 
    if (n % i == 0) {
      console.log("Không phải số nguyên tố")
      snt=false
      break;
    }
  }
  if (snt){
    console.log("đây là số tố")
  }
  
}


const checksnt=(n)=>{
  if (n<2){
    console.log("không phải là snt")
  }
  else {
    let snt=true;
    for (let i=2;i<n;i++){
      if (n%i==0){
        console.log("không phải là snt")
        snt=false;
        break;
      }
    }
    if(snt){
      console.log("Đây là snt")
    }
  }
}
let n=6;
checksnt(n)

//8
let arr=[1,2,3,4,5,6,7,8,9]
const sole=(arr) =>
{
  for (let i in arr)
    if (arr[i]%2!=0){
      console.log(arr[i]*2)
    }
}
sole(arr);

//1
let x=5
function soChanHayLe()
{
  if (x%2==0)
  {
    console.log("Số chẵn")
  }
  else
  {
    console.log("Số lẻ")
  }
}
soChanHayLe()

//3
const m=['banana','orange','apple','mango']
function kt()
{
  for (let i=0;i<m.length;i++)
  {
    if (m[i]=='apple')
    {
      console.log('apple có trong mảng')
    }
    else if (m[i]!='apple')
    {
      console.log('apple k có trong mảng')
    }
  }
}
kt()

//5
const m=[1,2,3,4,5]
function daonguoc()
{
  for (let i=m.length;i>=0;i--)
  {
    console.log(m[i])
  }
}
daonguoc()

//7
let m=[10,5,8,12,15,7]
let solont2=(m)=>
{
  m.sort((a,b)=>b-a)
  console.log(m[1])
}
solont2(m)






const m=[5,-10,3,4,8,11,-2]
let dem=0
let s=0

for (let i=0;i<m.length;i++){
  if (m[i]%2==0){
    dem+=1
    s+=m[i]
  }
  if (m[i]==5){
    m[i]=10
  }
}

console.log('Co '+dem + ' so nguyen chan', 'trung binh cong la '+ s/dem)
console.log(m)
m.push(10,11,12)
console.log(m)




