let obj1 = {'name':'Person1', age:5}
let obj2 = {age:5, 'name':'Person1'}
let newObj1 = JSON.stringify (obj1, Object.keys(obj1).sort())
let newObj2 = JSON.stringify (obj2, Object.keys(obj2).sort());
console.log(newObj1 === newObj2);