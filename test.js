// function functionB(sen){
//     sen = sen.toLowerCase()
//     var words = sen.split(/[^A-Za-z0-9]/)
//     var intMax = 0

//     for(let i = 1; i < words.length; i++){
//         if(words[i].length > words[intMax].length){
//             intMax = i
//             console.log('ok')
//         }
//     }

//     return words[intMax]
// }

// console.log(functionB("am++iNe"))

function functionA (str){
    var result = new String()
    for(let i = 0; i < str.length; i++){
        if(!result.includes(str[i])){
            result += str[i]
        }
    }
    console.log(result)
}

functionA('flemme')