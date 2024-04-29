





console.log("Hello World!\n==========\n");

//Exercise 1
for(let printNum = 1; printNum <= 100; printNum++){
    if(printNum%2 != 0){
    console.log(printNum);
    }
    else{
        continue;
    }

}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ');
    } 
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log('FIZZ');
    } 
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log('BUZZ');
    } 
    //just print the number
   
}
console.log("EXERCISE 3:\n==========\n");
//Exercise 3: Repeat with While and Do/While
let numS = 1;
while(numS <=100){
    if(numS %2 !== 0){
        console.log(numS);
}
numS++;
}

//Exercise 3 fizz buzz
console.log("EXERCISE 3: FIZZBUZZ\n==========\n");
numA=1;
while(numA <=100) {
    // Check if the number is divisible by both 3 and 5
    if ( numA% 3 === 0 && numA % 5 === 0) {
        console.log('FIZZBUZZ');
    } 
    // Check if the number is divisible by 3
    else if (numA % 3 === 0) {
        console.log('FIZZ');
    } 
    // Check if the number is divisible by 5
    else if (numA % 5 === 0) {
        console.log('BUZZ');
    } 
    numA++;
}

//Exercise 3 DOWhile
console.log("EXERCISE 3: doWhile \n==========\n");
number =1;
do{
    if(number %2!= 0){
        console.log(number);
    }
    number+=1;
}while (number<=100)


//Exercise 3 FIZZBUZZ
console.log("EXERCISE 3: FIZZBUZZ \n==========\n");

 numA=1;
do {
    if ( numA% 3 === 0 && numA % 5 === 0) {
        console.log('FIZZBUZZ');
    } 
   
    // Check if the number is divisible by 3
    else if (numA % 3 === 0) {
        console.log('FIZZ');
    } 
    // Check if the number is divisible by 5
    else if (numA % 5 === 0) {
        console.log('BUZZ');
    } 
    numA++;
} while (numA<=100);

//Exercise 4: Find Value
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
 
for(i = 0; i<n; i++){
    if(value == n){
        console.log(`Found value!`);
        break;
    }
    else{
        console.log(`Did not find value`);
    }
    
 }
