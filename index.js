let submitBtn = document.querySelector('.submit')
let fname = document.querySelector('#fname')
let email = document.querySelector('#email')
let from = document.querySelector('#start')
let to = document.querySelector('#end')
let departDate = document.querySelector('#journeyDate')
let returnDate = document.querySelector('#returnDate')
let classType = document.querySelector('#classType')
let noOfAdult = document.querySelector('#adult')
let noOfChild = document.querySelector('#child')
let nidno = document.querySelector('#nid')



submitBtn.addEventListener('click', function(){
    // location.href = "checkout_page.html"
    fname = fname.value
    email = email.value
    from = from.value
    to = to.value
    departDate = departDate.value
    returnDate = returnDate.value
    // classType = select.options[select.selectedIndex].value;
    classType = classType.value
    noOfAdult = noOfAdult.value
    noOfChild = noOfChild.value
    nidno = nidno.value

    localStorage.setItem("fname", fname)
    localStorage.setItem("email", email)
    localStorage.setItem("from", from)
    localStorage.setItem("to", to)
    localStorage.setItem("departDate", departDate)
    localStorage.setItem("returnDate", returnDate)
    localStorage.setItem("classType", classType)
    localStorage.setItem("noOfAdult", noOfAdult)
    localStorage.setItem("noOfChild", noOfChild)
    localStorage.setItem("nidno", nidno)
    
    console.log(classType);
})










//     let x = document.querySelector("#booking-form")
//     let fname = document.querySelector("#fname")
//     let email = document.querySelector("#email")
//     let from = document.querySelector("#from")
//     let to = document.querySelector("#to")
//     let depart = document.querySelector("#depart")
//     let returnd = document.querySelector("#returnd")
//     let travel = document.querySelector("#travel")
//     let adult = document.querySelector("#adult")
//     let child = document.querySelector("#child")
//     let nid = document.querySelector("#nid")
//     let submitBtn = document.querySelector('#submit')

    
// submitBtn.addEventListener('click', function(){
//   // location.href = "checkout_page.html"
//   fname = fname.value
//   email = email.value
//   from = from.value
//   to = to.value
//   depart = depart.value
//   returnd = returnd.value
//   // classType = select.options[select.selectedIndex].value;
//   travel = travel.value
//   adult = adult.value
//   child = child.value
//   nid = nid.value
 
//   localStorage.setItem("fname", fname)
//   localStorage.setItem("email", email)
//   localStorage.setItem("from", from)
//   localStorage.setItem("to", to)
//   localStorage.setItem("depart", depart)
//   localStorage.setItem("returnd", returnd)
//   localStorage.setItem("travel", travel)
//   localStorage.setItem("adult", adult)
//   localStorage.setItem("child", child)
//   localStorage.setItem("nid", nid)
  
//   console.log(travel);
// })






// function myFunction() {
//     event.preventDefault();
    
//     fname += x.elements[1].value + "<br>";
//     email += x.elements[2].value + "<br>";
//     from += x.elements[3].value + "<br>";
//     to += x.elements[4].value + "<br>";
//     depart += x.elements[5].value + "<br>";
//     returnd += x.elements[6].value + "<br>";
//     travel += x.elements[7].value + "<br>";
//     adult += x.elements[8].value + "<br>";
//     child += x.elements[9].value + "<br>";
//     nid += x.elements[10].value + "<br>";
   
//     .innerHTML = fname;
//     .innerHTML = email;
//     .innerHTML = from;
//     .innerHTML = to;
//     .innerHTML = depart;
//     .innerHTML = returnd;
//     .innerHTML = travel;
//     .innerHTML = adult;
//     .innerHTML = child;
//     .innerHTML = nid;
//   }