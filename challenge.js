
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

let text = "       Hello World!        ";
let result = text.trim();
console.log(result);

// fizzbuzz challenge

function fizzbuzz(num) {
    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
            
        }
        else if (i % 3 === 0) {
            console.log('fizz');
            
        }
        else if (i % 5 === 0) {
            console.log('buzz');
            
        }
        else {
            console.log(i);
        }
    }
}
fizzbuzz(30);


//

function diplay(n) {
    for (let row = 1; row <= n; row++){
        let line = "";
        for (let col = 1; col <= n; col++){
            if (col <= row) {
                line += "#";
            } 
            else {
                line += " ";
            }
        }
        console.log(line);
        
    }  
}
diplay(5);

// reverse of words

function reversewords(str) {
    return str.trim().split(/\s+/).reverse().join(' ');
}
console.log(reversewords("the sky is blue"));

// revesrse vowels

function reverseVowels(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let chars = s.split("");
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join("");
}
console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode")); 

// merging words

function mergeAlternately(word1, word2) {
    let merged = '';
    let i = 0, j = 0;
    
    // Merge letters in alternating order
    while (i < word1.length && j < word2.length) {
        merged += word1[i];
        merged += word2[j];
        i++;
        j++;
    }
    
    // Append the remaining letters, if any
    merged += word1.slice(i);
    merged += word2.slice(j);
    
    return merged;
}

// Test cases
console.log(mergeAlternately("abc", "pqr"));   // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs"));   // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq"));   // Output: "apbqcd"



// Here is the JavaScript solution for finding the largest string that divides both str1 and str2:

function gcdOfStrings(str1, str2) {
    // Helper function to check if str can be formed by repeating pattern
    const isDivisible = (str, pattern) => {
        return str === pattern.repeat(str.length / pattern.length);
    };

    // Find the greatest common divisor (GCD) of two numbers
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    // Calculate the GCD length of the two strings
    const gcdLength = gcd(str1.length, str2.length);
    const candidate = str1.substring(0, gcdLength);

    // Check if the candidate divides both strings
    if (isDivisible(str1, candidate) && isDivisible(str2, candidate)) {
        return candidate;
    }
    
    return '';
}

// Test cases
console.log(gcdOfStrings("ABCABC", "ABC"));    // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB"));   // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE"));     // Output: ""

// Here is the JavaScript solution for determining if each kid can have the greatest number of candies after receiving the extra candies:
function kidsWithCandies(candies, extraCandies) {
    // Find the maximum number of candies among all the kids
    const maxCandies = Math.max(...candies);
    
    // Check if each kid can have the greatest number of candies
    return candies.map(candy => candy + extraCandies >= maxCandies);
}

// Test cases
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); 
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));  
console.log(kidsWithCandies([12, 1, 12], 10));      


// Here is the JavaScript solution to find distinct integers in nums1 not present in nums2, and vice versa:

function findDifference(nums1, nums2) {
    // Convert arrays to sets to remove duplicates and allow fast lookups
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // Find elements in nums1 not in nums2
    const diff1 = [...set1].filter(num => !set2.has(num));

    // Find elements in nums2 not in nums1
    const diff2 = [...set2].filter(num => !set1.has(num));

    return [diff1, diff2];
}

// Test cases
console.log(findDifference([1, 2, 3], [2, 4, 6]));   // Output: [[1, 3], [4, 6]]


// Here is the JavaScript solution to compress the array of characters in-place:

function compress(chars) {
    let write = 0;  // Pointer to write the compressed characters
    let read = 0;   // Pointer to read through the array
    
    while (read < chars.length) {
        const currentChar = chars[read];
        let count = 0;
        
        // Count the number of consecutive repeating characters
        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }
        
        // Write the character
        chars[write] = currentChar;
        write++;
        
        // If the count is more than 1, write the count as well
        if (count > 1) {
            for (let digit of String(count)) {
                chars[write] = digit;
                write++;
            }
        }
    }
    
    // Return the new length of the array
    return write;
}

// Test cases
let chars1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars1));  // Output: 6
console.log(chars1.slice(0, 6));  // Output: ["a","2","b","2","c","3"]


// remove stars in string

function removeStars(s) {
    const stack = [];
    
    for (const char of s) {
        if (char === '*') {
            stack.pop(); // Remove the closest non-star character
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
}

// Test cases
console.log(removeStars("leet**cod*e")); // Output: "lecoe"



// To find the contiguous subarray of length 𝑘 with the maximum average,

function findMaxAverage(nums, k) {
    // Calculate the sum of the first window of length k
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }
    
    // Initialize the current sum as the maxSum
    let currentSum = maxSum;
    
    // Slide the window over the array
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k]; // Slide the window
        maxSum = Math.max(maxSum, currentSum); // Track the maximum sum
    }
    
    // Return the maximum average
    return maxSum / k;
}

// Test cases
console.log(findMaxAverage([1,12,-5,-6,50,3], 4)); // Output: 12.75000
console.log(findMaxAverage([5], 1));               // Output: 5.00000




// remove zeroes

function moveZeroes(nums) {
    let nonZeroIndex = 0;
    
    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    
    // Fill the rest with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// Test cases
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

let nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]
