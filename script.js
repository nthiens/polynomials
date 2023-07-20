const cAns = document.getElementById('cAns')
const bAns = document.getElementById('bAns')
const c = document.getElementById('c')
const b = document.getElementById('b')
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
let final1 = document.getElementById('final1')
let final2 = document.getElementById('final2')
const add = document.getElementById('add')
const body = document.querySelector('body')
const last = document.getElementById('last')
const br = document.createElement('br')
const factors = document.getElementById('factors')

cAns.addEventListener('click', () => myFunction1())
bAns.addEventListener('click', () => myFunction2())
b1b2Ans.addEventListener('click', () => myFunction3())
finalAns.addEventListener('click', () => myFunction4())
add.addEventListener('click', () => addInput())
minus.addEventListener('click', () => minusInput())

function myFunction1() {
    let answer = ""
    if (c.value == -28) {
        answer = "Correct!"
    }
    else if (c.value.length == 0) {
        answer = 'Please input an answer'
    }
    else {
        answer = "Incorrect! Try Again"
    }
    document.getElementById('1').textContent = answer
}

function myFunction2() {
    let answer = ""
    if (b.value == 3) {
        answer = "Correct!"
    }
    else if (b.value.length == 0) {
        answer = 'Please input an answer'
    }
    else {
        answer = "Incorrect! Try Again"
    }
    document.getElementById('2').textContent = answer
}

function myFunction3() {
    let answer = ""
    if (((b1.value == 7) && (b2.value == -4)) || ((b1.value == -4) && (b2.value == 7))) {
        answer = "Correct!"
    }
    else if ((b1.value.length == 0) && (b2.value.length == 0)) {
        answer = 'Please input an answer'
    }
    else if (((b1.value.length == 0) && (b2.value.length > 0)) || ((b1.value.length > 0) && (b2.value.length == 0))) {
        answer = 'Missing a factor'
    }
    else {
        answer = "Incorrect! Try Again"
    }
    document.getElementById('3').textContent = answer
}

function myFunction4() {
    let answer = ""
    //let f1 = final1.value
    //f1 = replaceAll(" ",'')
    const f1 = final1.value.toString()
    const f2 = final2.value.toString()
    const f1NS = f1.replaceAll(' ', '');
    const f2NS = f2.replaceAll(' ', '');
    if (((f1NS == 'x+7') && (f2NS == 'x-4')) || ((f1NS == 'x-4') && (f2NS == 'x+7'))) {
        answer = "Correct!"
    }
    else if ((f1NS.length == 0) && (f2NS.length == 0)) {
        answer = 'Please input an answer'
    }
    else if (((f1NS.length == 0) && (f2NS.length > 0)) || ((f1NS.length > 0) && (f2NS.length == 0))) {
        answer = 'Missing an input'
    }
    else {
        answer = "Incorrect! Try Again"
    }
    document.getElementById('4').textContent = answer
}


c.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        myFunction1()
    }
})

b.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        myFunction2()
    }
})

b1.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        myFunction3()
    }
})

b2.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        myFunction3()
    }
})

final1.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        myFunction4()
    }
})

final2.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        myFunction4()
    }
})

function addInput() {
    const div = document.createElement("div")
    div.setAttribute("id", "twoinputs")
    const inp1 = document.createElement("input")
    const inp2 = document.createElement("input")
    inp1.setAttribute('type', 'text')
    inp2.setAttribute('type', 'text')
    div.appendChild(inp1)
    div.appendChild(inp2)
    factors.insertBefore(div,minus)
}

function minusInput() {
    let ti = document.getElementById("twoinputs")
    factors.removeChild(ti)
}