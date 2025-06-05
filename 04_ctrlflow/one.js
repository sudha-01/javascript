// if statement

const isUserLoggedIn = false

if(isUserLoggedIn){
    console.log("hi");
}
else{
    //console.log("User is still Logged Off");
    
}

// comparison operators:
// < , > , <= , >= , == , === , != , !==


function checkPlayer() {
    const power = 200;
    const input = "X" + "X";

    if(power >= 150 && input === "XX"){
        const power = "fly";
        console.log(`player can ${power}`);
    }
    else {
        if(power < 150 && input !== "XX"){
            console.log(`Insufficient power and Invalid Input`);
            return;
        }
        if(power < 150){
            console.log(`Insufficient power`);
        }
        else {
            console.log(`Invalid input`);
        }
    }
}

checkPlayer();

//implicit if statement
const balance = 1000
if(balance < 1000) console.log("Sufficient Balance"); //can be used for one line of code only