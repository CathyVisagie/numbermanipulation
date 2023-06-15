let numbers = []
let size = 10; //Maximum Array size
let total = 0


for(var i=0; i<size; i++) {
	
	numbers[i] = Number (prompt('Enter a number ' + (i+1)))  //Taking Input from user
	
}
for (let i = 0; i < numbers.length; i++ ) {
    total += numbers[i]; // defines the total of all the numbers
}
let min = Math.min(...numbers) // determines the lowest number
let MinIndex = numbers.indexOf(min) // index of min
let max = Math.max(...numbers) // determines the highest number
let MaxIndex = numbers.indexOf(max) // index of max
let ave = (total / 10).toFixed(2) // determines the average rounded to 2 decimal places
numbers.sort()
let med = ((numbers[4] + numbers[4]) /2) // determines the median, which is the two middle numbers of the array /2. 

console.log (`the total is ${total}`) // displays the total of all the numbers
console.log(`the index of the lowest number is ${MinIndex}`) // displays the smallest number
console.log(`the index of the hightst number is ${MaxIndex}`)  // displays the largest number
console.log(`The average is ${ave}`)  // displays the average
console.log (`the median is ${med}`) //displays the median