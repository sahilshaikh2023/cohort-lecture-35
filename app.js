// print the number of count when enter the yes 

let word = prompt("Enter the word");

let counter = 0;

while(word !== "stop"){
    if(word=="yes") counter++;
    word =prompt("Enter the word ");

}

console.log(`the yes count is ${counter}`);