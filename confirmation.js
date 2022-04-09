// // collect data
// // let x = localStorage.getItem("booking-form")
// let fname = localStorage.getItem("fname")
// let email = localStorage.getItem("email")
// let from = localStorage.getItem("from")
// let to = localStorage.getItem("to")
// let depart = localStorage.getItem("depart")
// let returnd = localStorage.getItem("returnd")
// let travel = localStorage.getItem("travel")
// let adult = localStorage.getItem("adult")
// let child = localStorage.getItem("child")
// let nid = localStorage.getItem("nid")
// let submitBtn = localStorage.getItem("submit")




// // display data
// document.getElementById('fname').innerHTML = `${fname}`
// document.getElementById('email').innerHTML = `${email}`
// document.getElementById('from').innerHTML = `${from}`
// document.getElementById('to').innerHTML = `${to}`
// document.getElementById('depart').innerHTML = `${depart}`
// document.getElementById('returnd').innerHTML = `${returnd}`
// document.getElementById('travel').innerHTML = `${travel}`
// document.getElementById('adult').innerHTML = `${adult}`
// document.getElementById('child').innerHTML = `${child }`
// document.getElementById('nid').innerHTML = `${nid }`
// // document.getElementById('adult').innerHTML = `$${adult * 50}`
// // document.getElementById('child').innerHTML = `$${child * 20}`
// // document.getElementById('nid').innerHTML = `$${noOfAdult * 50 + noOfChild * 20}`

// collect data
let fullname = localStorage.getItem("fullname")
let mail = localStorage.getItem("mail")
let from = localStorage.getItem("from")
let to = localStorage.getItem("to")
let departDate = localStorage.getItem("departDate")
let returnDate = localStorage.getItem("returnDate")
let classType = localStorage.getItem("classType")
let noOfAdult = localStorage.getItem("noOfAdult")
let noOfChild = localStorage.getItem("noOfChild")
let nidno = localStorage.getItem("nidno")


// display data
document.getElementById('fname').innerHTML = `${fullname}`
document.getElementById('email').innerHTML = `${mail}`
document.getElementById('from').innerHTML = `${from}`
document.getElementById('to').innerHTML = `${to}`
document.getElementById('journeyDate').innerHTML = `${departDate}`
document.getElementById('returnDate').innerHTML = `${returnDate}`
document.getElementById('classType').innerHTML = `${classType}`
document.getElementById('adult').innerHTML = `${noOfAdult}`
document.getElementById('child').innerHTML = `${noOfChild}`
document.getElementById('nid').innerHTML = `${nidno}`

