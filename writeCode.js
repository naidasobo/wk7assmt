
//1
function addToZero(arr) {
    let zeroSum = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] + arr[j] === 0) {
                zeroSum = true
            }}
        }
    }console.log(zeroSum)
    
}



addToZero([])
addToZero([1])
addToZero([1, 2, 3])
addToZero([1, 2, -2])

// O(n^2)

//2
function hasUniqueChars(str) {
    const strArr = str.split('')
    let uniqueResult = true

    for (let i = 0; i < strArr.length; i++) {
        if (strArr.indexOf(strArr[i]) != strArr.lastIndexOf(strArr[i])) {
            uniqueResult = false
        } 
    }
    console.log(uniqueResult)
    return uniqueResult
}

hasUniqueChars('Monday')
hasUniqueChars('Moonday')

// O(n)


//3
function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphArr = alphabet.split('');
    str = str.toLowerCase().split(' ').join('')
    for (let i = 0; i < str.length; i++){
      const letter = str[i];
      const index = alphArr.indexOf(letter)
      if (index !== -1) {
      alphArr.splice(index, 1)
      }
    }
    return !alphArr.length
}
console.log(isPangram('This is a bunch of words together'))
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

//O(n)


//4
function findLongestWord(arr) {
    let longestWord = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord) {
            longestWord = arr[i].length
           
        }  
    } console.log(longestWord)
    return longestWord
}

findLongestWord(['hi', 'hello'])
findLongestWord(['hi', 'hello', 'alphabet', 'gold', 'purple'])

//O(n)