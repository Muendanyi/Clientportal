//Names
// let name_ = document.getElementById('fname').value;
// console.log(name_);

    // var User_fname = document.querySelector('#fname').value;
    // var User_lname = document.querySelector('#lastname').value;
    // var User_email = document.querySelector('#email').value;
    // var User_phone = document.querySelector('#company').value;



function check(){

    // var User_fname = document.querySelector('#fname').value;
    // let User_lname = document.querySelector('#lastname').value;
    // let User_email = document.querySelector('#email').value;
    // let User_phone = document.querySelector('#company').value;

    var basic = 0;
    var add = 0;
    var mult = 1;

    if(document.getElementById("co1").checked) {
        mult = 1;
        document.getElementById("co11").innerHTML = "1 Database"
       }

    if(document.getElementById("co2").checked) {
        mult = 1.5;
        document.getElementById("co22").innerHTML = "2-10 Databases"
       }

    if(document.getElementById("co3").checked) {
        mult = 2;
        document.getElementById("co33").innerHTML = "More than 10 Databases"
       }

    if(document.getElementById("c1").checked) {
    document.getElementById("d1").innerHTML = "Sales"
     add += 1000;
     document.getElementById("d11").innerHTML = 1000*mult;
    }
    if(document.getElementById("c2").checked) {
    document.getElementById("d2").innerHTML = "Inventory"
     add += 1000;
     document.getElementById("d22").innerHTML = 1000*mult;
    }
    if(document.getElementById("c3").checked) {
    document.getElementById("d3").innerHTML = "GL"
     add += 1000;
     document.getElementById("d33").innerHTML = 1000*mult;
    }

    if(document.getElementById("c4").checked) {
    document.getElementById("d4").innerHTML = "AR"
     add += 1000;
     document.getElementById("d55").innerHTML = 1000*mult;
    }
    if(document.getElementById("c5").checked) {
    document.getElementById("d5").innerHTML = "AP"
     add += 1000;
    document.getElementById("d55").innerHTML = 1000*mult;

    }
    if(document.getElementById("c6").checked) {
    document.getElementById("d6").innerHTML = "GP"
     add += 1000;
     document.getElementById("d66").innerHTML = 1000*mult;
    }
    var p = basic + add * mult;
    var d_p = add * mult;
    var price = p ;
    document.getElementById('totall').innerHTML = price;
   }

   function myfunction(){
    alert("Testing Button Succesful")
   }

   function collected(){
    var User_fname = document.querySelector('#fname').value;
    var User_lname = document.querySelector('#lastname').value;
    var User_email = document.querySelector('#email').value;

    console.log(User_fname);
    console.log(User_lname);
    console.log(User_email);
    
}
