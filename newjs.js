//Generating Today's Date   
var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
let time = today.toLocaleString('en-US');


// today = yyyy + '/' + mm + '/' + dd;
// document.write(today);
document.getElementById("date").innerHTML = 'Issued : ' +time;

let Information = [];


//Collect Information and store it on variables 
function collected(){
    var User_fname = document.querySelector('#fname').value;
    var User_lname = document.querySelector('#lastname').value;
    var User_email = document.querySelector('#email').value;
    var User_phone = document.querySelector('#phone').value;
    var User_address = document.querySelector('#address').value;
    var User_company  = document.querySelector('#company').value;
    var User_comp = document.querySelector('#companies').value;

    localStorage.setItem('fname', User_fname);
    localStorage.setItem('lname', User_lname);
    localStorage.setItem('email', User_email);
    localStorage.setItem('phone', User_phone);    
    localStorage.setItem('address', User_address);
    localStorage.setItem('company', User_company);
    localStorage.setItem('companies', User_comp);

    
    localStorage.setItem('c1', '');
    localStorage.setItem('c2', '');
    localStorage.setItem('c3', '');
    localStorage.setItem('c4', '');
    localStorage.setItem('c5', '');
    localStorage.setItem('c6', '');


    // if(User_comp == '1'){
    //     document.getElementById("co11").innerHTML = "1 Database"
    // }
    // if (User_comp == '1.5'){
    //     document.getElementById("co22").innerHTML = "2-10 Databases"
    // }
    // if(User_comp == '2'){
    //     document.getElementById("co33").innerHTML = "More than 10 Databases"
    // }

    // var company = document.getElementById('company').value;
    // document.getElementById("Tocompany").innerHTML = company;

    // document.getElementById("Toaddress").innerHTML = User_address;

}

//Hide the Form from the landing page
function changeStyle(){
    var element = document.getElementById("content");
    element.style.display = "none";
}


function checkk(results) {

    // var User_fname = document.querySelector('#fname').value;
    // let User_lname = document.querySelector('#lastname').value;
    // let User_email = document.querySelector('#email').value;
    // let User_phone = document.querySelector('#company').value;

    var basic = 0;
    var add = 0;
    var mult = document.querySelector('#companies').value;


    // if(document.getElementById("co1").checked) {
    //     mult = 1;
    //     document.getElementById("co11").innerHTML = "1 Database"
        
    //    }

    // if(document.getElementById("co2").checked) {
    //     mult = 1.5;
    //     document.getElementById("co22").innerHTML = "2-10 Databases"
    //    }

    // if(document.getElementById("co3").checked) {
    //     mult = 2;
    //     document.getElementById("co33").innerHTML = "More than 10 Databases"
    //    }

    if(document.getElementById("c1").checked) {
    // document.getElementById("d1").innerHTML = "Sales"
     add += 1000;
    //  document.getElementById("d11").innerHTML = 1000*mult;
     var User_c1 = document.querySelector('#c1').value;
     localStorage.setItem('c1', User_c1);

    }
    if(document.getElementById("c2").checked) {
    // document.getElementById("d2").innerHTML = "Inventory"
     add += 1000;
    //  document.getElementById("d22").innerHTML = 1000*mult;
     var User_c2 = document.querySelector('#c2').value;
     localStorage.setItem('c2', User_c2);
 
    }
    if(document.getElementById("c3").checked) {
    // document.getElementById("d3").innerHTML = "GL"
     add += 1000;
    //  document.getElementById("d33").innerHTML = 1000*mult;
     var User_c3 = document.querySelector('#c3').value;
     localStorage.setItem('c3', User_c3);
    } 

    if(document.getElementById("c4").checked) {
    // document.getElementById("d4").innerHTML = "AR"
     add += 1000;
    //  document.getElementById("d55").innerHTML = 1000*mult;
     var User_c4 = document.querySelector('#c4').value;
     localStorage.setItem('c4', User_c4);

    }
    if(document.getElementById("c5").checked) {
    // document.getElementById("d5").innerHTML = "AP"
     add += 1000;
    // document.getElementById("d55").innerHTML = 1000*mult;
    var User_c5 = document.querySelector('#c5').value;
    localStorage.setItem('c5', User_c5);


    }
    if(document.getElementById("c6").checked) {
     add += 1000;
    //  document.getElementById("d66").innerHTML = 1000*mult;
     var User_c6 = document.querySelector('#c6').value;
        //  document.getElementById("d6").innerHTML = "GP"
         localStorage.setItem('c6', User_c6);

    }
    var p = basic + add * mult;
    var d_p = add * mult;
    var price = p ;
    // document.getElementById('totall').innerHTML = price;
    results = price;
    localStorage.setItem('Total', results);
    return results;
   
   }

   function uncheckBoxes() {
    $(".checkbox").prop("checked", false);
}

function calculation(){
 var results = checkk();
 console.log(results);
}

let clearbtn = document.querySelector('button');
let input = document.querySelectorAll('input');

clearbtn.addEventListener('btn', () => {
     input.forEach(input =>  input.value = '')
});


