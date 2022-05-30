// Number 1
document.querySelector("#group-name").innerHTML = "Team Ares"

document.querySelector("#group-name").style="color: red; font-weight: 400; font-size: 48px; padding: 0; text-align: center; text-shadow: 4px 6px 4px black; font-weight: 400; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; margin: 15px 0;";

// Number 2
let team_members = ['Izima', 'Austin', 'Oriyomi', 'Giyaatha', 'Susan', 'Abiye', 'Amos']

console.log("2. " + team_members[0])

// Number 3
const person = {
    firstName: "Obisike",
    lastName: "Izima",
    bestMovie: "Jupiter Ascending",
    complexion: "Fair",
    birthMonth: "April",
    state: "Abia",
    groupName: "Team Ares"
}

console.log(`3. My best movie is ${person.bestMovie}`)

// Number 4
let noun = "Cheetah"
let verb = "ate"
let adjective = "giant"

console.log("Number 4")
const sentence1 = `A ${noun} ${verb} an antelope.`
console.log(sentence1)

const sentence2 = `Izima ${verb} a ${adjective} plate of food.`
console.log(sentence2)

const sentence3 = `I saw a ${adjective} ${noun}`
console.log(sentence3)

const sentence4 = `The ${adjective} ${noun} washed his hands before he ${verb}`
console.log(sentence4)

const sentence5 = `The ${adjective} almost ${verb} off his finger`
console.log(sentence5)

console.log("Number 5")
// Number 5
function remainder(dividend, divisor) {
    console.log(dividend % divisor)
}

remainder(27, 5)

// Number 6
function almighty_formula(a, b, c) {
    let x1 = ( -b + (b**2 - (4 * a *c))**0.5 )/ 2 * a
    let x2 = ( -b - (b**2 - (4 * a *c))**0.5 )/ 2 * a
    
    console.log(`6. Answer = ${x1}, ${x2}`)
}

almighty_formula(1, 2, -3)

// Number 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myAdjective + " " + myNoun +  " " + myVerb + " " + myAdverb + "."
console.log("7. " + wordBlanks)

// Number 8
function circle_area(radius) {
    const PI = 3.142
    area = PI * radius ** 2
    console.log(`8. The area of the circle is ${area}cm squared.`)
}
circle_area(9)

// Number 9
let principal = 8200;
let rate = 0.175;
let time = 2.5;
let interest;

interest = principal * rate * time
console.log("9. " + interest)

// Number 10
console.log(`10. 10 % 4 = ${10 % 4}`)

// Number 11
console.log("Number 11")
// Test 1
    let meritHeight1 = 1.69;
    let meritMass1 = 78;

    let nutjobHeight1 = 1.95;
    let nutjobMass1 = 92;

    let meritBMI1 = meritMass1 / meritHeight1 ** 2;

    let nutjobBMI1 = nutjobMass1 / nutjobHeight1 ** 2;

    let meritHigherBMI1 = meritBMI1 > nutjobBMI1;

    console.log("Test 1")
    console.log(meritBMI1)
    console.log(nutjobBMI1)

// Test 2
    let meritHeight2 = 1.76;
    let meritMass2 = 85;

    let nutjobHeight2 = 1.88;
    let nutjobMass2 = 95;

    let meritBMI2 = meritMass2 / meritHeight2 ** 2;

    let nutjobBMI2 = nutjobMass2 / nutjobHeight2 ** 2;

    let meritHigherBMI2 = meritBMI2 > nutjobBMI2;

    console.log("Test 2")
    console.log(meritBMI2)
    console.log(nutjobBMI2)