// Template Literals
// let str3 = `Salman`

const Obj = {
    Name : "Hello",
    Age : 19,
    Cgpa : 3.5,
    isPass : true
}

// console.log("My name is", Obj.Name, "I'm", Obj.Age, "Year old. My CPGPa is", Obj.Cgpa, "Congratulations...", Obj.isPass)
let output = `My name is ${Obj.Name} I'm ${Obj.Age} "Year old. My CPGPa is ${Obj.Cgpa} Congratulations..., ${23 * 45}`;
console.log(output)

a = 23
b = 45
c = a * b
