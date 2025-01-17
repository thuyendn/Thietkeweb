❑ Khai báo biến
❑ Chế độ tự động nhận diện (không khuyến khích)

        x = 5;
        y = 6;
        z = x + y;
❑ Khai báo bằng từ khóa var (không tương thích với mọi trình duyệt)
        var x = 5;
        var y = 6;
        var z = x + y;
❑ Khai báo bằng từ khóa let (hỗ trợ tốt với các trình duyệt web hiện hành)
        let x = 5;
        let y = 6;
        let z = x + y;
❑ Khai báo bằng từ khóa const (sử dụng khi khai báo hằng)
        const x = 5;
        const y = 6;
        const z = x + y;
❑ Khai báo đồng thời nhiều biến

        let person = "John Doe", carName = "VinFast", price = 200;
        let person = "John Doe",
        carName = "VinFast",
        price = 200;
❑ Có thể sử dụng dấu $ để đặt tên cho biến
        let $ = "Hello World";
        let $$$ = 2;
        let $myMoney = 5;
❑ Ví dụ 1, Viết chương trình JavaScript để tính diện tích của hình chữ nhật.
        let width = 5;
        let height = 10;
        let area = width * height;
        console.log("Diện tích hình chữ nhật là: " + area);
❑Ví dụ 2, Viết chương trình JavaScript để tính chu vi và diện tích của hình tròn
với bán kính r đã biết.
        let bankinh = 7;
        let chuvi = 2 * Math.PI * bankinh;
        let dientich = Math.PI * bankinh * bankinh;
        console.log("Chu vi hình tròn là: " + chuvi);
        console.log("Diện tích hình tròn là: " + dientich);


JavaScript
– Cấu trúc điều kiện

❑ Dạng1
if (hour < 18) {
    greeting = "Good day"
    ;
    }
❑ Dạng2

if (hour < 18) {
    greeting = "Good day";
}
else
{
    greeting = "Good evening";
}
❑ Dạng 3
if (time < 10) {
greeting = "Good morning";
}
else if (time < 20) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}

❑ Ví dụ 1, Viết chương trình JavaScript để kiểm tra xem một số nguyên n là số
chẵn hay số lẻ.
let n=7
if (n%2!=0)
    {
        console.log("số lẻ")
    }
else {
    console.log("số chẵn")
}
❑ Ví dụ 2, Viết chương trình JavaScript để xếp loại học lực của học sinh dựa trên
điểm trung bình average

/////////////////////////////\/////////////////////////////////////\

– Cấu trúc lặp for … loop
❑ Cú pháp - Dạng 1
for (expression 1; expression 2; expression 3) {
    // code block to be executed
    }
   
❑ Ví dụ 1: in lên màn hình dãy thông báo theo mẫu
for (let i=0; i<=5;i++){
   text="the number is "+i;
   console.log(text)
}
❑ Ví dụ 2: in lên màn hình tổng các số nguyên chẵn trong dãy số từ 1 đến 10
let sum=0
for (let i=2;i<=10;i+=2){
    sum=i+sum
}
console.log(sum)
////////////////////////////////////////\////////////////////////////////////////

Cú pháp - Dạng 2
for (key in object) {
    // code block to be executed
    } // key nhận về giá trị index của object

❑ Ví dụ: in lên màn hình tổng giá trị các phần tử trong một mảng
const n=[45,4,9,16,25]
let sum=0
for (let i in n){
    sum+=n[i]
}
console.log(sum)
//////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\
Cấu trúc lặp while
while (condition) {
    // code block to be executed
    }

❑ Ví dụ: in lên màn hình dãy thông báo theo mẫu
let i=1
while (i<10){
    console.log(i)
    i++
}

///////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\
– Cấu trúc lặp do … while
❑ Cú pháp
do {
    // code block to be executed
    }
    while (condition);
❑ Ví dụ: in lên màn hình dãy thông báo theo mẫu

let i=0;
do {
    text = "The number is " + i;
    console.log(text);
    i++;
}
while (i < 10);

/////////////////MẢNG\\\\\\\\\\\\\\\\\\\\
❑ Khai báo mảng
    const array_name = [item1, item2, ...];

❑ Ví dụ 1:
    const cars = ["Mazda", "VinFast", "BMW"];
❑ Ví dụ 2:
    const cars = [];
    cars[0]= "Mazda";
    cars[1]= "VinFast";
    cars[2]= "BMW";
    
❑ Cập nhật giá trị của mảng
const cars=["mazda","toyota","bmw"]
cars[0]="vìnfest"
console.log(cars)  //cập nhật giá trị
////thêm phần thử
const fr=["dau","ber","man","xòi"]
fr.push("lemon")
console.log(fr)
/////đếm số phần tử trong fr
console.log(fr.length)
❑ Ví dụ 1, Viết chương trình JavaScript sử dụng mảng để lưu các số và tính tổng
của các phần tử trong mảng.
let number=[1,2,3,4,5]
let sum=0
for (let i=0; i< number.length;i++){
    sum+=number[i]
}
console.log(sum)

❑ Ví dụ 2, viết chương trình trên javascript thực hiện các yêu cầu sau:
- Khởi tạo 1 mảng gồm 3 số nguyên;
- Cập nhật giá trị của phần tử thứ hai trong mảng có giá trị bằng 5;
- Thêm một phần tử mới vào cuối mảng, có giá trị bằng 10;
- Đếm và in ra số lượng phần tử hiện có trong mảng;
- Tính tổng giá trị của các phần tử trong mảng, in kết quả lên màn hình
let m=[1,2,3]
m[1]=5
m.push(10)
console.log(m.length)
let sum=0
for (let i=0; i<m.length;i++){
    sum+=m[i]
}
console.log(sum)


//////////hAMF\\\\\\\\\\\\\\\\\\
❑ Khai báo và gọi hàm
    function name(parameter1, parameter2, parameter3) {
        // code to be executed
        }
    
❑ Ví dụ:

    function myFunction(a, b) {
    // Function returns the product of a and b
    return a * b;
    }
    // Function is called, the return value will end up in x
    let x = myFunction(4, 3);
❑ Tham số mặc định của hàm
❑ Ví dụ:
function sum(x,y=5){
    console.log(x+y)
}
sum(5,25)