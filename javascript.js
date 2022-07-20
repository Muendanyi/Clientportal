// // let btnShow = document.querySelector('button');
// // let result = document.querySelector('h1');

// // btnShow.addEventListener('click', () => {
// //     let checkbox = document.querySelector('input[type="checkbox"]:checked');
// //     result.innerText = checkbox.parentElement.textContent;    
// // });

// // Get all your buttons
// var buttons = document.querySelectorAll('input[type="Checkbox"');

// // Get your input field
// var input = document.getElementById('display');

// // Add a eventListener to every button
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function() { // when a button gets clicked, an function will fire
//     input.value += this.value; // 'this' is the button that gets clicked. We add its value to the input field
//   });
// }

addEventListener.getElementById()

function db_Selection(){
    if(document.getElementById("t1").checked){
        var img1 = document.createElement("img");
        img1.src = "sage_log.png"
        document.getElementById('logo1').innerHTML = img1
    }
}

function check() {
    var basic = 0;
    var add = 0;
    if(document.getElementById("id_1").checked) {
     add += document.getElementById("id_1").value;
    }
    if(document.getElementById("id_2").checked) {
     add += document.getElementById("id_1").value;
    }
    if(document.getElementById("id_3").checked) {
     add += value;
    }
  
    if(document.getElementById("id_4").checked) {
     add += 1000;
    }
    if(document.getElementById("id_5").checked) {
     add += 1000;
    }
    if(document.getElementById("id_6").checked) {
     add += 1000;
    }
    var p = basic + Number(add);
    var price = p ;
    document.getElementById('total').innerHTML = price;
   }