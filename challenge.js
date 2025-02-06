
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
        if (charmap[char]) {
            charmap[char] = charmap[char] + 1;
        }
        else {
            charmap[char] = 1;
        }
        
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


