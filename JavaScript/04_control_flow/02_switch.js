switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    default:
        // code to be executed if expression doesn't match any case
}

// Example 1: Day of the week
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

// Example 2: Fruit selection
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Yellow fruit");
        break;
    case "apple":
        console.log("Red or green fruit");
        break;
    default:
        console.log("Unknown fruit");
}
