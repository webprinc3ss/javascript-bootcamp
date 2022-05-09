//student score, total possible score
// 15/20 -> "You got a C (75%)!"
// 90-100 A, 80-89 B, 70-79 C, 60-69 D, <60 F

//let getTip = function (total, tipPercent = .2) {
   // let percent = tipPercent * 100
   // let tip = total * tipPercent
    //return `A ${percent}% tip on $${total} would be $${tip}`
//}

let getScore = function (score, total) {
    let percent = score/total * 100

    if (percent > 89) {
        return `You got an A ${percent}%!`
    } else if (percent < 90 && percent > 79) {
        return `You got an B ${percent}%!`
    } else if (percent < 80 && percent > 69) {
        return `You got an C ${percent}%!`
    } else if (percent < 70 && percent > 59) {
        return `You got an D ${percent}%!`
    } else {
        return `You got an F ${percent}%!`
    }
}

let studentScore = getScore(15, 20)
console.log(studentScore)