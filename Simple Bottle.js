///Simple bottle of beer on the wall
var typeofbeer = prompt("What type of bear do you want", "budlight")
var bottle = 99;
while (bottle > 0) {
    console.log(bottle + " bottles of " + typeofbeer + " on the wall");
    console.log(bottle + " bottles of " + typeofbeer);
    bottle--;
    console.log("Take one down, pass it around, " + bottle + " bottles of " + typeofbeer + " on the wall..");
    
    if (bottle == 0){
        console.log("No more bottles of " + typeofbeer + " on the wall, no more bottles of " + typeofbeer);
        console.log("Go to the store and buy some more, 99 bottles of " + typeofbeer + " on the wall");
    }
}