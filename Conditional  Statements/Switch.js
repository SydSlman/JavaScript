const statment = prompt("Enter Your Favorite Fruit: ")
switch (statment) {
    case "Mango":
        console.log("Price of Mangoes pr kg is: 200rs")
        break;

    case "Banana":
        console.log("Price of Banana pr Drjan is: 180rs")
        break;

    case "Orange":
        console.log("Price of Orange pr kg is: 400rs")
        break;

    default:
        console.log("Sorry you are out of Stock");
        break;
}