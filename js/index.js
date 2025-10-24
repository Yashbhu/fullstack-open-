const t= [1,3,33,]

t.push(7)

t.forEach(value=>{
    console.log(value)
})

const[first,second,...rest]= t

console.log(first)
console.log(second)

const obj1 ={
    name: 'alice',
    age: 25,
    education:'bachelor',

}
const obj2 ={
    name: 'arto hellas',
    agee: 34
}

const object3 ={
    name:{
        first:'dan',
        last:'smith',  
    },
    grades:[2,3,4,5,],
    department:'computer science'

}
console.log(obj1.name)


const sum = (p1,p2) =>{
    console.log(p2)
    console.log(p1)
    return p1*p2
}

const result = sum(3,4)
console.log(result)