
// reverse challenge

function reversed(str) {
    let reverse = '';
    for (let char of str){
        reverse = char + reverse;
    }

    // for (let i = 0; i < str.length; i++){
    //     reverse = str[i] + reverse;
    // } same as above will get some result
    return reverse;
}
console.log(reversed('my friend'));

// paradrom challenge

function paradrom(str) {
    let parad = '';
    for (let char of str) {
        parad = char + parad;
    }
    if (str == parad) {
        return true;
    }
    
    return false;
}
console.log(paradrom('madam'));

// diplay character which is most used "abcccccccccddddd"

function maxchar(str) {
    const charmap = {};
    let max = 0;
    let machar = '';

    for (let char of str) {
     charmap[char] = ++charmap[char] ||1;
       
        
    }

    for (let char in charmap) {
        if (charmap[char] > max) {
            max = charmap[char];
            machar = char;
        }
    }

    return max;
}
console.log(maxchar('aaaassssssssssssssssbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhhh'));

// given an array and chunk size, divide the array into many subarrays where each subarray is of length size
// chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

function chunk(arry, size) {
    const chunked = [];
    let index = 0;
    while (index < arry.length) {
       chunked.push(arry.slice(index, index + size));
        index = index + size;
    }
    return chunked;
}

console.log(chunk([1,2,3,4,5,6,7,8,9], 3));

// array method
// 1.length: to the length of the array
// 2.toString: to convert the array to string
// 3.at: to get the element at the given index
// 4.pop: to remove the last element from the array
// 5.push: to add the element to the end of the array
// 6.shift: to remove the first element from the array
// 7.unshift: to add the element to the beginning of the array
// 8.concat: to merge two or more arrays

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.concat(fruits1));

function division (num1, num2) {
    return num1 / num2;
}

console.log(division(10, 2));