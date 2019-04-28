

const changeWord = (word) => {
    let firstStrWithoutParentheses, lastStrWithoutParentheses, firstStrWithParentheses
    let firstParentheses, lastParentheses = 0, countFirstParentheses = 0, countLastParentheses = 0
    let str1 = [], str2 = []
    for(let i=0; i<word.length; i++) {
        if(word[i] == '(') {
            str1[countFirstParentheses] = i
            countFirstParentheses++
        }
        if(word[i] == ')') {
            str2[countLastParentheses] = i
            countLastParentheses++
        }
    }

    let newStr1 = word.slice(str1[str1.length-countFirstParentheses], str2[str2.length-1]+1)
    let newStr2 = word.slice(str1[str1.length-1], str2[str2.length-countLastParentheses]+1) 
    for(let i=0; i<countFirstParentheses ; i++) {
        
    }

    firstParentheses = word.indexOf("(")
    lastParentheses = word.indexOf(")")
    if(firstParentheses != 0) {
        firstStrWithoutParentheses = word.substr(0, firstParentheses)
    }
    if(lastParentheses != word.length) {
        lastStrWithoutParentheses = word.substr(lastParentheses+1, word.length)
    }
    const newWord = word.slice(firstParentheses+1, lastParentheses)
    if(typeof firstStrWithoutParentheses == 'undefined') {
        return newWord.split("").reverse().join("") + lastStrWithoutParentheses
    }    
    else {
        return firstStrWithoutParentheses + newWord.split("").reverse().join("") + lastStrWithoutParentheses
    }
}

console.log(changeWord('foo(bar)'))