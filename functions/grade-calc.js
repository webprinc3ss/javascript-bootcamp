//student score, total possible score
// 15/20 -> "You got a C (75%)!"
// 90-100 A, 80-89 B, 70-79 C, 60-69 D, <60 F

//let getTip = function (total, tipPercent = .2) {
   // let percent = tipPercent * 100
   // let tip = total * tipPercent
    //return `A ${percent}% tip on $${total} would be $${tip}`
//}

let getScore = function (score, total) {
    let percent = (score / total) * 100
    let letterGrad = ''

    if (percent >= 90) {
        letterGrade = 'A'

    } else if (percent >= 80) {
        letterGrade = 'B'

    } else if (percent >= 70) {
        letterGrade = 'C'

    } else if (percent >= 60) {
        letterGrade = 'D'

    } else {
        letterGrade = 'F'
        
    }
    return `You got an ${letterGrade} ${percent}%!`
}

let studentScore = getScore(10, 20)
console.log(studentScore)