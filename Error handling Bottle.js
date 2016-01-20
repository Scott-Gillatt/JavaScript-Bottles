//Improved Bottle of beer on the wall
var bottle = 99;
do {
    var beerchoice = prompt("What type of beer do you want", "ex: budlight");
    if (beerchoice.length <= 0){
     alert("Sorry, please enter in a beer, try again");   
    }    
}while (beerchoice.length <= 0)

    while (bottle > 0) {
        console.log(bottle + " bottles of " + beerchoice + " on the wall");
        console.log(bottle + " bottles of " + beerchoice);
        bottle--;
        console.log("Take one down, pass it around, " + bottle + " bottles of " + beerchoice + " on the wall..");

        if (bottle == 0) {
            console.log("No more bottles of " + beerchoice + " on the wall, no more bottles of " + beerchoice);
            console.log("Go to the store and buy some more, 99 bottles of " + beerchoice + " on the wall");
        }
       }