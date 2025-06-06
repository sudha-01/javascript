// if statement

const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("hi");
}
else{
    console.log("User is still Logged Off");
    
}

// comparison operators:
// < , > , <= , >= , == , === , != , !==


(function checkPlayer() {
    const power = 200;
    const input = "X" + "X";

    if(power >= 150 && input === "XX"){
        const power = "fly";
        console.log(`player can ${power}`);
    }
    else {
        if(power < 150 && input !== "XX"){
            console.log(`Insufficient power and Invalid Input`);
        }
        else if(power < 150){
            console.log(`Insufficient power`);
        }
        else {
            console.log(`Invalid input`);
        }
    }
})();

//console.log(`${power}`); // power is not defined here, as it is scoped to the if block

//implicit if statement
const balance = 1000
if(balance < 1000) console.log("Sufficient Balance"); // can be used for one line of code only

const userLoggedInfromGoogle = false;
const userLoggedInfromFacebook = true;

if(userLoggedInfromGoogle || userLoggedInfromFacebook) {
    console.log("User is logged in corectly");
} else {
    console.log("User is not logged in");
}