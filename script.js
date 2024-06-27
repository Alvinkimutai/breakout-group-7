 
//question1
let price = 100;
let product = "Unga";
let isAvailable = "false";

console.log(price);
console.log(product);
console.log(isAvailable);
//question2

const numbers = [10,20,30,40,50];
const car = {
    make:'Toyota',
    model: 'Premio',
    year: 2007

};
car.year = 2012;


console.log(numbers);
console.log(car);

//question3
let a = 900;
let b = '900';

console.log('using==operator;');
console.log(a==b);//checks only values of the same data types
console.log(a===b);//checks both the value and data type

//question4
function compareStrings(str1, str2) {
    // Using JavaScript's localeCompare() method for lexicographical comparison
    if (str1.localeCompare(str2) < 0) {
        return `${str1} is lexicographically smaller than ${str2}`;
    } else if (str1.localeCompare(str2) > 0) {
        return `${str1} is lexicographically larger than ${str2}`;
    } else {
        return `${str1} and ${str2} are lexicographically equal`;
    }
}

let str1 = "toyota";
let str2 = "mazda";

console.log(compareStrings(str1, str2));

// question5 trial 1
let age = 12;
if (age < 13){
    console.log("The person is a child");
} else if (age >= 13 && age <= 19) {
    console.log("The person is a teenager");
} else if (age > 20){
    console.log("the person is an adult")
}

//question5 trial 2
let ag = 12;
if (ag <13) { console.log ("child")
    //  block of code to be executed if condition1 is true
  } else if (ag>19) {console.log("adult")
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {console.log("teenager")
    //  block of code to be executed if the condition1 is false and condition2 is false
  }

  //question6

  let score = 79;
  if (score >= 90){
    console.log("grade A");
  } else if (score >= 80 && score <=89 ){
    console.log("grade B" );
  } else if (score >= 70 && score <=79 ){
    console.log("grade C" );
  } else if (score >= 60 && score <=69 ){
    console.log("grade D" );
  }
  else {console.log("grade F")}
   
  //question7

  let num = 11;
  if (num > 0 && num%2==0){
    console.log("the number is positive and even ");
  }
  else {console.log("the number does not meet both conditions");
  }

//question8
  let anAdmin = false;
  let valid_subscription = true; 

  if (anAdmin || valid_subscription) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
//question9

const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let i = 0; i < number.length; i++) {
    if (number[i] % 3 == 0) {
        continue; // Skip current iteration if number is a multiple of 3
    }
    console.log(number[i]); // Print the current number if not a multiple of 3
}

//question 10

const day_number = 15;
let day;

switch (day_number) {
    case 0:
    day ="Sunday";
    break;
    case 1:
    day ="Monday";
    break;
    case 2:
    day ="Tuesday";
    break;
    case 3:
    day ="Wednesday";
    break;
    case 4:
    day ="Thursday";
    break;
    case 5:
    day ="Friday";
    break;
    case 6:
    day ="Sarturday";
    break;
    default:
    day ="no day like that"
    break;
}

console .log(day)

//question11

let y=1;
let sum=0;
function summation(n){
    while(y<=n){
        sum+=y;
        y++;
    }
    console.log(sum);
}
summation(6);