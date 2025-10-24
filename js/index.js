const t= [1,3,33,]

t.push(7)

t.forEach(value=>{
    console.log(value)
})

const[first,second,...rest]= t

console.log(first)
console.log(second)
console.log(rest)