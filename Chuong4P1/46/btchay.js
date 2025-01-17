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

/////////////////////////////////////////////////////////////

const m=[5,-10,3,4,8,11,-2]
demsochan=(m) =>{
    let dem=0
    for (let i in m){
        if (m[i]%2==0){
          dem+=1
        }
    }
    return dem
}
console.log('Co '+demsochan(m) + ' so nguyen chan')
tbc=(m)=>{
    let s=0
    for (let i in m){
        if (m[i]%2==0){
          s+=m[i]
        }
    }
    return s
}
console.log('Trung binh cong là: '+tbc(m))

thaythe=(m)=>{
    for (let i in m){
        if (m[i]==5){
            m[i]=10
          }
    }
    return m
}
console.log(thaythe(m) )
them=(m)=>{
    m.push(10,11,12)
    return m
}
console.log(them(m))


