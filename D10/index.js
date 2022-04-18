// JS EXERCISES

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = 'John'
let y = 'Doe'

// 22) Create an object with properties such name, surname, 
const profile = {
    name: 'Johnattan',
    surname: 'Jostar',
    age: 32,
    email: 'jostar@gmail.com'
}

// 23) Delete Email from the previously created object
delete profile.email

// 24) Create an array with 10 strings in it
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const random = () => Math.floor(Math.random() * 12) + 1
const arrayString = []
for (let i = 0; i < 10; i++) {
    let lengthOfArray = random()
    let randomString = ''
    for (let j = 0; j < lengthOfArray; j++) {
        if(j === 0) {
            randomString += alphabet[random()]
            // console.log(randomString)
        }else randomString += alphabet[random()].toLowerCase()
    }
    arrayString.push(randomString)
}

let randomLetter = ''

let datash = arrayString[random()]
// console.log(randomLetter.concat(alphabet[random()]))

// 25) Print in the console every string in the previous array
for (let i = 0; i < arrayString.length; i++) {
    // console.log(arrayString[i])
}

// 26) Create an array with 100 random numbers in it
const random100Numbers = []
for(let i = 0; i < 100; i++) {
    random100Numbers.push(random())
}
// console.log(random100Numbers)

// 27) Wrote a function to get the MAX and the MIN from the previously created array
let max = Math.max(...random100Numbers)
let min = Math.min(...random100Numbers)
// console.log(max + ' is max', min + ' is min')

// 28) Create an array of arrays, in which every array has 10 random 
const arrayOfArrays = []

for (let i = 0; i < 10; i++) {
    arrayOfArrays[i] = []
    for (let j = 0; j < 10; j++) {
        arrayOfArrays[i].push(random())
    }
}
// console.log(arrayOfArrays)

// 29) Create a function that gets 2 arrays and returns the longest one
const longestArray = (a, b) => {
    if(a.length > b.length) {
        return a
    }else return b
}
// console.log(longestArray(arrayOfArrays, random100Numbers))

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
let a = [3, 4, 5]
let b = [5, 8, 9]
const higherSumOfvalues = function(a, b) {
    let sumA = 0
    let sumB = 0
    for(let i = 0; i < a.length; i++) {
        sumA += a[i]
    }
    for(let i = 0; i < b.length; i++) {
        sumB += b[i]
    }
    if(sumA > sumB) {
        return sumA
    }else return sumB
}

// console.log(higherSumOfvalues(a, b))

// DOM 
// 31) Get element with ID "container" from the page
let container = document.getElementById('flex-container')

// 32) Get every "td" from the page
let everyTd = document.getElementsByTagName('td')

// 33) Create a cycle that prints the text inside every td of the page
for(let i = 0; i < everyTd.length; i++) {
    if(everyTd[i].firstChild === null) {
        everyTd[i].innerText = `lorem fdfdf jkfdfd dfkjdfdkf dfd`
    }
}

// 34) Write a function to change the heading of the page
const randomHeaders = ['Cool Website', 'Module Ten', 'Homework Web', 'Exericises Web', "Revision Web"]
document.getElementsByTagName('header')[0].addEventListener('click', function() {
    document.getElementsByTagName('header')[0].firstElementChild.innerText = randomHeaders[Math.round(Math.random() * 4)]
})

// 35) Write a function to add an extra row to the table
const extraRow = document.createElement('tr')
document.getElementsByTagName('table')[0].appendChild(extraRow)

// 36) Write a function to add the class "test" to each row in the table
for(let i = 0; i < document.getElementsByTagName('tr').length; i++) {
    document.getElementsByTagName('tr')[i].classList.add('test')
}

// 37) Write a function to add a red background to every link in the page
for(let i = 0; i < everyTd.length; i++) {
    if(everyTd[i].firstElementChild !== null && everyTd[i].innerText === 'link of picture') {
        everyTd[i].style.backgroundColor = '#1d4532dc'
    }
}

// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = alert('Page is successfully loaded')

// 39) Write a function to add new items to a UL
for(let i = 0; i < 3; i++) {
    const li = document.createElement('li')
    li.innerText = `${i + 1}. ` + randomHeaders[Math.round(Math.random() * 4)]
    li.style.listStyle = 'none'
    document.getElementsByTagName('ul')[0].appendChild(li)
}

// 40) Write a function to empty a list
document.getElementsByTagName('ul')[0].children[2].innerText = ''

// EXTRA 
// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
for(let i = 0; i < everyTd.length; i++) {
    if(everyTd[i].firstElementChild !== null && everyTd[i].innerText === 'link of picture') {
        everyTd[i].addEventListener('mouseover', function() {
            alert("https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340")
        })
    }
}

// 42) Add a button to hide every image on the page
document.getElementsByTagName('div')[1].innerHTML += `<button onclick='hideImage()' id='hideImage'>Hide Image</button>`
const hideImage = function() {
    for(let i = 0; i < document.getElementsByTagName('img').length; i++) {
        document.getElementsByTagName('img')[i].classList.toggle('hideImage')
    }
}

// 43) Add a button to hide and show the table from the page
// 44) Write a function to sum every number inside the TD (if the content is numeric)
// 45) Delete the last letter from the title each time the user clicks on it
const li1 = document.getElementsByTagName('li')[0]
li1.addEventListener('click', function() {
    li1.innerText = li1.innerText.substring(0, li1.innerText.length - 1)
})

// 46) Change a single TD background color when the user clicks on it
for (let i = 0; i < everyTd.length; i++) {
    everyTd[i].addEventListener('click', function() {
        everyTd[i].style.backgroundColor = 'blue'
    })
}
// 47) Add a button DELETE, on click it should delete a random TD from the page
document.getElementsByTagName('div')[1].innerHTML += `<button onclick='deleteCell()' id='deleteCell'>Remove Random Cell</button>`
const deleteCell = () => document.getElementsByTagName('td')[random()].remove()

// 48) Add a pink border to a cell when the mouse is over 
for (let i = 0; i <document.getElementsByTagName('td').length; i++) {
    document.getElementsByTagName('td')[i].addEventListener('mouseover', function() {
        document.getElementsByTagName('td')[i].classList.toggle('pinkBorder')
    })
}

// 49) Write a function to add a table with 4 rows and 3 columns programmatically
const table = document.getElementsByTagName('table')
for (let i = 0; i < 4; i++) {
    const tr = document.createElement('tr')
    for (let j = 0; j < 3; j++) {
        const td = document.createElement('td')
        tr.appendChild(td)
    }
    table[0].appendChild(tr)
}

// 50) Write a function to remove the table from the page
document.getElementsByTagName('div')[1].innerHTML += `<button onclick="removeTable()">Remove Table</button>`
const removeTable = function () {
    document.getElementsByTagName('table')[0].classList.toggle('hideTable')
}






