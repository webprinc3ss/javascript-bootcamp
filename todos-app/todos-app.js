const paragraphs = document.querySelectorAll('p')
// console.log(paragraphs)

paragraphs.forEach(function (p) {
    if (p.textContent.includes("the")) {
        p.remove()
    }
})