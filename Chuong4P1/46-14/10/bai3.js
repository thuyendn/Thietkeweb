let a = 3, b = 4, c = 5
if (a==b==c){
    console.log("Đây là tam giác đều")
}
else if(a==b || a==c || b==c){
    console.log("Đây là tam giác cân")
}
else{
    console.log("Đây là tam giác thường")
}