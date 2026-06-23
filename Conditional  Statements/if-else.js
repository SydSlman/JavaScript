let year;
year = prompt("Enter the Year :")

// if (age >= 18) {
//     console.log("You are eligible for Vote");
// } else {
//     console.log("You are Not eligible for Vote");
// }

if (year % 4 === 0){
    console.log("This is leap Year", year)
} else{
    console.log("This is Not leap Year", year)
}