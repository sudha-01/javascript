//switch case statement example

const day = "Sunday"

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Tuesday":
        console.log("Second day of the work week");
        break;
    case "Wednesday":
        console.log("Midweek day");
        break;
    case "Thursday":
        console.log("Almost the weekend");
        break;
    case "Friday":
        console.log("Last day of the work week");
        break;
    case "Saturday":
        console.log("Weekend begins");
        break;
    case "Sunday":
        console.log("Rest day before the new week");
        break;
    default:
        console.log("Not a valid day");
        break;
}