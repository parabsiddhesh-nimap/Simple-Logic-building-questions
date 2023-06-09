/* 
1. WAP to find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35], 
without sorting, without using any built-in methods and without deleting duplicate elements. 
What will be the time complexity?
*/
let arr = [1,2,3,5,2,1,3,7];
function secondLargestElement(arr){
    let highest = arr[0];
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > highest){
            secondLargest = highest;
            highest = arr[i];
        } if(arr[i] != highest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
// console.log(secondLargestElement(arr))

/* 
2. WAP to reverse an integer without converting it to a string, 
without using any builtin methods. 
*/
function reverseNumber(num) {
    let reversedNum = 0;
    while (num > 0) {
        reversedNum = (reversedNum * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversedNum;
}
// console.log(reverseNumber(1234));

/* 
3. Swap Values without using any variable a=10, b=12
*/
// Method 1
let a = 10; let b = 12;
[a,b] = [b,a];
//console.log(a,b);

// Method 2
a = a+b;
b = a-b;
a = a-b;
//console.log(a,b);

/* 
4. logic for anagram program with its time complexity. (for large strings)
*/

function checkAnagram(str){
    str.sort()
}

/* 
5. Find the reverse of the string
*/
function reverseString(str){
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i]
    }
    return reversedStr;
};

// console.log(reverseString('siddhesh'))

/*
6. WAP to find missing elements from the array? 
*/
let missingElements = [1,2,3,5,6,7,8,19]
function findMissingElements(arr) {
    let newArr = [];
    for (let i = 0; i < missingElements.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            let difference = arr[i + 1] - arr[i];
            console.log(difference);
            for (let j = 1; j < difference; j++) {
              newArr.push(arr[i] + j);
            }
        }
    };
    return newArr
}
// console.log(findMissingElements(missingElements));

/*
7. WAP to find the given string is Palindrome or not
*/
function palindrome(str){
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i]
    }
    if(reversedStr === str) return true;
    return false;
};
// console.log(palindrome('madam'));

/* 
8. WAP to print Fibonacci series with recursion
*/
function Fibonacci(n) {   
    if (n <= 1) return n;
    return Fibonacci(n-1) + Fibonacci(n-2)
};
function FibonacciSeries(n) {
    for (let i = 0; i < n; i++) {
        console.log(Fibonacci(i));
      }
}
// console.log(FibonacciSeries(10));

/* 
9. WAP to print Fibonacci series without recursion.
*/
function fibonaciWithoutRecursion(n){
    if (n <= 1) return n;
    let first = 0;
    let second = 1;
    let stack = [first,second]
    for (let i = 2; i < n; i++){
        let next = first + second;
        stack.push(next);
        first = second;
        second = next;
    }       
    return stack
};
// console.log(fibonaciWithoutRecursion(10))

/* 
10. Code to find even numbers in a list
*/
arr = [1,2,34,4,5,7,8,9,10,11,12,13,14,15]
function findEvenNumbers(arr){
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    return even 
}

// console.log(findEvenNumbers(arr))

/* 
11. Find prime numbers from 1 ....n 
*/
function isPrime(n){
    if (n <= 2) return null;
    for (let i = 2; i < n; i++){
        if (n % i == 0) return false;
    } 
    return true;
}

function primeNumber(n){
    for (let i = 0; i < n; i++) {
        if(isPrime(i)) console.log('Prime number: ' + i);
    }
}
// console.log(primeNumber(200))

/*
12. WAP for getting a square root of a given number
*/
function squareRoot(number) {
    return number**0.5
}
// console.log(squareRoot(4))

/* 
13. WAP with 2 different logic, to find all duplicate number in an array
*/
function findDuplicate(arr){
    let duplicateArr = [];
    let newArr = [];
    for (let i = 0; i < arr.length;i++){
        if (!duplicateArr.includes(arr[i])) {
            duplicateArr.push(arr[i]); 
        } else newArr.push(arr[i]);
    }
    return newArr;
};
// console.log(findDuplicate([1,2,3,4,5,5,1]))

function findDuplicate(arr){
    return arr.filter((item,index) => arr.indexOf(item) !== index);
};
// console.log(findDuplicate([1,2,3,4,5,5,1]))


/* 
14. [80, 60, 10, 50, 30, 100, 0, 50]
Find pairs whose sum = 100;
Logic for above problem?
What will be the complexity for it?
Any better solution for the above problem?
*/
function findSum(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == 100) {
                newArr.push([arr[j],arr[j]]);
            }
        }
    }
    return newArr;
}
// console.log(findSum([80, 60, 10, 50, 30, 100, 0, 50]))