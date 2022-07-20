// Generating Today's Date   
var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
let timee = today.toLocaleString('en-US');

// today = yyyy + '/' + mm + '/' + dd;
// document.write(today);
document.getElementById("date").innerHTML = 'Issued : ' + timee;

var mult = localStorage.getItem('companies');

document.getElementById("Tocompany").innerHTML = localStorage.getItem('company')
document.getElementById("Toaddress").innerHTML = localStorage.getItem('address')

if(localStorage.getItem('c1')!==''){document.getElementById("d1").innerHTML = localStorage.getItem('c1')
document.getElementById("d11").innerHTML = 1000*mult;}
if(localStorage.getItem('c2')!==''){document.getElementById("d2").innerHTML = localStorage.getItem('c2')
document.getElementById("d22").innerHTML = 1000*mult;}
if(localStorage.getItem('c3')!==''){document.getElementById("d3").innerHTML = localStorage.getItem('c3')
document.getElementById("d33").innerHTML = 1000*mult;}
if(localStorage.getItem('c4')!==''){document.getElementById("d4").innerHTML = localStorage.getItem('c4')
document.getElementById("d44").innerHTML = 1000*mult;}
if(localStorage.getItem('c5')!==''){document.getElementById("d5").innerHTML = localStorage.getItem('c5')
document.getElementById("d55").innerHTML = 1000*mult;}
if(localStorage.getItem('c6')!==''){document.getElementById("d6").innerHTML = localStorage.getItem('c6')
document.getElementById("d66").innerHTML = 1000*mult;}



document.getElementById('totall').innerHTML = localStorage.getItem('Total');